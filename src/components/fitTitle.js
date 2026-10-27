// Font size for a spaced all-caps title so it never overflows its row:
// scales with the row width (container query units) by character count, capped at `max`.
// Gambetta caps + 0.06em tracking measure ~0.75em per character; 0.8 leaves headroom.
// The row element needs the `@container` class.
export default function fitTitle(title, { max, hasLogo = false }) {
  const logoSpace = hasLogo ? ' - 3rem' : ''; // 32px logo + 16px gap
  return { fontSize: `min(${max}, calc((100cqw${logoSpace}) / ${(title.length * 0.8).toFixed(2)}))` };
}
