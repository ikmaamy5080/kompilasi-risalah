import { Link } from "react-router-dom";
import { FileQuestion } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export function EmptyState({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line bg-white px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
        <FileQuestion className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{title ?? t.common.emptyTitle}</h3>
      <p className="mt-1.5 max-w-md text-sm text-ink-soft">{description ?? t.common.emptyDesc}</p>
      <Link
        to="/risalah"
        className="mt-5 inline-flex items-center rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
      >
        {t.common.viewAllResources}
      </Link>
    </div>
  );
}
