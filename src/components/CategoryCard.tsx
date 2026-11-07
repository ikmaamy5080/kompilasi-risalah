import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import type { Category } from "../types";
import { cn } from "../lib/cn";
import { useLang } from "../i18n/LanguageContext";

export function CategoryCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  const { t } = useLang();
  const Icon = category.icon;
  return (
    <Link
      to={`/kategori/${category.id}`}
      className={cn(
        "group flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
      )}
      aria-label={t.cards.categoryAria(category.name, count)}
    >
      <div className="flex items-start justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: category.color }}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft">
          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          {t.common.risalahCount(count)}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold text-ink">{category.name}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
        {category.description}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
        {t.cards.viewRisalah}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
