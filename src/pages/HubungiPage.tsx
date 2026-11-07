import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Breadcrumb } from "../components/Breadcrumb";

export function HubungiPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: t.pages.hubungi.crumb }]} />

      <header className="mt-6">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {t.pages.hubungi.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {t.pages.hubungi.intro}
        </p>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-line bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-ink">
            {t.pages.hubungi.contactInfoTitle}
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-ink-soft">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {t.pages.hubungi.dept}
                <br />
                {t.pages.hubungi.hospital}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>+609-7452643 / 2645</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>dietitianHRPZ2@gmail.com</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-ink">{t.pages.hubungi.sendTitle}</h2>
          <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-medium text-ink-soft">
                {t.pages.hubungi.name}
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
                placeholder={t.pages.hubungi.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-ink-soft">
                {t.pages.hubungi.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
                placeholder={t.pages.hubungi.emailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-medium text-ink-soft">
                {t.pages.hubungi.message}
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
                placeholder={t.pages.hubungi.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {t.pages.hubungi.submit}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
