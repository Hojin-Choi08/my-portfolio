import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import ContactLinks from './ContactLinks.jsx';

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

// underlined fields: bottom border only, thicker + darker on focus
const fieldClass =
  'w-full border-b border-ink/40 bg-transparent py-3 text-lg text-ink transition-colors focus:border-b-2 focus:border-ink focus:outline-none';

export default function Contact() {
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const { contact, profile, ui } = useLanguage().t;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus('error');
      return;
    }
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading id="contact" />

      <div className="mt-14 grid gap-16 md:grid-cols-[2fr_3fr]">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">{contact.blurb}</p>
          {profile.email && (
            <p>
              <span className="label block text-muted">{ui.writeDirectly}</span>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-block font-display text-2xl break-all italic underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
              >
                {profile.email}
              </a>
            </p>
          )}
          <ContactLinks />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="label block text-muted">
              {ui.form.name}
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className="label block text-muted">
              {ui.form.email}
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="message" className="label block text-muted">
              {ui.form.message}
            </label>
            <textarea id="message" name="message" rows="4" required className={`${fieldClass} resize-y`} />
          </div>
          {/* Formspree honeypot: bots fill it, humans never see it */}
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="label bg-ink px-8 py-4 text-cream transition-colors hover:bg-espresso disabled:opacity-60"
            >
              {status === 'sending' ? ui.form.sending : ui.form.send}
            </button>
            <p role="status" aria-live="polite" className="font-display text-xl italic">
              {status === 'success' && <span className="text-matcha-ink">{ui.form.success}</span>}
              {status === 'error' && <span className="text-error">{ui.form.error}</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
