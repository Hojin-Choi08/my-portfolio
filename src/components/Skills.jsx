import { useLanguage } from '../i18n/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  const { skills } = useLanguage().t;
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading id="skills" />

      <ol className="mt-14 border-b hairline">
        {skills.map((skill, i) => (
          <li
            key={skill.title}
            className="grid gap-x-10 gap-y-3 border-t hairline py-8 sm:grid-cols-[6rem_1fr] md:grid-cols-[6rem_2fr_3fr] md:items-baseline"
          >
            <span aria-hidden="true" className="font-display text-5xl text-hojicha-ink">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="display text-3xl sm:text-4xl">{skill.title}</h3>
            <p className="leading-relaxed text-muted sm:col-start-2 md:col-start-auto">{skill.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
