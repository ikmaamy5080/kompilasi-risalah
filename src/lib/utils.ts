import { resources } from "../data/resources";
import { resourcesEn } from "../data/resources.en";
import { categories, categoryMap } from "../data/categories";
import { categoryEn } from "../data/categories.en";
import type { Lang, Resource, ResourceType, TargetGroup } from "../types";

export const RESOURCE_TYPES: ResourceType[] = [
  "Risalah",
  "Poster",
  "Infografik",
  "Panduan",
  "Diet sheet",
  "Patient education",
];

export const TARGET_GROUPS: TargetGroup[] = [
  "Adult",
  "Paediatric",
  "Caregiver",
  "Healthcare professional",
];

const enResourceMap = new Map(resourcesEn.map((r) => [r.id, r]));

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

function resourceFields(r: Resource): string[] {
  const cat = categoryMap.get(r.categoryId);
  const en = categoryEn[r.categoryId];
  return [
    r.title,
    r.description,
    r.categoryId,
    cat?.name ?? "",
    en?.name ?? "",
    r.type,
    r.targetGroup,
    r.keywords.join(" "),
    r.content.intro,
    r.content.blocks.flatMap((b) => [b.title, ...b.items]).join(" "),
    r.content.tips.join(" "),
    (r.content.sampleMeals ?? []).flatMap((m) => [m.label, ...m.items]).join(" "),
    r.content.references.join(" "),
    r.content.indications.join(" "),
  ];
}

function haystack(r: Resource): string {
  const ms = resourceFields(r);
  const en = enResourceMap.get(r.id);
  const fields = en ? [...ms, ...resourceFields(en)] : ms;
  return normalize(fields.join(" "));
}

const haystackCache = new Map<string, string>();
function getHaystack(r: Resource): string {
  let h = haystackCache.get(r.id);
  if (!h) {
    h = haystack(r);
    haystackCache.set(r.id, h);
  }
  return h;
}

function localizedResources(lang: Lang): Resource[] {
  if (lang === "ms") return resources;
  return resources.map((r) => enResourceMap.get(r.id) ?? r);
}

export function searchResources(query: string, limit?: number, lang: Lang = "ms"): Resource[] {
  const q = normalize(query).trim();
  const pool = localizedResources(lang);
  if (!q) return limit ? pool.slice(0, limit) : [...pool];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = pool
    .map((r) => {
      const h = getHaystack(r);
      let score = 0;
      for (const t of terms) {
        if (h.includes(t)) score += 1;
      }
      if (normalize(r.title).includes(q)) score += 5;
      if (r.keywords.some((k) => normalize(k).includes(q) || q.includes(normalize(k)))) score += 3;
      return { r, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
  const out = scored.map((s) => s.r);
  return limit ? out.slice(0, limit) : out;
}

export interface FilterState {
  categoryId?: string;
  type?: ResourceType | "";
  targetGroup?: TargetGroup | "";
  query?: string;
}

export function filterResources(f: FilterState, lang: Lang = "ms"): Resource[] {
  let out = localizedResources(lang);
  if (f.query?.trim()) {
    const q = normalize(f.query).trim();
    const terms = q.split(/\s+/).filter(Boolean);
    out = out.filter((r) => {
      const h = getHaystack(r);
      return terms.every((t) => h.includes(t));
    });
  }
  if (f.categoryId) out = out.filter((r) => r.categoryId === f.categoryId);
  if (f.type) out = out.filter((r) => r.type === f.type);
  if (f.targetGroup) out = out.filter((r) => r.targetGroup === f.targetGroup);
  return out;
}

export function countByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const c of categories) counts[c.id] = 0;
  for (const r of resources) counts[r.categoryId] = (counts[r.categoryId] ?? 0) + 1;
  return counts;
}

export function formatDate(iso: string, lang: Lang = "ms"): string {
  return new Date(iso + "T00:00:00").toLocaleDateString(lang === "ms" ? "ms-MY" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
