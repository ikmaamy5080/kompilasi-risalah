import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp } from "lucide-react";
import { getAllCategories } from "../data/categories";
import { getLatestResources, getPopularTopics } from "../data/resources";
import { countByCategory, searchResources } from "../lib/utils";
import { useLang } from "../i18n/LanguageContext";
import { SearchBar } from "../components/SearchBar";
import { CategoryCard } from "../components/CategoryCard";
import { ResourceCard } from "../components/ResourceCard";
import { SectionHeading } from "../components/SectionHeading";

export function HomePage() {
  const { lang, t } = useLang();
  const categories = getAllCategories(lang);
  const counts = countByCategory();
  const latest = getLatestResources(6, lang);
  const topics = getPopularTopics(lang);
  const exampleSearches = lang === "ms"
    ? ["diabetes", "potassium", "hemodialysis", "enteral nutrition", "burn"]
    : ["diabetes", "potassium", "hemodialysis", "enteral nutrition", "burns"];

  return (
    <>
      {/* Hero */}
      <section className="no-print border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
              {t.home.badge}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {t.home.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.home.subtitle}</p>
            <div className="mx-auto mt-8 max-w-xl">
              <SearchBar large />
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              {t.home.exampleLabel}{" "}
              {exampleSearches.map((term) => (
                <Link
                  key={term}
                  to={`/cari?q=${encodeURIComponent(term)}`}
                  className="mx-1 rounded bg-paper px-2 py-0.5 text-xs font-medium text-brand-dark hover:bg-brand-soft"
                >
                  {term}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" aria-labelledby="kategori-heading">
        <SectionHeading
          title={t.home.categoriesTitle}
          subtitle={t.home.categoriesSubtitle}
          action={
            <Link
              to="/kategori"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline"
            >
              {t.home.viewAllCategories}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} count={counts[c.id] ?? 0} />
          ))}
        </div>
      </section>

      {/* Latest resources */}
      <section className="border-y border-line bg-white" aria-labelledby="terkini-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading
            title={t.home.latestTitle}
            subtitle={t.home.latestSubtitle}
            action={
              <Link
                to="/risalah"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline"
              >
                {t.home.viewAllResources}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular topics */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" aria-labelledby="topik-heading">
        <SectionHeading title={t.home.popularTitle} subtitle={t.home.popularSubtitle} />
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => {
            const results = searchResources(topic.keyword, undefined, lang);
            return (
              <Link
                key={topic.label}
                to={`/cari?q=${encodeURIComponent(topic.keyword)}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-sm transition-colors hover:border-brand hover:text-brand-dark"
              >
                <TrendingUp className="h-4 w-4 text-orange" aria-hidden="true" />
                {topic.label}
                <span className="text-xs text-ink-soft/70">({results.length})</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6" aria-label={t.home.ctaAria}>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand px-6 py-10 text-center text-white sm:flex-row sm:px-10 sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold">{t.home.ctaTitle}</h2>
            <p className="mt-1.5 max-w-xl text-sm text-white/85">{t.home.ctaText}</p>
          </div>
          <Link
            to="/cari"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-lime px-6 py-3 font-semibold text-ink transition-colors hover:bg-lime-dark"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
