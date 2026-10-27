import { useLanguage } from '../i18n/LanguageContext.jsx';

// "Live →" / "Code →" text links; each is hidden when its link is empty.
export default function ProjectLinks({ project }) {
  const { ui } = useLanguage().t;
  return (
    <>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
          {ui.live} <span aria-hidden="true">→</span>
          <span className="sr-only">
            : {project.title} ({ui.opensInNewTab})
          </span>
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
          {ui.code} <span aria-hidden="true">→</span>
          <span className="sr-only">
            : {project.title} ({ui.opensInNewTab})
          </span>
        </a>
      )}
    </>
  );
}
