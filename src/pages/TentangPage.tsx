import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, ShieldCheck } from "lucide-react";
import { getAllCategories } from "../data/categories";
import { getResources } from "../data/resources";
import { useLang } from "../i18n/LanguageContext";
import { Breadcrumb } from "../components/Breadcrumb";

export function TentangPage() {
  const { lang, t } = useLang();
  const categories = getAllCategories(lang);
  const resourceCount = getResources(lang).length;
  const stats = [
    { icon: BookOpen, label: t.pages.tentang.statResources, value: resourceCount },
    { icon: Users, label: t.pages.tentang.statCategories, value: categories.length },
    { icon: ShieldCheck, label: t.pages.tentang.statDisciplines, value: categories.length },
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: t.pages.tentang.crumb }]} />

      <header className="mt-6">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {t.pages.tentang.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{t.pages.tentang.intro}</p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label={t.pages.tentang.statsAria}>
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-white p-5 text-center shadow-sm">
            <s.icon className="mx-auto h-6 w-6 text-brand" aria-hidden="true" />
            <p className="mt-2 font-display text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-line bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-bold text-ink">{t.pages.tentang.objectivesTitle}</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
          {t.pages.tentang.objectives.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-line bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-bold text-ink">{t.pages.tentang.howTitle}</h2>
        <ol className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
          {t.pages.tentang.howSteps.map((step, i) => (
            <li key={step}>{i + 1}. {step}</li>
          ))}
        </ol>
      </section>

      <div className="mt-8">
        <Link
          to="/risalah"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
        >
          {t.pages.tentang.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
