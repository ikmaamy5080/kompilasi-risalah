export interface CategoryEn {
  name: string;
  description: string;
  focus: string[];
}

export const categoryEn: Record<string, CategoryEn> = {
  nefrologi: {
    name: "Nephrology",
    description:
      "Nutrition guidance for kidney disease, dialysis and management of fluids, electrolytes and protein.",
    focus: ["CKD", "Dialysis", "Renal diet", "Fluid management", "Electrolytes", "Protein management"],
  },
  kardiologi: {
    name: "Cardiology",
    description:
      "Nutrition for heart disease, hypertension, dyslipidaemia and heart failure.",
    focus: ["Heart disease", "Hypertension", "Dyslipidaemia", "Heart failure", "Cardiovascular nutrition"],
  },
  endokrin: {
    name: "Endocrine",
    description:
      "Nutrition for diabetes mellitus, obesity, metabolic disorders and other endocrine conditions.",
    focus: ["Diabetes mellitus", "Obesity", "Dyslipidaemia", "Metabolic disorders", "Endocrine nutrition"],
  },
  pediatrik: {
    name: "Paediatrics",
    description:
      "Infant and child nutrition, growth, nutrient deficiencies and special nutrition for paediatric conditions.",
    focus: ["Infant nutrition", "Child nutrition", "Growth", "Nutrient deficiencies", "Paediatric condition nutrition"],
  },
  surgikal: {
    name: "Surgical",
    description:
      "Nutrition before and after surgery, enteral support and surgical patient recovery.",
    focus: ["Pre-operative", "Post-operative", "Enteral nutrition", "Surgical recovery", "Nutrition support"],
  },
  "critical-care": {
    name: "Critical Care",
    description:
      "Nutrition for critically ill ICU patients, including enteral, parenteral feeding and protein needs.",
    focus: ["ICU nutrition", "Enteral nutrition", "Parenteral nutrition", "Protein requirements", "Critical illness"],
  },
  burn: {
    name: "Burns",
    description:
      "High energy and protein nutrition for burn patients and wound healing.",
    focus: ["Burn nutrition", "High energy", "High protein", "Micronutrients", "Wound healing"],
  },
  domiciliary: {
    name: "Domiciliary",
    description:
      "Home nutrition care, feeding tubes, patient and caregiver education and community support.",
    focus: ["Home nutrition care", "Feeding tubes", "Patient/caregiver education", "Home enteral", "Community support"],
  },
};
