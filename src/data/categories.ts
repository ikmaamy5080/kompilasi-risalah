import type { Category, Lang } from "../types";
import { categoryEn } from "./categories.en";
import {
  Droplets,
  HeartPulse,
  Activity,
  Baby,
  Scissors,
  MonitorActivity,
  Flame,
  HouseHeart,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: "nefrologi",
    name: "Nefrologi",
    shortName: "Nefrologi",
    description:
      "Panduan pemakanan untuk penyakit buah pinggang, dialisis dan pengurusan cecair, elektrolit serta protein.",
    focus: ["CKD", "Dialisis", "Diet renal", "Pengurusan cecair", "Elektrolit", "Pengurusan protein"],
    icon: Droplets,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "kardiologi",
    name: "Kardiologi",
    shortName: "Kardiologi",
    description:
      "Pemakanan untuk penyakit jantung, hipertensi, dislipidemia dan gagal jantung.",
    focus: ["Penyakit jantung", "Hipertensi", "Dislipidemia", "Gagal jantung", "Pemakanan kardiovaskular"],
    icon: HeartPulse,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "endokrin",
    name: "Endokrin",
    shortName: "Endokrin",
    description:
      "Pemakanan untuk diabetes melitus, obesiti, gangguan metabolik dan keadaan endokrin lain.",
    focus: ["Diabetes melitus", "Obesiti", "Dislipidemia", "Gangguan metabolik", "Pemakanan endokrin"],
    icon: Activity,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "pediatrik",
    name: "Pediatrik",
    shortName: "Pediatrik",
    description:
      "Pemakanan bayi dan kanak-kanak, pertumbuhan, kekurangan zat dan pemakanan khusus penyakit pediatrik.",
    focus: ["Pemakanan bayi", "Pemakanan kanak-kanak", "Pertumbuhan", "Kekurangan zat", "Pemakanan penyakit pediatrik"],
    icon: Baby,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "surgikal",
    name: "Surgikal",
    shortName: "Surgikal",
    description:
      "Pemakanan sebelum dan selepas pembedahan, sokongan enteral serta pemulihan pesakit bedah.",
    focus: ["Pra-operasi", "Pasca-operasi", "Pemakanan enteral", "Pemulihan pembedahan", "Sokongan pemakanan"],
    icon: Scissors,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "critical-care",
    name: "Penjagaan Kritikal",
    shortName: "Penjagaan Kritikal",
    description:
      "Pemakanan pesakit kritikal di ICU, termasuk enteral, parenteral dan keperluan protein.",
    focus: ["Pemakanan ICU", "Pemakanan enteral", "Pemakanan parenteral", "Keperluan protein", "Penyakit kritikal"],
    icon: MonitorActivity,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "burn",
    name: "Kebakaran",
    shortName: "Kebakaran",
    description:
      "Pemakanan berkeperluan tinggi tenaga dan protein untuk pesakit luka bakar dan penyembuhan luka.",
    focus: ["Pemakanan luka bakar", "Tenaga tinggi", "Protein tinggi", "Mikronutrien", "Penyembuhan luka"],
    icon: Flame,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
  {
    id: "domiciliary",
    name: "Domisiliari",
    shortName: "Domisiliari",
    description:
      "Penjagaan pemakanan di rumah, tiub feeding, pendidikan pesakit dan penjaga serta sokongan komuniti.",
    focus: ["Penjagaan pemakanan rumah", "Tiub feeding", "Pendidikan pesakit/penjaga", "Enteral di rumah", "Sokongan komuniti"],
    icon: HouseHeart,
    color: "#859D34",
    softColor: "#EEF3DD",
  },
];

export const categoryMap = new Map(categories.map((c) => [c.id, c]));

function localizeCategory(c: Category, lang: Lang): Category {
  if (lang === "ms") return c;
  const en = categoryEn[c.id];
  if (!en) return c;
  return { ...c, name: en.name, description: en.description, focus: en.focus };
}

export function getAllCategories(lang: Lang = "ms"): Category[] {
  return categories.map((c) => localizeCategory(c, lang));
}

export function getCategory(id: string, lang: Lang = "ms"): Category | undefined {
  const c = categoryMap.get(id);
  return c ? localizeCategory(c, lang) : undefined;
}
