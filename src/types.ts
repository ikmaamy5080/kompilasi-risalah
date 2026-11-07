import type { ComponentType, SVGProps } from "react";

export type Lang = "ms" | "en";

export type ResourceType =
  | "Risalah"
  | "Poster"
  | "Infografik"
  | "Panduan"
  | "Diet sheet"
  | "Patient education";

export type TargetGroup = "Adult" | "Paediatric" | "Caregiver" | "Healthcare professional";

export interface Category {
  id: string;
  name: string;
  shortName: string;
  description: string;
  focus: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  softColor: string;
}

export interface ListBlock {
  title: string;
  tone: "check" | "alert" | "info";
  items: string[];
}

export interface RisalahContent {
  intro: string;
  indications: string[];
  blocks: ListBlock[];
  tips: string[];
  sampleMeals?: { label: string; items: string[] }[];
  references: string[];
  lastUpdated: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  description: string;
  type: ResourceType;
  targetGroup: TargetGroup;
  year: number;
  keywords: string[];
  content: RisalahContent;
  /** Path to a real PDF asset. Leave undefined if the document is not yet available. */
  pdfUrl?: string;
}
