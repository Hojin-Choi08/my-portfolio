import { links } from '../data/content.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';

// GitHub / LinkedIn / Email as underlined text links with a small icon; empty links are hidden.
export default function ContactLinks({ className = '' }) {
  const { t } = useLanguage();
  const items = [
    { href: links.github, label: 'GitHub', Icon: GitHubIcon, external: true },
    { href: links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
    { href: t.profile.email && `mailto:${t.profile.email}`, label: t.ui.form.email, Icon: MailIcon },
  ].filter((item) => item.href);

  return (
    <ul className={`flex flex-wrap gap-x-8 gap-y-4 ${className}`}>
      {items.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            className="group text-link"
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <span className="transition-colors group-hover:text-(--brand)" style={{ '--brand': Icon.brand }}>
              <Icon />
            </span>
            {label} <span aria-hidden="true">{external ? '↗' : '→'}</span>
            {external && <span className="sr-only"> ({t.ui.opensInNewTab})</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
