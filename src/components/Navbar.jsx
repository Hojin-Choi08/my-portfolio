import { useEffect, useState } from 'react';
import { content, defaultLanguage } from '../data/content.js';
import useActiveSection from '../hooks/useActiveSection.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

// section ids are the same in every language
const ids = ['home', ...content[defaultLanguage].sections.map((s) => s.id)];

export default function Navbar() {
  const { t } = useLanguage();
  const { profile, sections, ui } = t;
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-cream">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl tracking-[0.08em] uppercase">
          {profile.firstName[0]}.{profile.lastName[0]}.<span className="sr-only"> — {ui.backToTop}</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-10 sm:flex">
          <ul className="flex gap-10">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`label border-b pb-1 transition-colors hover:text-accent ${
                    active === id ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-4 border-l hairline" />
          <LanguageToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-5 sm:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="label"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? ui.menuClose : ui.menuOpen}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t hairline px-6 sm:hidden">
          {sections.map(({ id, label }, i) => (
            <li key={id} className="border-b hairline last:border-b-0">
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? 'true' : undefined}
                className="flex items-baseline justify-between py-4 transition-colors hover:text-accent"
              >
                <span className="display text-3xl">{label}</span>
                <span className="label text-muted">
                  {ui.no} {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
