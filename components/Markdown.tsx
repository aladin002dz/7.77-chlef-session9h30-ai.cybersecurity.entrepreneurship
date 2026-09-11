import type { ReactNode } from "react";

/**
 * Tiny markdown-lite renderer for slide bodies.
 * Supports: **bold**, *italic*, `code`, [text](url), "- " bullets,
 * "1. " ordered lists, "> " quotes, and blank-line-separated paragraphs.
 * Intentionally not a full markdown engine — just enough for this deck's content.
 */
export default function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const isBullet = (l: string) => /^-\s+/.test(l);
  const isOrdered = (l: string) => /^\d+\.\s+/.test(l);
  const isQuote = (l: string) => /^>\s?/.test(l);
  const isSpecial = (l: string) => isBullet(l) || isOrdered(l) || isQuote(l);

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (isBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isBullet(lines[i])) {
        items.push(lines[i].replace(/^-\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((it, idx) => (
            <li key={idx}>{parseInline(it, `b${key}-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (isOrdered(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrdered(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++}>
          {items.map((it, idx) => (
            <li key={idx}>{parseInline(it, `o${key}-${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (isQuote(line)) {
      const items: string[] = [];
      while (i < lines.length && isQuote(lines[i])) {
        items.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote key={key++}>
          {parseInline(items.join(" "), `q${key}`)}
        </blockquote>
      );
      continue;
    }

    const items: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !isSpecial(lines[i])) {
      items.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{parseInline(items.join(" "), `p${key}`)}</p>);
  }

  return <>{blocks}</>;
}

function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const k = `${keyPrefix}-${i++}`;
    if (match[1] !== undefined) {
      nodes.push(<code key={k}>{match[1]}</code>);
    } else if (match[2] !== undefined) {
      nodes.push(
        <a key={k} href={match[3]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      );
    } else if (match[4] !== undefined) {
      nodes.push(<strong key={k}>{match[4]}</strong>);
    } else if (match[5] !== undefined) {
      nodes.push(<em key={k}>{match[5]}</em>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
