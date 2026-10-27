import { useLanguage } from '../i18n/LanguageContext.jsx';
import ContactLinks from './ContactLinks.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const { profile, ui } = t;
  return (
    <section id="home" aria-label="Introduction" className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24">
      <p className="label text-accent">{profile.label}</p>

      {/* Mobile: stacked in DOM order (name → photo → intro).
          md+: two columns — name (top) and intro (bottom) on the left, photo spanning both rows on the right,
          so the photo's top meets the name and its bottom meets the links row. */}
      <div className="mt-6 grid md:grid-cols-[1fr_auto] md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-16">
        <div className="md:col-start-1 md:row-start-1">
          <div className="flex items-start gap-4">
            <h1 className="display w-min text-[clamp(3rem,8vw,7rem)] text-accent">
              {profile.firstName} {profile.lastName}
            </h1>
            <span aria-hidden="true" className="label mt-2 shrink-0 text-accent sm:mt-4">
              {ui.no} 01
            </span>
          </div>
          <hr className="mt-8 hairline" />
        </div>

        {profile.photo && (
          <figure className="relative mt-10 w-full max-w-72 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:w-80 md:max-w-none md:self-start lg:w-96">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              width="768"
              height="960"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[2px] border hairline object-cover"
            />
            {/* md+: hangs below the photo so the image itself lines up with the links row */}
            <figcaption className="mt-2 font-display text-sm text-muted italic md:absolute md:top-full md:left-0">
              {ui.fig} — {profile.firstName}, {new Date().getFullYear()}
            </figcaption>
          </figure>
        )}

        <div className="mt-10 max-w-xl md:col-start-1 md:row-start-2 md:self-end">
          <p className="font-display text-3xl italic sm:text-4xl">{profile.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">{profile.intro}</p>
          <ContactLinks className="mt-10" />
        </div>
      </div>
    </section>
  );
}
