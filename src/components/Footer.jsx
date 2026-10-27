import { useLanguage } from '../i18n/LanguageContext.jsx';
import ContactLinks from './ContactLinks.jsx';

export default function Footer() {
  const { profile, ui } = useLanguage().t;
  return (
    <footer className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 border-t hairline py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          {profile.location && ` — ${ui.brewedIn} ${profile.location}`}
        </p>
        <ContactLinks />
      </div>
    </footer>
  );
}
