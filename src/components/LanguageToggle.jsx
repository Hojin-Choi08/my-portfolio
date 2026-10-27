import { Fragment } from 'react';
import usFlag from 'flag-icons/flags/4x3/us.svg';
import krFlag from 'flag-icons/flags/4x3/kr.svg';
import { languages } from '../data/content.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const flags = { us: usFlag, kr: krFlag };

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const current = languages.find((l) => l.code === lang);

  return (
    <div role="group" aria-label={t.ui.language} className="flex items-center gap-2">
      <img
        src={flags[current.flag]}
        alt=""
        width="18"
        height="14"
        className="h-3.5 w-[18px] rounded-[1px] border hairline object-cover"
      />
      {languages.map((l, i) => (
        <Fragment key={l.code}>
          {i > 0 && (
            <span aria-hidden="true" className="label text-muted">
              /
            </span>
          )}
          <button
            type="button"
            lang={l.code}
            aria-pressed={lang === l.code}
            onClick={() => setLang(l.code)}
            className={`label border-b pb-1 transition-colors ${
              lang === l.code ? 'border-ink text-ink' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            <span aria-hidden="true">{l.label}</span>
            <span className="sr-only">{l.name}</span>
          </button>
        </Fragment>
      ))}
    </div>
  );
}
