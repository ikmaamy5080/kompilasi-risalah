import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, FileText } from "lucide-react";
import { searchResources } from "../lib/utils";
import { cn } from "../lib/cn";
import { useLang } from "../i18n/LanguageContext";

export function SearchBar({
  initialQuery = "",
  large = false,
  autoFocus = false,
  className,
}: {
  initialQuery?: string;
  large?: boolean;
  autoFocus?: boolean;
  className?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchResources(query, 5, lang);
  }, [query, lang]);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function submit(q = query) {
    if (!q.trim()) return;
    setOpen(false);
    navigate(`/cari?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <div ref={boxRef} className={cn("relative w-full", className)}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-center gap-2"
      >
        <div className="relative flex-1">
          <Search
            className={cn(
              "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft/60",
              large ? "h-5 w-5" : "h-4 w-4"
            )}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
            placeholder={t.search.placeholder}
            aria-label={t.search.ariaLabel}
            aria-expanded={open && suggestions.length > 0}
            aria-controls="search-suggestions"
            autoFocus={autoFocus}
            className={cn(
              "w-full rounded-lg border border-line bg-white text-ink shadow-sm placeholder:text-ink-soft/60",
              "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
              large ? "py-3.5 pl-11 pr-10 text-base" : "py-2.5 pl-10 pr-9 text-sm"
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-ink-soft/60 hover:text-ink"
              aria-label={t.search.clear}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className={cn(
            "rounded-lg bg-brand font-medium text-white transition-colors hover:bg-brand-dark",
            large ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
          )}
        >
          {t.search.button}
        </button>
      </form>

      {open && suggestions.length > 0 && (
        <ul
          id="search-suggestions"
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-lg"
        >
          {suggestions.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate(`/risalah/${r.slug}`);
                }}
                className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-paper"
              >
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-ink">{r.title}</span>
                  <span className="block text-xs text-ink-soft">{r.description}</span>
                </span>
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => submit()}
              className="w-full border-t border-line px-4 py-2.5 text-left text-sm font-medium text-brand-dark hover:bg-brand-soft"
            >
              {t.search.seeAllResults(query.trim())}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
