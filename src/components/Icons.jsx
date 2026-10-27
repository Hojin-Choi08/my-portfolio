import { siGithub } from 'simple-icons';

// Social icons for text links. Decorative (aria-hidden) — the link text is the label.
// They use currentColor; each exports a `brand` color for hover (see ContactLinks).

const base = { 'aria-hidden': true, focusable: false, viewBox: '0 0 24 24' };

export function GitHubIcon({ className = 'size-3.5' }) {
  return (
    <svg {...base} fill="currentColor" className={className}>
      <path d={siGithub.path} />
    </svg>
  );
}
GitHubIcon.brand = `#${siGithub.hex}`;

// LinkedIn was removed from simple-icons, so the mark is inlined here.
export function LinkedInIcon({ className = 'size-3.5' }) {
  return (
    <svg {...base} fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
LinkedInIcon.brand = '#0A66C2';

// Lucide "mail" (outline)
export function MailIcon({ className = 'size-3.5' }) {
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
    </svg>
  );
}
MailIcon.brand = 'var(--color-accent)'; // no brand for email — use the site accent
