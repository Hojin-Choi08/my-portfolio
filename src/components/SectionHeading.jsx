import { useLanguage } from '../i18n/LanguageContext.jsx';

// "No. 01 — About" menu-style heading, driven by `sections` in content.js.
export default function SectionHeading({ id }) {
  const { t } = useLanguage();
  const { sections, ui } = t;
  const index = sections.findIndex((s) => s.id === id);
  const { title, subtitle } = sections[index];
  return (
    <header className="border-t hairline pt-6">
      <p className="label text-hojicha-ink">
        {ui.no} {String(index + 1).padStart(2, '0')} <span aria-hidden="true">—</span> {title}
      </p>
      <h2 id={`${id}-title`} className="display mt-6 text-[clamp(3rem,9vw,6.5rem)]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 font-display text-2xl text-muted italic sm:text-3xl">{subtitle}</p>}
    </header>
  );
}
