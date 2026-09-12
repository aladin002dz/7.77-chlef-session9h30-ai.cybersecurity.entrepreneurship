"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/types";
import type { Locale } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import Markdown from "./Markdown";
import QRCode from "./QRCode";

const SWIPE_THRESHOLD = 56;
const WHEEL_COOLDOWN_MS = 650;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function readHashIndex(total: number): number {
  if (typeof window === "undefined") return 0;
  const raw = window.location.hash.replace("#", "");
  const n = parseInt(raw, 10);
  if (Number.isNaN(n)) return 0;
  return clamp(n - 1, 0, total - 1);
}

export default function SlideDeck({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const slides = dict.slides;
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [dragPx, setDragPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{
    x0: number;
    y0: number;
    lock: "x" | "y" | null;
  } | null>(null);
  const wheelLock = useRef(false);

  // Restore slide from URL hash on mount (window.location isn't available
  // during the static prerender, so this can only happen client-side), and
  // react to manual hash edits afterwards.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from the URL, an external source, is exactly what this effect is for.
    setIndex(readHashIndex(total));
    const onHash = () => setIndex(readHashIndex(total));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const clamped = clamp(next, 0, total - 1);
      setIndex(clamped);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${clamped + 1}`);
      }
    },
    [total]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Keyboard navigation. Arrow keys always match the deck's fixed physical
  // layout (left = previous, right = next) regardless of language, so every
  // input method (keys, swipe, wheel, click zones, buttons) stays consistent.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
      }
      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          goPrev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, goTo, total]);

  // Touch drag-to-swipe with live finger tracking.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      touch.current = { x0: t.clientX, y0: t.clientY, lock: null };
      setIsDragging(true);
    }

    function onTouchMove(e: TouchEvent) {
      if (!touch.current) return;
      const t = e.touches[0];
      const dx = t.clientX - touch.current.x0;
      const dy = t.clientY - touch.current.y0;

      if (touch.current.lock === null) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          touch.current.lock = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        }
      }

      if (touch.current.lock === "x") {
        e.preventDefault();
        setDragPx(dx);
      } else if (touch.current.lock === "y") {
        // Let the browser handle vertical scroll inside a long slide.
        touch.current = null;
        setIsDragging(false);
        setDragPx(0);
      }
    }

    function onTouchEnd() {
      if (touch.current?.lock === "x") {
        const dx = dragPx;
        if (dx <= -SWIPE_THRESHOLD) {
          goNext();
        } else if (dx >= SWIPE_THRESHOLD) {
          goPrev();
        }
      }
      touch.current = null;
      setIsDragging(false);
      setDragPx(0);
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [dragPx, goNext, goPrev]);

  // Trackpad / mouse-wheel horizontal navigation, debounced.
  function onWheel(e: React.WheelEvent) {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 24) return;
    if (wheelLock.current) return;
    wheelLock.current = true;
    if (e.deltaX > 0) {
      goNext();
    } else {
      goPrev();
    }
    setTimeout(() => {
      wheelLock.current = false;
    }, WHEEL_COOLDOWN_MS);
  }

  // Click zones: left half / right half of the viewport advance the deck
  // (skipped for touch, and for clicks on interactive elements like links).
  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    if (isDragging) return;
    const target = e.target as HTMLElement;
    if (target.closest("a, button, code")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    if (ratio > 0.6) {
      goNext();
    } else if (ratio < 0.4) {
      goPrev();
    }
  }

  function toggleFullscreen() {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  // The track always lays slides out left-to-right physically, and every
  // input (keys, swipe, wheel, click zones, buttons) always maps the same
  // way onto it — deliberately not flipped for RTL, to keep all of the
  // deck's navigation methods predictable and consistent.
  const trackOffset = index * (100 / total);
  const dragOffset = isDragging ? dragPx : 0;
  const track = {
    width: `${total * 100}%`,
    transform: `translateX(calc(-${trackOffset}% + ${dragOffset}px))`,
    transition: isDragging ? "none" : "transform 480ms cubic-bezier(0.22,1,0.36,1)",
  };

  const counterText = dict.ui.counter
    .replace("{current}", String(index + 1))
    .replace("{total}", String(total));

  return (
    <div className="deck" dir={dict.dir}>
      <header className="deck-header">
        <span className="deck-kicker">{dict.meta.title}</span>
        <div className="deck-header-actions">
          <button
            type="button"
            className="icon-btn fullscreen-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? dict.ui.exitFullscreenAria : dict.ui.fullscreenAria}
          >
            {isFullscreen ? <ExitFsIcon /> : <FsIcon />}
          </button>
          <LanguageSwitcher current={lang} slide={index + 1} />
        </div>
      </header>

      <div
        className="deck-viewport"
        ref={viewportRef}
        onWheel={onWheel}
        onClick={onClick}
      >
        <div className="deck-track" style={track}>
          {slides.map((slide, i) => (
            <section
              className="slide"
              key={i}
              dir={dict.dir}
              aria-hidden={i !== index}
              style={{ width: `${100 / total}%` }}
            >
              <div className="slide-inner">
                <p className="slide-kicker">{String(i + 1).padStart(2, "0")}</p>
                <h1 className="slide-title">{slide.title}</h1>
                {slide.subtitle ? (
                  <p className="slide-subtitle">{slide.subtitle}</p>
                ) : null}
                <div className="slide-body">
                  <Markdown text={slide.body} />
                </div>
                {i === 0 ? <QRCode label={dict.ui.qrLabel} /> : null}
              </div>
            </section>
          ))}
        </div>

        <button
          type="button"
          className="nav-arrow nav-arrow-prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label={dict.ui.prevAria}
          disabled={index === 0}
        >
          <ChevronIcon flip />
        </button>
        <button
          type="button"
          className="nav-arrow nav-arrow-next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label={dict.ui.nextAria}
          disabled={index === total - 1}
        >
          <ChevronIcon />
        </button>
      </div>

      <footer className="deck-footer">
        <div className="progress-track">
          <div
            className="progress-bar"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <div className="deck-footer-row">
          <span className="deck-footer-credit">{dict.ui.footer}</span>
          <span className="deck-counter" dir="ltr">
            {counterText}
          </span>
          <span className="deck-hint deck-hint-keyboard">{dict.ui.keyboardHint}</span>
          <span className="deck-hint deck-hint-touch">{dict.ui.swipeHint}</span>
        </div>
      </footer>
    </div>
  );
}

function ChevronIcon({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExitFsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M9 3v3a2 2 0 0 1-2 2H4m16-5v3a2 2 0 0 0 2 2h3M4 16h3a2 2 0 0 1 2 2v3m10-5h3a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
