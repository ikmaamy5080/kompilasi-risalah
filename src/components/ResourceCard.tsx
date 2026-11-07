import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Download, FileText, Tag, User } from "lucide-react";
import type { Resource } from "../types";
import { getCategory } from "../data/categories";
import { groupLabels, typeLabels } from "../i18n/strings";
import { useLang } from "../i18n/LanguageContext";
import { Badge } from "./ui";
import { cn } from "../lib/cn";

export function ResourceCard({ resource }: { resource: Resource }) {
  const { lang, t } = useLang();
  const category = getCategory(resource.categoryId, lang);
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="brand">{category?.name ?? resource.categoryId}</Badge>
        <Badge tone="outline">{typeLabels[lang][resource.type]}</Badge>
        <Badge tone="neutral">
          <User className="h-3 w-3" aria-hidden="true" />
          {groupLabels[lang][resource.targetGroup]}
        </Badge>
      </div>

      <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink">
        <Link
          to={`/risalah/${resource.slug}`}
          className="hover:text-brand-dark focus-visible:outline-none"
        >
          {resource.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {resource.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
        <span className="inline-flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {resource.year}
        </span>
        <span className="inline-flex items-center gap-1">
          <Tag className="h-3.5 w-3.5" aria-hidden="true" />
          {category?.name}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-line pt-4">
        <Link
          to={`/risalah/${resource.slug}`}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          {t.cards.readRisalah}
        </Link>
        {resource.pdfUrl ? (
          <a
            href={resource.pdfUrl}
            download
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand-dark"
            aria-label={t.common.downloadPdfAria(resource.title)}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <span
            className="inline-flex cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-2 text-sm font-medium text-ink-soft/60"
            title={t.common.pdfUnavailableTitle}
            aria-label={t.common.pdfUnavailableAria}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
        <ArrowRight
          className="hidden h-4 w-4 text-line transition-colors group-hover:text-brand"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
