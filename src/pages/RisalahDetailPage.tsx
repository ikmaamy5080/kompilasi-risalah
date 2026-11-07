import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlertTriangle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Info,
  Printer,
  Tag,
  User,
  Users,
} from "lucide-react";
import { getResourceBySlug } from "../data/resources";
import { getCategory } from "../data/categories";
import { formatDate } from "../lib/utils";
import { groupLabels, typeLabels } from "../i18n/strings";
import { useLang } from "../i18n/LanguageContext";
import type { ListBlock } from "../types";
import { Breadcrumb } from "../components/Breadcrumb";
import { Badge } from "../components/ui";
import { NotFoundPage } from "./NotFoundPage";

const toneStyles = {
  check: {
    icon: CheckCircle2,
    iconClass: "text-brand",
    border: "border-l-4 border-l-brand",
  },
  alert: {
    icon: AlertTriangle,
    iconClass: "text-orange",
    border: "border-l-4 border-l-orange",
  },
  info: {
    icon: Info,
    iconClass: "text-brand-dark",
    border: "border-l-4 border-l-brand/50",
  },
} as const;

function ContentBlock({ block }: { block: ListBlock }) {
  const style = toneStyles[block.tone];
  const Icon = style.icon;
  return (
    <section className={`print-block rounded-xl border border-line bg-white p-5 shadow-sm ${style.border}`}>
      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
        <Icon className={`h-5 w-5 ${style.iconClass}`} aria-hidden="true" />
        {block.title}
      </h2>
      <ul className="mt-3 space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                block.tone === "alert" ? "bg-orange" : "bg-brand"
              }`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RisalahDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const resource = useMemo(
    () => (slug ? getResourceBySlug(slug, lang) : undefined),
    [slug, lang]
  );

  if (!resource) return <NotFoundPage />;

  const category = getCategory(resource.categoryId, lang);
  const { content } = resource;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: t.common.resources, to: "/risalah" },
          ...(category ? [{ label: category.name, to: `/kategori/${category.id}` }] : []),
          { label: resource.title },
        ]}
      />

      {/* Header */}
      <header className="mt-6 print-block">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">{category?.name ?? resource.categoryId}</Badge>
          <Badge tone="outline">{typeLabels[lang][resource.type]}</Badge>
          <Badge tone="neutral">
            <User className="h-3 w-3" aria-hidden="true" />
            {groupLabels[lang][resource.targetGroup]}
          </Badge>
          <Badge tone="neutral">
            <CalendarDays className="h-3 w-3" aria-hidden="true" />
            {resource.year}
          </Badge>
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {resource.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">{resource.description}</p>
        <p className="mt-3 text-xs text-ink-soft/80">
          {t.detail.lastUpdated(formatDate(content.lastUpdated, lang))}
        </p>
      </header>

      {/* Actions */}
      <div className="no-print mt-6 flex flex-wrap gap-3">
        <a
          href="#risalah-kandungan"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          {t.common.readOnline}
        </a>
        {resource.pdfUrl ? (
          <a
            href={resource.pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand-dark"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.common.downloadPdf}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink-soft/60"
            title={t.common.pdfNotAvailable}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.common.downloadPdf}
          </button>
        )}
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand-dark"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          {t.common.print}
        </button>
      </div>
      {!resource.pdfUrl && (
        <p className="no-print mt-3 text-xs text-ink-soft">{t.detail.pdfNote}</p>
      )}

      {/* Content */}
      <div id="risalah-kandungan" className="mt-8 space-y-6">
        {/* Intro */}
        <section className="print-block rounded-xl border border-line bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-ink">{t.detail.introduction}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{content.intro}</p>
        </section>

        {/* Indications */}
        <section className="print-block rounded-xl border border-line bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <Users className="h-5 w-5 text-brand" aria-hidden="true" />
            {t.detail.indications}
          </h2>
          <ul className="mt-3 space-y-2">
            {content.indications.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Blocks */}
        {content.blocks.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}

        {/* Practical tips */}
        <section className="print-block rounded-xl border border-lime/60 border-line bg-lime/10 p-6">
          <h2 className="font-display text-lg font-bold text-ink">{t.detail.practicalTips}</h2>
          <ul className="mt-3 space-y-2">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Sample meals */}
        {content.sampleMeals && content.sampleMeals.length > 0 && (
          <section className="print-block rounded-xl border border-line bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
              <FileText className="h-5 w-5 text-brand" aria-hidden="true" />
              {t.detail.sampleMeals}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {content.sampleMeals.map((meal) => (
                <div key={meal.label} className="rounded-lg bg-paper p-4">
                  <h3 className="text-sm font-bold text-brand-dark">{meal.label}</h3>
                  <ul className="mt-2 space-y-1">
                    {meal.items.map((item, i) => (
                      <li key={i} className="text-xs leading-relaxed text-ink-soft">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        <section className="print-block rounded-xl border border-line bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-ink">{t.detail.references}</h2>
          <ul className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-ink-soft">
            {content.references.map((ref, i) => (
              <li key={i}>{ref}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer meta */}
      <div className="no-print mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-white p-5 text-sm text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <Tag className="h-4 w-4 text-brand" aria-hidden="true" />
          {category?.name} · {typeLabels[lang][resource.type]} · {groupLabels[lang][resource.targetGroup]}
        </span>
        <Link
          to={`/kategori/${resource.categoryId}`}
          className="font-medium text-brand-dark hover:underline"
        >
          {category ? t.detail.viewMoreIn(category.name) : t.detail.viewMoreIn(t.common.categories.toLowerCase())}
        </Link>
      </div>
    </div>
  );
}
