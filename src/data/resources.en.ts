import type { Resource } from "../types";

export const resourcesEn: Resource[] = [
  {
    id: "r01",
    slug: "diet-pesakit-hemodialisis",
    title: "Diet Factsheet for Haemodialysis Patients",
    categoryId: "nefrologi",
    description:
      "Nutrition guidance to help haemodialysis patients manage protein, fluid, sodium, potassium and phosphorus intake.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["haemodialysis", "hemodialysis", "dialysis", "renal", "kidney", "potassium", "sodium", "phosphorus", "protein", "fluid", "ckd"],
    content: {
      intro:
        "Patients on haemodialysis require strict control of protein, fluid, sodium, potassium and phosphorus intake. This factsheet summarises practical daily diet recommendations for adults receiving regular haemodialysis.",
      indications: [
        "Patients with chronic kidney disease (CKD) stage 5 receiving haemodialysis",
        "Peritoneal dialysis patients who need fluid management guidance",
        "Caregivers and family members who prepare meals for dialysis patients",
      ],
      blocks: [
        {
          title: "Protein",
          tone: "info",
          items: [
            "Target: 1.0–1.2 g protein/kg body weight/day.",
            "Prioritise high biological value protein: fish, chicken, eggs, milk and dairy products.",
            "Limit protein from processed animal sources and fatty meats.",
          ],
        },
        {
          title: "Fluids",
          tone: "info",
          items: [
            "Calculate daily fluid intake: yesterday's urine output + 500 ml.",
            "Divide into small portions throughout the day; avoid drinking large amounts at once.",
            "Reduce high-water foods such as soup, juicy fruit and ice cream.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Fish, skinless chicken, egg whites, tofu and beancurd",
            "Low-potassium vegetables: cabbage, radish, cucumber, salad greens",
            "White bread, white rice, fine noodles and rice vermicelli",
            "Herbs and spices for flavouring without salt",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "High-potassium foods: banana, orange, tomato, potato, avocado",
            "High-phosphorus foods: condensed milk, large amounts of dairy, nuts, organ meats",
            "High-sodium foods: processed foods, sauces, pickles, salty snacks",
            "Large amounts of caffeinated and carbonated drinks",
          ],
        },
        {
          title: "Medicines & Food",
          tone: "info",
          items: [
            "Take phosphate binders (as prescribed) with meals.",
            "Avoid supplements or nutritional products without advice from a doctor/dietitian.",
          ],
        },
      ],
      tips: [
        "Weigh yourself after each dialysis session to monitor fluid status.",
        "Use herbal salt or salt-free seasoning when cooking.",
        "Bring packed meals when going out — restaurant food is often high in sodium and potassium.",
        "Review with a dietitian every 3 months or when weight changes significantly.",
      ],
      sampleMeals: [
        {
          label: "Breakfast",
          items: ["2 slices white bread + boiled egg", "1 cup unsweetened tea"],
        },
        {
          label: "Lunch",
          items: ["White rice + steamed fish + cabbage/radish vegetables", "Limited warm water"],
        },
        {
          label: "Snack",
          items: ["Salt-free crackers", "Small apple slices (limited amount)"],
        },
      ],
      references: [
        "KDOQI Clinical Practice Guideline for Nutrition in CKD, 2020.",
        "Dietary Guidelines for Malaysian Renal Patients (Dietitian Department).",
        "Institutional haemodialysis nutrition protocol.",
      ],
      lastUpdated: "2026-01-15",
    },
  },
  {
    id: "r02",
    slug: "pengurusan-cecair-pesakit-ckd",
    title: "Fluid Management Guide for CKD Patients",
    categoryId: "nefrologi",
    description:
      "Fluid calculation system and strategies to reduce oedema for patients with early to moderate chronic kidney disease.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["ckd", "fluid", "oedema", "swelling", "water", "renal", "kidney", "nephrology"],
    content: {
      intro:
        "Good fluid management helps control blood pressure and reduces the burden on the heart and kidneys in CKD patients.",
      indications: [
        "CKD stage 1–4 patients with oedema or hypertension",
        "Patients before starting dialysis who need to control fluids",
      ],
      blocks: [
        {
          title: "Fluid Calculation Principles",
          tone: "info",
          items: [
            "Daily fluid = 24-hour urine output + 500–750 ml (depending on weather and activity).",
            "Includes all forms of fluid: water, tea, coffee, soup, jelly, ice cream.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Fresh vegetables and fruits in moderate amounts",
            "Protein without excessive fat",
            "Sugar-free drinks such as plain water and mineral water",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "Sweet drinks, syrups and concentrated juices",
            "Soupy foods and gravies with lots of broth",
            "Salty foods that stimulate thirst",
          ],
        },
      ],
      tips: [
        "Use small cups/mugs for drinking so intake is easy to count.",
        "Rinse your mouth with water if thirsty but you do not want to drink.",
        "Elevate your legs and rest when feet and ankles are swollen.",
      ],
      references: [
        "Institutional CKD fluid management guide.",
        "KDOQI Nutrition in CKD guideline.",
      ],
      lastUpdated: "2025-11-02",
    },
  },
  {
    id: "r03",
    slug: "risalah-diet-hipertensi",
    title: "DASH Diet Factsheet for Hypertension Patients",
    categoryId: "kardiologi",
    description:
      "Guide to the DASH eating pattern, which effectively lowers blood pressure through reduced sodium and increased potassium, magnesium and calcium.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["hypertension", "blood pressure", "dash", "sodium", "cardiology", "salt", "heart"],
    content: {
      intro:
        "Hypertension can be managed through lifestyle changes, especially the DASH (Dietary Approaches to Stop Hypertension) eating pattern.",
      indications: [
        "Stage 1 hypertensive patients or as an adjunct to medical treatment",
        "Individuals at risk of cardiovascular disease",
      ],
      blocks: [
        {
          title: "Key DASH Principles",
          tone: "info",
          items: [
            "Sodium target: < 2,300 mg/day (ideally < 1,500 mg for severe hypertension).",
            "Increase fruits and vegetables to 5 servings a day.",
            "Prioritise whole grains, legumes, fish and lean protein.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Green vegetables, tomato, banana, orange (potassium sources)",
            "Legumes, oats, brown rice",
            "Indian mackerel, salmon, tuna",
            "Unsweetened low-fat milk",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "Table salt, soy sauce, oyster sauce, salted soy sauce",
            "Processed foods: sausages, nuggets, canned foods",
            "Oily and fried foods",
            "Alcohol beyond recommended limits",
          ],
        },
      ],
      tips: [
        "Cook at home using herbs, ginger and garlic as flavouring.",
        "Read nutrition labels — choose products with sodium < 140 mg/100 g.",
        "Reduce salt intake gradually over 2–4 weeks.",
      ],
      references: [
        "Appel LJ et al. DASH eating plan. Hypertension, 2006.",
        "Institutional cardiovascular nutrition guide.",
      ],
      lastUpdated: "2026-02-10",
    },
  },
  {
    id: "r04",
    slug: "pemakanan-gagal-jantung",
    title: "Nutrition for Heart Failure Patients",
    categoryId: "kardiologi",
    description:
      "Nutrition advice and fluid management for patients with congestive heart failure to reduce the burden on the heart.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["heart failure", "fluid", "cardiology", "sodium", "oedema", "heart"],
    content: {
      intro:
        "Patients with heart failure often experience fluid retention. Proper nutrition helps control symptoms such as shortness of breath and swelling.",
      indications: [
        "Patients with congestive heart failure (NYHA II–IV)",
        "Post-myocardial infarction patients requiring fat and sodium control",
      ],
      blocks: [
        {
          title: "Fluids & Sodium",
          tone: "info",
          items: [
            "Limit sodium to < 2,000 mg/day (equivalent to < 5 g salt).",
            "Fluid restriction as instructed by the doctor — usually 1.5–2 litres/day.",
            "Weigh yourself every morning; report a gain of > 2 kg within 3 days.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Fresh vegetables and fruits",
            "Whole grains, legumes",
            "Fish and lean protein",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "Salty and processed foods",
            "Foods high in saturated and trans fats",
            "Alcoholic drinks",
          ],
        },
      ],
      tips: [
        "Record daily weight and bring it to every clinic appointment.",
        "Elevate your legs when sitting or resting to reduce oedema.",
      ],
      references: [
        "ESC Heart Failure Guidelines, 2023.",
        "Institutional heart failure nutrition guide.",
      ],
      lastUpdated: "2025-09-20",
    },
  },
  {
    id: "r05",
    slug: "panduan-penyakit-diabetes-melitus",
    title: "Nutrition Guide for Diabetes Mellitus",
    categoryId: "endokrin",
    description:
      "Diabetes nutrition principles including carbohydrate control, glycaemic index food selection and snack management between meals.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["diabetes", "sugar", "carbohydrate", "endocrine", "glucose", "insulin", "diabetic"],
    content: {
      intro:
        "A structured diet of carbohydrates, fibre and healthy fats helps control blood glucose levels in patients with diabetes mellitus.",
      indications: [
        "Patients with type 1 and type 2 diabetes",
        "Individuals with pre-diabetes and obese patients at risk of diabetes",
      ],
      blocks: [
        {
          title: "Carbohydrate Principles",
          tone: "info",
          items: [
            "Distribute carbohydrates evenly across 3 main meals and 1–2 snacks.",
            "Prioritise low glycaemic index complex carbohydrates: brown rice, oats, sweet potato, barley.",
            "Avoid sweet drinks, concentrated fruit juice and added sugar.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Non-starchy vegetables: mustard greens, cabbage, spinach, cucumber",
            "Protein: fish, chicken, eggs, legumes",
            "Healthy fats: nuts, avocado, olive oil",
            "Whole fruits with skin (limited amount)",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "White rice, white bread, large amounts of noodles and pasta at once",
            "Fried foods, sweet cakes and desserts",
            "Processed foods with added sugar",
          ],
        },
      ],
      tips: [
        "Measure portion sizes using your hand: palm ≈ 1 cup of rice.",
        "Eat at regular times — do not skip meals.",
        "Check blood glucose before and 2 hours after meals according to the clinic schedule.",
      ],
      sampleMeals: [
        {
          label: "Breakfast",
          items: ["Oats + low-fat milk + nuts", "1 boiled egg"],
        },
        {
          label: "Lunch",
          items: ["Half a cup of brown rice + grilled fish + mixed vegetables"],
        },
      ],
      references: [
        "Malaysian Diabetes Clinical Practice Guidelines.",
        "ADA Standards of Medical Care in Diabetes, 2026.",
      ],
      lastUpdated: "2026-03-01",
    },
  },
  {
    id: "r06",
    slug: "pemakanan-obesiti",
    title: "Nutrition for Obese Patients",
    categoryId: "endokrin",
    description:
      "Weight management strategies based on energy deficit, high-satiety foods and changes in eating behaviour.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["obesity", "weight", "lose weight", "endocrine", "metabolic", "diet"],
    content: {
      intro:
        "Obesity management requires a holistic approach: nutrition, physical activity and behavioural support. A weight loss target of 0.5–1 kg/week is realistic and sustainable.",
      indications: [
        "Patients with BMI ≥ 30 kg/m² or BMI ≥ 23 kg/m² with comorbidities",
        "Post-bariatric surgery patients needing nutrition guidance",
      ],
      blocks: [
        {
          title: "Energy Deficit Principles",
          tone: "info",
          items: [
            "Reduce daily energy intake by 500–750 kcal below requirements.",
            "Increase protein (1.2–1.5 g/kg target weight) to preserve muscle mass.",
            "Eat slowly and stop when 80% full.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Large amounts of vegetables and salad",
            "Fish, chicken, egg whites, tofu",
            "Whole grains in small serving sizes",
            "Plain water as the main drink",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "Sugary drinks, sweetened caffeinated drinks and alcohol",
            "Fried foods and fast food",
            "Highly processed foods high in fat and salt",
          ],
        },
      ],
      tips: [
        "Eat from a small plate and avoid eating in front of a screen.",
        "Prepare meals at home — avoid eating out more than 3 times a week.",
        "Record daily food intake to identify eating patterns.",
      ],
      references: [
        "WHO Obesity Guidelines.",
        "Institutional obesity management guide.",
      ],
      lastUpdated: "2025-12-05",
    },
  },
  {
    id: "r07",
    slug: "pemakanan-bayi-bawah-6-bulan",
    title: "Nutrition Guide for Infants Under 6 Months",
    categoryId: "pediatrik",
    description:
      "Exclusive breastfeeding, breastfeeding techniques and infant hunger cues — the foundation of healthy paediatric nutrition.",
    type: "Patient education",
    targetGroup: "Caregiver",
    year: 2026,
    keywords: ["infant", "breastfeeding", "breast milk", "paediatric", "baby", "infant nutrition"],
    content: {
      intro:
        "Infants under 6 months need exclusive breast milk. This handout is aimed at mothers, fathers and caregivers to understand safe infant feeding practices.",
      indications: [
        "Mothers breastfeeding infants under 6 months",
        "Caregivers looking after newborn babies",
      ],
      blocks: [
        {
          title: "Exclusive Breastfeeding",
          tone: "info",
          items: [
            "Give exclusive breast milk for the first 6 months without water, formula or other foods.",
            "Breastfeed on demand — newborns usually feed 8–12 times a day.",
            "Correct latch position: head and body aligned, baby's mouth wide on the nipple.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Breast milk directly",
            "Early initiation of breastfeeding after birth (within the first hour if possible)",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "Plain water, tea or juice before 6 months",
            "Solid foods or cereals before readiness signs appear",
            "Formula bottles unless advised by a doctor",
          ],
        },
      ],
      tips: [
        "Recognise hunger cues: rooting, lip smacking, stirring.",
        "Keep the baby close — skin-to-skin contact helps breastfeeding.",
        "Seek breastfeeding advice if nipples hurt or the baby is not gaining weight.",
      ],
      references: [
        "WHO Infant and Young Child Feeding Guidelines.",
        "Ministry of Health Malaysia — Breastfeeding Guidelines.",
      ],
      lastUpdated: "2026-01-20",
    },
  },
  {
    id: "r08",
    slug: "pemakanan-kanak-kanak-toddler",
    title: "Nutrition Guide for Children (Toddler 1–3 Years)",
    categoryId: "pediatrik",
    description:
      "Transition to solid foods, managing fussy eating and preventing nutrient deficiencies in young children.",
    type: "Risalah",
    targetGroup: "Paediatric",
    year: 2025,
    keywords: ["children", "toddler", "solid food", "paediatric", "growth", "child nutrition"],
    content: {
      intro:
        "At 1–3 years, children transition to family foods with small portions and appropriate textures.",
      indications: [
        "Children aged 1–3 years",
        "Parents facing issues with picky eating or poor appetite",
      ],
      blocks: [
        {
          title: "Meal Principles",
          tone: "info",
          items: [
            "Serve 3 main meals + 2 healthy snacks a day.",
            "Portion size ≈ the child's handful.",
            "Offer colourful food with varied textures.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Rice/bread, fish, chicken, eggs",
            "Colourful vegetables: spinach, radish, tomato",
            "Small-cut fruits: papaya, banana, watermelon",
            "Full-fat milk or formula up to 2 cups/day",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "High-sugar foods: cakes, chocolate, sweet drinks",
            "Small/unsafe foods: whole peanuts, whole grapes",
            "Caffeinated drinks and soda",
          ],
        },
      ],
      tips: [
        "Make mealtimes family time without screens.",
        "Offer limited choices (e.g. 'apple or banana?').",
        "Do not force feeding — offer again after a few days.",
      ],
      references: [
        "WHO Complementary Feeding Guidelines.",
        "Institutional child nutrition guide.",
      ],
      lastUpdated: "2025-10-14",
    },
  },
  {
    id: "r09",
    slug: "pemakanan-pra-dan-pasca-operasi",
    title: "Pre- and Post-Operative Nutrition",
    categoryId: "surgikal",
    description:
      "Nutritional preparation before surgery and recovery after surgery — from carbohydrate fasting to gradual diet.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["surgery", "operation", "pre-operative", "post-operative", "surgical", "fasting"],
    content: {
      intro:
        "Proper nutrition before and after surgery speeds up healing, reduces complications and shortens hospitalisation.",
      indications: [
        "Patients undergoing elective or emergency surgery",
        "Patients with poor nutritional status or at risk of malnutrition",
      ],
      blocks: [
        {
          title: "Pre-Operative",
          tone: "info",
          items: [
            "2–3 weeks before: increase protein (1.2–1.5 g/kg) and calories to store nutrition.",
            "Carbohydrate fasting for 12 hours before surgery (per hospital protocol) — plain water allowed up to 2 hours before.",
            "Avoid alcohol for at least 48 hours before surgery.",
          ],
        },
        {
          title: "Post-Operative",
          tone: "info",
          items: [
            "Start with clear fluids, then progress to soft foods gradually.",
            "Protein target 1.2–1.5 g/kg for wound healing.",
            "Eat small frequent meals (6 times a day) to prevent nausea.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Egg whites, fish, chicken, dairy products",
            "Soups, porridge, soft foods in early post-operative phase",
            "Vegetables and fruits for vitamins and fibre",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "High-fat foods that are hard to digest",
            "Carbonated drinks and spicy foods during early recovery",
            "Alcohol during the healing period",
          ],
        },
      ],
      tips: [
        "Follow fasting instructions from the anaesthesia team strictly.",
        "Drink enough plain water to prevent dehydration.",
        "Record food intake and symptoms (nausea, constipation) for the dietitian team.",
      ],
      references: [
        "ESPEN Guidelines on Nutrition in Surgery.",
        "Institutional perioperative nutrition protocol.",
      ],
      lastUpdated: "2026-02-18",
    },
  },
  {
    id: "r10",
    slug: "pemakanan-enteral-pesakit-surgikal",
    title: "Enteral Nutrition for Surgical Patients",
    categoryId: "surgikal",
    description:
      "Guide to enteral formulas, feeding rates and tolerance monitoring of feeding tubes for patients who cannot eat orally.",
    type: "Risalah",
    targetGroup: "Healthcare professional",
    year: 2025,
    keywords: ["enteral", "feeding tube", "ngt", "surgical", "formula", "nutrition support"],
    content: {
      intro:
        "Enteral nutrition is the primary route of nutritional support when patients cannot eat orally but the gastrointestinal tract is functional.",
      indications: [
        "Patients after major surgery (abdomen, oesophagus)",
        "Patients with dysphagia or swallowing problems",
        "Critically ill patients who are stable with a functioning gastrointestinal tract",
      ],
      blocks: [
        {
          title: "Formula Types",
          tone: "info",
          items: [
            "Standard polymeric formula for most patients.",
            "Semi-elemental / oligomeric formula for malabsorption or digestive problems.",
            "Specialised formulas: diabetes, renal, respiratory according to patient needs.",
          ],
        },
        {
          title: "Administration Protocol",
          tone: "info",
          items: [
            "Start at a low rate (20–30 ml/hr), increase by 10–20 ml/hr every 12–24 hours.",
            "Flush the tube with 30–50 ml water before and after feeding.",
            "Rest the tube for 4 hours at each adjustment to prevent aspiration.",
          ],
        },
        {
          title: "Monitoring",
          tone: "alert",
          items: [
            "Monitor tolerance signs: gastric residual, bloating, diarrhoea.",
            "Check tube position before each feed.",
            "Report gastric residual > 250–400 ml per protocol.",
          ],
        },
      ],
      tips: [
        "Elevate the head of the bed 30–45° during and for 1 hour after feeding.",
        "Use a feeding pump for rate accuracy — do not hang bags.",
        "Update weight and protein intake weekly.",
      ],
      references: [
        "ASPEN Enteral Nutrition Guidelines.",
        "Institutional enteral nutrition protocol.",
      ],
      lastUpdated: "2025-08-30",
    },
  },
  {
    id: "r11",
    slug: "pemakanan-parenteral-critical-care",
    title: "Parenteral Nutrition in Critical Care",
    categoryId: "critical-care",
    description:
      "Energy and protein needs of critically ill patients, timing of parenteral nutrition initiation and prevention of metabolic complications.",
    type: "Risalah",
    targetGroup: "Healthcare professional",
    year: 2026,
    keywords: ["parenteral", "tpn", "icu", "critical care", "energy", "protein"],
    content: {
      intro:
        "Critically ill patients have high metabolic needs. Choosing the right nutrition route and formula is important to prevent malnutrition and complications.",
      indications: [
        "ICU patients with non-functioning gastrointestinal tract",
        "Patients at high risk of malnutrition within 5–7 days",
        "Trauma or major post-operative patients with high nutritional needs",
      ],
      blocks: [
        {
          title: "Energy & Protein Needs",
          tone: "info",
          items: [
            "Energy: 20–25 kcal/kg body weight/day (use indirect calorimetry if available).",
            "Protein: 1.2–2.0 g/kg body weight/day depending on illness severity.",
            "Fat: 30–40% of total energy; carbohydrates for the remainder.",
          ],
        },
        {
          title: "Timing of Initiation",
          tone: "info",
          items: [
            "Enteral nutrition starts within 24–48 hours if the patient is stable.",
            "Parenteral nutrition only if enteral feeding cannot be given for ≥ 7 days.",
            "Overfeeding (> 110% of energy needs) is linked to complications — avoid.",
          ],
        },
        {
          title: "Monitoring",
          tone: "alert",
          items: [
            "Monitor blood glucose every 4–6 hours during TPN initiation.",
            "Check liver function (AST, ALT, bilirubin) and renal function (urea, creatinine) weekly.",
            "Watch for refeeding syndrome in malnourished patients.",
          ],
        },
      ],
      tips: [
        "Use 'permissive underfeeding' in early critically ill obese patients.",
        "Advance enteral feeding rates gradually to avoid intolerance.",
        "Close collaboration between doctors, dietitians and nurses.",
      ],
      references: [
        "ASPEN/SCCM Critical Care Nutrition Guidelines, 2022.",
        "ESPEN Critical Care Nutrition Guidelines.",
      ],
      lastUpdated: "2026-03-10",
    },
  },
  {
    id: "r12",
    slug: "pemakanan-pesakit-icu-enteral",
    title: "Enteral Nutrition for ICU Patients",
    categoryId: "critical-care",
    description:
      "Strategies for delivering enteral nutrition in critically ill patients — early initiation, target rates and management of feeding intolerance.",
    type: "Panduan",
    targetGroup: "Healthcare professional",
    year: 2025,
    keywords: ["icu", "enteral", "feeding", "critical", "critical care", "nutrition"],
    content: {
      intro:
        "Early enteral nutrition (within 24–48 hours) in ICU patients is associated with better outcomes compared with late feeding.",
      indications: [
        "Haemodynamically stable ICU patients",
        "Patients with a functioning gastrointestinal tract even on low-dose vasopressors",
      ],
      blocks: [
        {
          title: "Initiation Protocol",
          tone: "info",
          items: [
            "Start at 10–20 ml/hr, advance to target rate within 24–48 hours.",
            "Target rate: 60–80% of energy needs by ICU day 3.",
            "Use standard polymeric formula or specialised critical care formula.",
          ],
        },
        {
          title: "Managing Intolerance",
          tone: "alert",
          items: [
            "Diarrhoea: check antibiotics, formula and feeding rate.",
            "Bloating: temporarily reduce rate, avoid gas-producing intake.",
            "High gastric residual: stop feeding, reposition, check tube position.",
          ],
        },
        {
          title: "Monitoring",
          tone: "info",
          items: [
            "Monitor gastric residual every 4–6 hours initially.",
            "Monitor aspiration signs: temperature, sputum, positioning.",
            "Record feed volumes and tolerance in the patient chart.",
          ],
        },
      ],
      tips: [
        "Keep the head of the bed at 30–45° at all times during feeding.",
        "Use a pump with continuous or bolus method according to patient condition.",
        "Avoid giving medication through the same tube as formula without instruction.",
      ],
      references: [
        "ASPEN/SCCM Critical Care Nutrition Guidelines.",
        "Institutional ICU nutrition protocol.",
      ],
      lastUpdated: "2025-11-25",
    },
  },
  {
    id: "r13",
    slug: "pemakanan-pesakit-luka-bakar",
    title: "Nutrition for Burn Patients",
    categoryId: "burn",
    description:
      "Very high energy and protein needs for burn patients, micronutrient management and enteral nutrition strategies.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["burn", "burns", "burn injury", "protein", "energy", "micronutrients", "wound healing"],
    content: {
      intro:
        "Burn injuries cause severe hypermetabolism. Adequate nutrition is critical for survival, wound healing and immune function.",
      indications: [
        "Burn patients with > 20% total body surface area (TBSA)",
        "Patients with deep burns or burns involving face/joints",
        "Paediatric patients with significant burns",
      ],
      blocks: [
        {
          title: "Energy & Protein Needs",
          tone: "info",
          items: [
            "Energy: 25–30 kcal/kg body weight + 40 kcal per 1% TBSA burn (Curreri formula).",
            "Protein: 1.5–2.5 g/kg body weight/day for wound healing.",
            "Carbohydrates: complex glucose to avoid recurrent hypoglycaemia.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Protein: eggs, fish, chicken, lean meat, dairy products",
            "Carbohydrates: rice, bread, potatoes, pasta in large amounts",
            "Micronutrients: vitamin C, zinc, vitamin A from vegetables and fruits",
          ],
        },
        {
          title: "Additional Foods",
          tone: "info",
          items: [
            "Modular protein formulas (whey protein) to add protein without excess fat.",
            "Zinc and vitamin C supplements as prescribed if deficient.",
            "Electrolyte drinks during the early healing phase.",
          ],
        },
        {
          title: "Limit / Avoid",
          tone: "alert",
          items: [
            "High-fat foods that digest slowly",
            "Spicy foods that irritate mucosal oedema",
            "Alcohol — impairs healing and immune function",
          ],
        },
      ],
      tips: [
        "Eat 6–8 times a day — a small stomach cannot hold large meals.",
        "Drink plain water between meals.",
        "Monitor weight twice weekly — target +1–2 kg/week during active healing.",
      ],
      references: [
        "ABA Guidelines for Burn Patient Nutrition.",
        "Curreri formula for burn energy needs.",
      ],
      lastUpdated: "2026-01-28",
    },
  },
  {
    id: "r14",
    slug: "pemakanan-luka-bakar-kanak",
    title: "Nutrition for Children with Burns",
    categoryId: "burn",
    description:
      "Special nutritional needs of paediatric burn patients — including milk formulas and growth monitoring.",
    type: "Risalah",
    targetGroup: "Paediatric",
    year: 2025,
    keywords: ["burn", "children", "paediatric", "growth", "milk"],
    content: {
      intro:
        "Children with burns need more nutrition per kg of body weight than adults, and growth monitoring is critical.",
      indications: [
        "Children with burns > 10% total body surface area",
        "Infants with burns — relatively higher metabolic needs",
      ],
      blocks: [
        {
          title: "Special Requirements",
          tone: "info",
          items: [
            "Energy: 1800 kcal/m² body surface area (Galveston formula) or paediatric Curreri formula.",
            "Protein: 2.5–4 g/kg body weight/day — higher than adults.",
            "Calcium and phosphorus for continued bone growth.",
          ],
        },
        {
          title: "Recommended Foods",
          tone: "check",
          items: [
            "Full-fat/fortified milk, dairy products",
            "Egg whites, fish, chicken, lean meat",
            "Cereals, bread, potatoes, sweet potatoes",
            "Vegetables and fruits for vitamins",
          ],
        },
        {
          title: "Monitoring",
          tone: "alert",
          items: [
            "Weigh and measure height weekly.",
            "Monitor diarrhoea, constipation and signs of dehydration.",
            "Check zinc and vitamin levels if healing is slow.",
          ],
        },
      ],
      tips: [
        "Involve the child in food choices to improve cooperation.",
        "Use high-calorie milk formula if weight is not increasing.",
        "Prepare food with appropriate texture and size for age.",
      ],
      references: [
        "ABA Pediatric Burn Nutrition Guidelines.",
        "Galveston formula for paediatric energy needs.",
      ],
      lastUpdated: "2025-09-12",
    },
  },
  {
    id: "r15",
    slug: "pemakanan-pesakit-domiciliary",
    title: "Nutrition for Patients at Home (Domiciliary)",
    categoryId: "domiciliary",
    description:
      "Guide to home nutrition care for patients including meal preparation, monitoring and support for caregivers.",
    type: "Panduan",
    targetGroup: "Caregiver",
    year: 2026,
    keywords: ["home", "domiciliary", "caregiver", "home nutrition", "community"],
    content: {
      intro:
        "Many chronic patients return home with special nutrition needs. Caregivers play an important role in ensuring the right food is prepared and eaten.",
      indications: [
        "Chronic patients receiving home care",
        "Caregivers managing elderly or disabled patients",
        "Patients requiring ongoing nutrition monitoring",
      ],
      blocks: [
        {
          title: "Care Principles",
          tone: "info",
          items: [
            "Prepare food according to the patient's nutritional needs set by the dietitian.",
            "Eat together — a relaxed atmosphere improves appetite.",
            "Record food eaten and symptoms experienced.",
          ],
        },
        {
          title: "Meal Preparation",
          tone: "check",
          items: [
            "Cook fresh according to diet needs (low sodium, low sugar, etc.).",
            "Divide food into small portions that can be stored.",
            "Use labels on containers for date and contents.",
          ],
        },
        {
          title: "Monitoring",
          tone: "alert",
          items: [
            "Monitor weight and signs of dehydration.",
            "Report changes in appetite or digestive symptoms to the clinic.",
            "Ensure medicines are taken correctly in relation to mealtimes.",
          ],
        },
      ],
      tips: [
        "Schedule fixed mealtimes to help routine.",
        "Prepare healthy snacks that are easy to store and eat.",
        "Contact a dietitian or nurse if there are questions about nutrition.",
      ],
      references: [
        "Institutional domiciliary care guide.",
        "Dietitian Home Care Guidelines.",
      ],
      lastUpdated: "2026-02-01",
    },
  },
  {
    id: "r16",
    slug: "pemakanan-tiub-enteral-rumah",
    title: "Tube Feeding at Home (Home Enteral Nutrition)",
    categoryId: "domiciliary",
    description:
      "Guide for patients and caregivers managing home enteral feeding tubes — hygiene, formula administration and troubleshooting.",
    type: "Patient education",
    targetGroup: "Caregiver",
    year: 2025,
    keywords: ["enteral", "feeding tube", "home", "domiciliary", "home feeding", "caregiver"],
    content: {
      intro:
        "Some patients require enteral nutrition at home via nasogastric (NGT) or gastrostomy (PEG) tubes. Caregivers need training to manage this process safely.",
      indications: [
        "Patients with chronic dysphagia who are stable at home",
        "Post-stroke patients needing long-term nutrition support",
        "Head and neck cancer patients who cannot eat orally",
      ],
      blocks: [
        {
          title: "Hygiene & Safety",
          tone: "info",
          items: [
            "Wash hands with soap before and after handling the tube.",
            "Use gloves when feeding and cleaning the tube.",
            "Store formula in a cool place and check the expiry date.",
          ],
        },
        {
          title: "Formula Administration",
          tone: "check",
          items: [
            "Flush the tube with 30 ml water before and after feeding.",
            "Give formula at room temperature — do not heat in a microwave.",
            "Rest the tube for 4 hours after each feeding session.",
          ],
        },
        {
          title: "Troubleshooting",
          tone: "alert",
          items: [
            "Blocked tube: try flushing with warm water, do not force.",
            "Diarrhoea: reduce the rate, check formula and hygiene.",
            "Fever or abdominal pain: contact a doctor immediately.",
          ],
        },
      ],
      tips: [
        "Schedule feeds according to times set by the medical team.",
        "Keep the head of the bed at 30–45° for 1 hour after feeding.",
        "Record feed volumes and symptoms in a logbook.",
      ],
      references: [
        "Home Enteral Nutrition Guidelines (HEN).",
        "Institutional domiciliary enteral nutrition protocol.",
      ],
      lastUpdated: "2025-12-08",
    },
  },
];
