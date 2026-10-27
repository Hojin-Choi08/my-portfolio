import { useLanguage } from '../i18n/LanguageContext.jsx';
import StackIcon from './StackIcon.jsx';

// Tech tags as small tracked caps, each with a tiny monochrome logo.
export default function TechTags({ tags, className = '' }) {
  const { t } = useLanguage();
  return (
    <ul aria-label={t.ui.builtWith} className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className="label inline-flex items-center gap-1.5">
          <StackIcon name={tag} className="size-3" />
          {tag}
        </li>
      ))}
    </ul>
  );
}
