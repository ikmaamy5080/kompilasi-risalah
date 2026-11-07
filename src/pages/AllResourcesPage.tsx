import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { getResources } from "../data/resources";
import { filterResources } from "../lib/utils";
import type { FilterState } from "../lib/utils";
import { useLang } from "../i18n/LanguageContext";
import { Breadcrumb } from "../components/Breadcrumb";
import { ResourceCard } from "../components/ResourceCard";
import { FilterBar } from "../components/FilterBar";
import { EmptyState } from "../components/EmptyState";
import { SectionHeading } from "../components/SectionHeading";

export function AllResourcesPage() {
  const { lang, t } = useLang();
  const total = getResources(lang).length;
  const [params] = useSearchParams();
  const initialQuery = params.get("q") ?? "";
  const [filters, setFilters] = useState<FilterState>({ query: initialQuery });
  const [search, setSearch] = useState(initialQuery);

  const filtered = useMemo(() => {
    return filterResources({ ...filters, query: search || filters.query }, lang);
  }, [filters, search, lang]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: t.pages.allResources.crumb }]} />
      <SectionHeading
        title={t.pages.allResources.title}
        subtitle={t.pages.allResources.subtitle(total)}
      />

      <div className="rounded-xl border border-line bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/60"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.pages.allResources.placeholder}
            aria-label={t.pages.allResources.ariaLabel}
            className="w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
          />
        </div>
        <div className="mt-3">
          <FilterBar value={filters} onChange={setFilters} />
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-soft" aria-live="polite">
        {t.common.showing(filtered.length)}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <EmptyState />
        </div>
      )}
    </div>
  );
}
