import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import TechTags from './TechTags.jsx';
import fitTitle from './fitTitle.js';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const { details } = project;
  const { ui } = useLanguage().t;

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      // keep focus inside the dialog
      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-espresso/50 p-4 sm:items-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-[2px] border hairline bg-cream px-6 py-8 sm:px-10"
      >
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <p className="label text-accent">{project.kicker}</p>
          <button ref={closeRef} type="button" onClick={onClose} className="label transition-colors hover:text-accent">
            {ui.close} <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="@container mt-8 flex items-center gap-4">
          {project.logo && (
            <img
              src={project.logo}
              alt=""
              width="32"
              height="32"
              className="size-8 shrink-0 rounded-[4px] object-contain"
            />
          )}
          <h2
            id="project-modal-title"
            className="display"
            style={fitTitle(project.title, { max: '3.75rem', hasLogo: !!project.logo })}
          >
            {project.title}
          </h2>
        </div>
        <p className="mt-3 font-display text-2xl italic">{project.tagline}</p>

        <img
          src={project.image}
          alt={project.imageAlt}
          className="mt-8 aspect-[8/5] w-full rounded-[2px] border hairline object-cover"
        />

        <dl className="mt-8">
          <div className="grid gap-2 border-t hairline py-5 sm:grid-cols-[8rem_1fr]">
            <dt className="label pt-1 text-accent">{ui.problem}</dt>
            <dd className="leading-relaxed">{details.problem}</dd>
          </div>
          <div className="grid gap-2 border-t hairline py-5 sm:grid-cols-[8rem_1fr]">
            <dt className="label pt-1 text-accent">{ui.role}</dt>
            <dd className="leading-relaxed">{details.role}</dd>
          </div>
          <div className="grid gap-2 border-t hairline py-5 sm:grid-cols-[8rem_1fr]">
            <dt className="label pt-1 text-accent">{ui.features}</dt>
            <dd>
              <ul>
                {details.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-dotted border-ink/40 py-2 leading-relaxed last:border-b-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="grid gap-2 border-t hairline py-5 sm:grid-cols-[8rem_1fr]">
            <dt className="label pt-1 text-accent">{ui.builtWith}</dt>
            <dd>
              <TechTags tags={project.tags} className="pt-0.5" />
            </dd>
          </div>
        </dl>

        {(project.live || project.github) && (
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t hairline pt-6">
            <ProjectLinks project={project} />
          </div>
        )}
      </div>
    </div>
  );
}
