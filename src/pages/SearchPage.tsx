import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SearchX } from "lucide-react";
import { searchResources } from "../lib/utils";
import { useLang } from "../i18n/LanguageContext";
import { Breadcrumb } from "../components/Breadcrumb";
import { ResourceCard } from "../components/ResourceCard";
import { EmptyState } from "../components/EmptyState";
import { SectionHeading } from "../components/SectionHeading";

export function SearchPage() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const [input, setInput] = useState(query);

  useEffect(() => {
    setInput(query);
  }, [query]);

  const results = useMemo(() => searchResources(query, undefined, lang), [query, lang]);

  function submit(q: string) {
    const trimmed = q.trim();
    if (trimmed) {
      setParams({ q: trimmed });
    } else {
      setParams({});
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: t.pages.searchPage.crumb }]} />
      <SectionHeading
        title={t.pages.searchPage.title}
        subtitle={query ? t.pages.searchPage.subtitleQuery(query) : t.pages.searchPage.subtitleEmpty}
      />

      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="rounded-xl border border-line bg-white p-4 shadow-sm"
      >
        <div className="flex gap-2">
          <div className="relative flex-1">
            <SearchX className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/60" aria-hidden="true" />
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.pages.searchPage.placeholder}
              aria-label={t.pages.searchPage.ariaLabel}
              className="w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
          >
            {t.pages.searchPage.button}
          </button>
          {query && (
            <button
              type="button"
              onClick={() => {
                setInput("");
                setParams({});
              }}
              className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink-soft hover:border-brand hover:text-brand-dark"
            >
              {t.pages.searchPage.clear}
            </button>
          )}
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
          <Filter className="h-3.5 w-3.5" aria-hidden="true" />
          {t.pages.searchPage.scopeNote}
        </p>
      </form>

      <p className="mt-4 text-sm text-ink-soft" aria-live="polite">
        {query ? t.common.resultsFound(results.length) : t.common.noQuery}
      </p>

      {query && results.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="mt-4">
          <EmptyState
            title={t.pages.searchPage.emptyTitle(query)}
            description={t.pages.searchPage.emptyDescription}
          />
        </div>
      )}
    </div>
  );
}
