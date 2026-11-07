import { Link } from "react-router-dom";
import { HeartPulse, Mail, Phone, MapPin } from "lucide-react";
import { getAllCategories } from "../data/categories";
import { useLang } from "../i18n/LanguageContext";

export function Footer() {
  const { lang, t } = useLang();
  const categories = getAllCategories(lang);
  return (
    <footer className="no-print mt-16 border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
              <HeartPulse className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold text-ink">{t.brand.siteName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.categoriesAria}>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            {t.footer.categoriesHeading}
          </h2>
          <ul className="mt-4 space-y-2">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/kategori/${c.id}`}
                  className="text-sm text-ink-soft transition-colors hover:text-brand-dark"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            {t.footer.contactHeading}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {t.footer.dept}
                <br />
                {t.footer.hospital}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>+609-7452643 / 2645</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>dietitianHRPZ2@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-sm text-ink-soft">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
