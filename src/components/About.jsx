import { useLanguage } from '../i18n/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import StackIcon from './StackIcon.jsx';

export default function About() {
  const { t } = useLanguage();
  const { about, profile, ui } = t;
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading id="about" />

      <div className="mt-14 grid gap-16 md:grid-cols-[5fr_7fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {profile.resume && (
            <p className="pt-4">
              <a href={profile.resume} download className="text-link">
                {ui.downloadResume} <span aria-hidden="true">↓</span>
                <span className="sr-only"> (PDF)</span>
              </a>
            </p>
          )}
        </div>

        {/* Tech stack as a café menu */}
        <div>
          <p className="label mb-6 text-accent">{about.stackLabel}</p>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {about.stack.map(({ group, items }) => (
              <div key={group}>
                <h3 className="flex items-baseline justify-between border-b border-ink pb-2">
                  <span className="font-display text-2xl italic">{group}</span>
                  <span className="label text-muted">{String(items.length).padStart(2, '0')}</span>
                </h3>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3 border-b border-dotted border-ink/40 py-2.5"
                    >
                      <StackIcon name={item} brandOnHover />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
