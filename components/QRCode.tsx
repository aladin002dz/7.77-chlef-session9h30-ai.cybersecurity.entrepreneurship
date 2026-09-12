import { siteUrl } from "@/lib/site";

/**
 * Static QR code pointing at `siteUrl`, pre-rendered to an SVG path (via the
 * `qrcode` package, offline, at authoring time — not a runtime dependency)
 * so the static export stays a plain SVG with no client-side QR generation.
 * Regenerate with:
 *   npx qrcode -o qr.svg --type=svg -w 0 <siteUrl>
 * (or `QRCode.toString(siteUrl, { type: "svg", margin: 1, errorCorrectionLevel: "M" })`)
 * if `siteUrl` ever changes.
 */
export default function QRCode({ label }: { label: string }) {
  return (
    <a
      className="qr-card"
      href={siteUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <svg
        className="qr-code"
        viewBox="0 0 39 39"
        shapeRendering="crispEdges"
        role="img"
        aria-hidden="true"
      >
        <path fill="#ffffff" d="M0 0h39v39H0z" />
        <path
          stroke="#05070d"
          d="M1 1.5h7m1 0h1m1 0h1m4 0h2m5 0h2m3 0h2m1 0h7M1 2.5h1m5 0h1m2 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h2m1 0h3m1 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m5 0h1m1 0h1m1 0h3m2 0h1m1 0h1m3 0h2m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h2m1 0h2m2 0h4m2 0h1m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h2m4 0h2m7 0h6m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h4m1 0h1m4 0h2m1 0h1m3 0h1m4 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h1m2 0h4m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1M1 9.5h1m3 0h1m1 0h6m1 0h3m2 0h5m6 0h5m2 0h1M4 10.5h1m6 0h2m4 0h1m1 0h1m2 0h1m1 0h1m3 0h3m2 0h1m2 0h1M7 11.5h1m1 0h2m6 0h1m4 0h1m1 0h6m1 0h2m2 0h1M6 12.5h1m1 0h5m2 0h1m2 0h2m2 0h1m1 0h2m3 0h1m2 0h1m2 0h2M1 13.5h1m1 0h2m1 0h2m2 0h5m1 0h3m3 0h2m6 0h3m2 0h3M1 14.5h1m9 0h1m1 0h2m1 0h1m1 0h1m5 0h2m1 0h3m3 0h2M2 15.5h1m4 0h1m4 0h2m2 0h2m1 0h1m1 0h2m1 0h1m3 0h1m1 0h1m1 0h4M1 16.5h2m1 0h1m3 0h6m1 0h3m3 0h2m2 0h1m1 0h2m1 0h4m1 0h1M1 17.5h1m1 0h1m1 0h1m1 0h2m1 0h1m4 0h3m3 0h5m1 0h1m1 0h4m1 0h3M3 18.5h1m2 0h1m3 0h2m7 0h1m4 0h1m1 0h5m2 0h1m1 0h2M1 19.5h1m1 0h1m2 0h2m3 0h1m1 0h1m2 0h1m4 0h1m1 0h2m2 0h2m1 0h1m2 0h1m1 0h1M3 20.5h2m4 0h1m3 0h2m1 0h5m1 0h1m5 0h1m5 0h3M1 21.5h1m3 0h3m2 0h3m1 0h1m3 0h1m1 0h4m1 0h1m3 0h4m2 0h1M1 22.5h6m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h3m2 0h2M6 23.5h2m4 0h1m1 0h1m1 0h1m1 0h1m5 0h5m1 0h1m1 0h5M2 24.5h2m1 0h1m3 0h2m1 0h3m1 0h8m1 0h1m5 0h3m1 0h2M4 25.5h1m2 0h1m2 0h1m5 0h1m2 0h2m1 0h2m4 0h5m1 0h2m1 0h1M1 26.5h1m1 0h2m1 0h1m2 0h1m1 0h2m1 0h2m1 0h2m3 0h1m1 0h1m1 0h4m3 0h3M3 27.5h1m1 0h1m1 0h3m3 0h2m2 0h2m3 0h3m2 0h2m1 0h3m1 0h1M3 28.5h4m3 0h2m3 0h1m2 0h3m1 0h4m1 0h1m1 0h2m2 0h1m1 0h1M1 29.5h2m1 0h1m2 0h1m2 0h2m1 0h1m1 0h4m1 0h4m5 0h5m1 0h2M9 30.5h1m2 0h1m1 0h3m1 0h2m4 0h3m2 0h1m3 0h1m2 0h1M1 31.5h7m1 0h1m3 0h5m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1m2 0h1M1 32.5h1m5 0h1m2 0h1m1 0h1m1 0h2m5 0h2m2 0h1m1 0h1m1 0h1m3 0h3m1 0h1M1 33.5h1m1 0h3m1 0h1m1 0h5m1 0h3m2 0h1m1 0h3m4 0h7m1 0h1M1 34.5h1m1 0h3m1 0h1m2 0h1m1 0h1m5 0h2m2 0h3m1 0h2m1 0h4m4 0h1M1 35.5h1m1 0h3m1 0h1m2 0h2m3 0h2m2 0h1m1 0h2m1 0h1m1 0h2m1 0h3M1 36.5h1m5 0h1m2 0h1m1 0h1m1 0h1m1 0h4m1 0h3m1 0h1m2 0h1m4 0h1m1 0h2M1 37.5h7m1 0h3m1 0h1m1 0h1m2 0h1m1 0h6m1 0h2m1 0h3m1 0h4"
        />
      </svg>
      <span className="qr-caption">{label}</span>
    </a>
  );
}
