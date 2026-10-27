import { useCallback, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import ProjectPanel from './ProjectPanel.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const { projects } = useLanguage().t;
  // store the id, so an open modal follows a language switch
  const [selectedId, setSelectedId] = useState(null);
  const selected = projects.find((p) => p.id === selectedId);
  const triggerRef = useRef(null);

  const open = (project, trigger) => {
    triggerRef.current = trigger;
    setSelectedId(project.id);
  };

  const close = useCallback(() => {
    setSelectedId(null);
    triggerRef.current?.focus(); // return focus to the Details button
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-24">
      <div className="mx-auto max-w-6xl px-6 pb-14">
        <SectionHeading id="projects" />
      </div>

      {projects.map((project, i) => (
        <ProjectPanel key={project.id} project={project} number={i + 1} onOpenDetails={open} />
      ))}

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  );
}
