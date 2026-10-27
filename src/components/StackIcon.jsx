import { getStackIcon } from '../data/stackIcons.js';

// Monochrome tech logo in currentColor. With `brandOnHover`, it takes the brand
// color while a parent with the `group` class is hovered. Renders nothing for unknown names.
export default function StackIcon({ name, className = 'size-4', brandOnHover = false }) {
  const icon = getStackIcon(name);
  if (!icon) return null;

  const hover = brandOnHover ? 'transition-colors group-hover:text-(--brand)' : '';
  const style = brandOnHover ? { '--brand': icon.hex } : undefined;

  if (icon.path) {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`shrink-0 ${className} ${hover}`}
        style={style}
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const mask = `url("${icon.url}") center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className} ${hover}`}
      style={{ ...style, mask, WebkitMask: mask }}
    />
  );
}
