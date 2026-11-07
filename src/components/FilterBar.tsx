import { getAllCategories } from "../data/categories";
import { typeLabels, groupLabels } from "../i18n/strings";
import { useLang } from "../i18n/LanguageContext";
import { RESOURCE_TYPES, TARGET_GROUPS } from "../lib/utils";
import type { FilterState } from "../lib/utils";

export function FilterBar({
  value,
  onChange,
  compact = false,
}: {
  value: FilterState;
  onChange: (f: FilterState) => void;
  compact?: boolean;
}) {
  const { lang, t } = useLang();
  const categories = getAllCategories(lang);
  const selectCls =
    "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";

  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 gap-3 sm:grid-cols-3"
          : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      }
      role="group"
      aria-label={t.filters.groupAria}
    >
      <div>
        <label htmlFor="filter-category" className="mb-1 block text-xs font-medium text-ink-soft">
          {t.filters.category}
        </label>
        <select
          id="filter-category"
          className={selectCls}
          value={value.categoryId ?? ""}
          onChange={(e) => onChange({ ...value, categoryId: e.target.value || undefined })}
        >
          <option value="">{t.filters.allCategories}</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="filter-type" className="mb-1 block text-xs font-medium text-ink-soft">
          {t.filters.type}
        </label>
        <select
          id="filter-type"
          className={selectCls}
          value={value.type ?? ""}
          onChange={(e) => onChange({ ...value, type: (e.target.value || "") as FilterState["type"] })}
        >
          <option value="">{t.filters.allTypes}</option>
          {RESOURCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {typeLabels[lang][type]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="filter-group" className="mb-1 block text-xs font-medium text-ink-soft">
          {t.filters.targetGroup}
        </label>
        <select
          id="filter-group"
          className={selectCls}
          value={value.targetGroup ?? ""}
          onChange={(e) =>
            onChange({ ...value, targetGroup: (e.target.value || "") as FilterState["targetGroup"] })
          }
        >
          <option value="">{t.filters.allGroups}</option>
          {TARGET_GROUPS.map((g) => (
            <option key={g} value={g}>
              {groupLabels[lang][g]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button
          type="button"
          onClick={() => onChange({})}
          className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand-dark"
        >
          {t.filters.clear}
        </button>
      </div>
    </div>
  );
}
