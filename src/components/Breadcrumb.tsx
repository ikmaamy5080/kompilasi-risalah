import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const { t } = useLang();
  return (
    <nav aria-label="Breadcrumb" className="no-print">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-soft">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-dark" aria-label={t.nav.homeAria}>
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">{t.common.home}</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-line" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="hover:text-brand-dark">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
