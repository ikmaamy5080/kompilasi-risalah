import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export function NotFoundPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
        <Compass className="h-8 w-8" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-extrabold text-ink">{t.pages.notFound.title}</h1>
      <p className="mt-3 text-ink-soft">{t.pages.notFound.description}</p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/"
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
        >
          {t.pages.notFound.home}
        </Link>
        <Link
          to="/risalah"
          className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-brand hover:text-brand-dark"
        >
          {t.pages.notFound.allResources}
        </Link>
      </div>
    </div>
  );
}
