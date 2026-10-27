import { useLanguage } from '../i18n/LanguageContext.jsx';
import ContactLinks from './ContactLinks.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const { profile, ui } = t;
  return (
    <section id="home" aria-label="Introduction" className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24">
      <p className="label text-muted">{profile.label}</p>

      <div className="mt-6 flex items-start gap-4">
        <h1 className="display text-[clamp(3.75rem,13vw,10.5rem)]">
          {profile.firstName} {profile.lastName}
        </h1>
        <span aria-hidden="true" className="label mt-3 shrink-0 text-hojicha-ink sm:mt-6">
          {ui.no} 01
        </span>
      </div>

      <hr className="mt-8 hairline" />

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-xl">
          <p className="font-display text-3xl italic sm:text-4xl">{profile.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">{profile.intro}</p>
          <ContactLinks className="mt-10" />
        </div>

        {profile.photo && (
          <figure className="w-56 sm:w-64">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              width="512"
              height="640"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[2px] border hairline object-cover"
            />
            <figcaption className="mt-2 font-display text-sm text-muted italic">
              {ui.fig} — {profile.firstName}, {new Date().getFullYear()}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
