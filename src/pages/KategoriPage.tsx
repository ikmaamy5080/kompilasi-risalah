import { getAllCategories } from "../data/categories";
import { countByCategory } from "../lib/utils";
import { useLang } from "../i18n/LanguageContext";
import { CategoryCard } from "../components/CategoryCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionHeading } from "../components/SectionHeading";

export function KategoriPage() {
  const { lang, t } = useLang();
  const categories = getAllCategories(lang);
  const counts = countByCategory();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: t.pages.kategori.crumb }]} />
      <SectionHeading title={t.pages.kategori.title} subtitle={t.pages.kategori.subtitle} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} count={counts[c.id] ?? 0} />
        ))}
      </div>
    </div>
  );
}
