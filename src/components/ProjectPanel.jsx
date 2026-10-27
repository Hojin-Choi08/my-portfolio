import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import TechTags from './TechTags.jsx';
import fitTitle from './fitTitle.js';

const panelColors = {
  accent: 'bg-accent text-cream', // dark burgundy → light text (8.9:1)
  rose: 'bg-rose text-espresso',
  champagne: 'bg-champagne text-espresso',
  coral: 'bg-coral text-espresso',
};

export default function ProjectPanel({ project, number, onOpenDetails }) {
  const reduceMotion = useReducedMotion();
  const { ui } = useLanguage().t;
  const no = String(number).padStart(2, '0');

  return (
    // LazyMotion + m keeps the bundle small: only the features needed for a fade are loaded
    <LazyMotion features={domAnimation}>
      <m.article
        aria-labelledby={`project-${project.id}`}
        className={panelColors[project.color] ?? 'bg-paper text-ink'}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[3fr_2fr] md:gap-16 md:py-24">
          <div className="flex flex-col">
            <p className="label leading-5">
              {ui.no} {no} <span aria-hidden="true">&ensp;—&ensp;</span> {project.kicker}
            </p>
            <div className="@container mt-6 flex items-center gap-4">
              {project.logo && (
                <img
                  src={project.logo}
                  alt=""
                  width="32"
                  height="32"
                  className="size-8 shrink-0 rounded-[4px] object-contain"
                />
              )}
              <h3
                id={`project-${project.id}`}
                className="display"
                style={fitTitle(project.title, { max: '6.5rem', hasLogo: !!project.logo })}
              >
                {project.title}
              </h3>
            </div>
            <p className="mt-4 font-display text-2xl italic sm:text-3xl">{project.tagline}</p>
            <hr className="mt-8 border-current/25" />
            <p className="mt-6 max-w-lg leading-relaxed">{project.summary}</p>
            <TechTags tags={project.tags} className="mt-6" />
            <div className="mt-auto flex flex-wrap gap-x-8 gap-y-4 pt-10">
              <ProjectLinks project={project} />
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(e) => onOpenDetails(project, e.currentTarget)}
                className="text-link"
              >
                {ui.details} <span aria-hidden="true">+</span>
                <span className="sr-only">: {project.title}</span>
              </button>
            </div>
          </div>

          <figure className="self-center">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="800"
              height="500"
              loading="lazy"
              className="aspect-[8/5] w-full rounded-[2px] border border-current/30 object-cover"
            />
            <figcaption className="label mt-3">
              {ui.plate} {no}
            </figcaption>
          </figure>
        </div>
      </m.article>
    </LazyMotion>
  );
}
