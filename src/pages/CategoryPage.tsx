import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getResourcesByCategory } from "../data/resources";
import { getCategory as getCat } from "../data/categories";
import { useLang } from "../i18n/LanguageContext";
import { Breadcrumb } from "../components/Breadcrumb";
import { ResourceCard } from "../components/ResourceCard";
import { EmptyState } from "../components/EmptyState";
import { FilterBar } from "../components/FilterBar";
import type { FilterState } from "../lib/utils";
import { NotFoundPage } from "./NotFoundPage";

export function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const category = id ? getCat(id, lang) : undefined;
  const [filters, setFilters] = useState<FilterState>({ categoryId: id });
  const [search, setSearch] = useState("");

  const base = useMemo(() => {
    if (!id) return [];
    return getResourcesByCategory(id, lang);
  }, [id, lang]);

  const filtered = useMemo(() => {
    let out = base;
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    if (filters.type) out = out.filter((r) => r.type === filters.type);
    if (filters.targetGroup) out = out.filter((r) => r.targetGroup === filters.targetGroup);
    return out;
  }, [base, search, filters]);

  if (!category) return <NotFoundPage />;
  const Icon = category.icon;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: t.common.categories, to: "/kategori" },
          { label: category.name },
        ]}
      />

      <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-line bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
        <span
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.color }}
        >
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h1 className="font-display text-3xl font-extrabold text-ink">{category.name}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {category.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {category.focus.map((f) => (
              <span
                key={f}
                className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.pages.category.searchPlaceholder(category.name)}
            aria-label={t.pages.category.searchAria(category.name)}
            className="mb-4 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
          />
          <FilterBar
            value={filters}
            onChange={(f) => setFilters({ ...f, categoryId: id })}
            compact
          />
        </div>
        <div className="hidden lg:block">
          <Link
            to="/kategori"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.pages.category.backToCategories}
          </Link>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-soft" aria-live="polite">
        {t.common.showingOf(filtered.length, base.length)}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <EmptyState title={t.pages.category.emptyTitle(category.name)} />
        </div>
      )}
    </div>
  );
}
