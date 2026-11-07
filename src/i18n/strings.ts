import type { Lang, ResourceType, TargetGroup } from "../types";

export interface Strings {
  brand: { siteName: string };
  nav: {
    home: string;
    categories: string;
    resources: string;
    about: string;
    contact: string;
    searchCta: string;
    mobileSearchCta: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    homeAria: string;
    searchAria: string;
  };
  lang: { label: string; ms: string; en: string };
  common: {
    home: string;
    categories: string;
    resources: string;
    search: string;
    about: string;
    contact: string;
    read: string;
    downloadPdf: string;
    pdfNotAvailable: string;
    print: string;
    readOnline: string;
    lastUpdated: string;
    viewAllResources: string;
    handoutCount: (count: number) => string;
    risalahCount: (count: number) => string;
    showingOf: (showing: number, total: number) => string;
    showing: (count: number) => string;
    resultsFound: (count: number) => string;
    noQuery: string;
    emptyTitle: string;
    emptyDesc: string;
    downloadPdfAria: (title: string) => string;
    pdfUnavailableTitle: string;
    pdfUnavailableAria: string;
  };
  filters: {
    groupAria: string;
    category: string;
    type: string;
    targetGroup: string;
    allCategories: string;
    allTypes: string;
    allGroups: string;
    clear: string;
  };
  search: {
    placeholder: string;
    ariaLabel: string;
    button: string;
    clear: string;
    clearAria: string;
    seeAllResults: (query: string) => string;
    pagePlaceholder: string;
    pageAria: string;
    pageButton: string;
    pageClear: string;
    scopeNote: string;
    emptyHint: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    exampleLabel: string;
    viewAllCategories: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    latestTitle: string;
    latestSubtitle: string;
    viewAllResources: string;
    popularTitle: string;
    popularSubtitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    ctaAria: string;
  };
  cards: {
    viewRisalah: string;
    readRisalah: string;
    categoryAria: (name: string, count: number) => string;
  };
  detail: {
    lastUpdated: (date: string) => string;
    pdfNote: string;
    introduction: string;
    indications: string;
    practicalTips: string;
    sampleMeals: string;
    references: string;
    viewMoreIn: (category: string) => string;
  };
  pages: {
    kategori: { title: string; subtitle: string; crumb: string };
    allResources: {
      title: string;
      subtitle: (count: number) => string;
      crumb: string;
      placeholder: string;
      ariaLabel: string;
    };
    category: {
      searchPlaceholder: (name: string) => string;
      searchAria: (name: string) => string;
      backToCategories: string;
      emptyTitle: (name: string) => string;
    };
    searchPage: {
      crumb: string;
      title: string;
      subtitleQuery: (query: string) => string;
      subtitleEmpty: string;
      placeholder: string;
      ariaLabel: string;
      button: string;
      clear: string;
      scopeNote: string;
      emptyTitle: (query: string) => string;
      emptyDescription: string;
    };
    tentang: {
      crumb: string;
      title: string;
      intro: string;
      statsAria: string;
      statResources: string;
      statCategories: string;
      statDisciplines: string;
      objectivesTitle: string;
      objectives: string[];
      howTitle: string;
      howSteps: string[];
      cta: string;
    };
    hubungi: {
      crumb: string;
      title: string;
      intro: string;
      contactInfoTitle: string;
      dept: string;
      hospital: string;
      sendTitle: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    notFound: {
      title: string;
      description: string;
      home: string;
      allResources: string;
    };
  };
  footer: {
    tagline: string;
    categoriesHeading: string;
    categoriesAria: string;
    contactHeading: string;
    dept: string;
    hospital: string;
    copyright: string;
  };
}

export const typeLabels: Record<Lang, Record<ResourceType, string>> = {
  ms: {
    Risalah: "Risalah",
    Poster: "Poster",
    Infografik: "Infografik",
    Panduan: "Panduan",
    "Diet sheet": "Diet sheet",
    "Patient education": "Pendidikan Pesakit",
  },
  en: {
    Risalah: "Factsheet",
    Poster: "Poster",
    Infografik: "Infographic",
    Panduan: "Guide",
    "Diet sheet": "Diet sheet",
    "Patient education": "Patient education",
  },
};

export const groupLabels: Record<Lang, Record<TargetGroup, string>> = {
  ms: {
    Adult: "Dewasa",
    Paediatric: "Pediatrik",
    Caregiver: "Penjaga",
    "Healthcare professional": "Profesional Kesihatan",
  },
  en: {
    Adult: "Adult",
    Paediatric: "Paediatric",
    Caregiver: "Caregiver",
    "Healthcare professional": "Healthcare professional",
  },
};

export const strings: Record<Lang, Strings> = {
  ms: {
    brand: { siteName: "Kompilasi Risalah Pemakanan" },
    nav: {
      home: "Home",
      categories: "Kategori",
      resources: "Risalah",
      about: "Tentang",
      contact: "Hubungi Kami",
      searchCta: "Cari Risalah",
      mobileSearchCta: "Cari Risalah Pemakanan",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      mainNav: "Navigasi utama",
      mobileNav: "Navigasi mudah alih",
      homeAria: "Kompilasi Risalah Pemakanan — Laman utama",
      searchAria: "Cari risalah pemakanan",
    },
    lang: { label: "Bahasa", ms: "BM", en: "EN" },
    common: {
      home: "Home",
      categories: "Kategori",
      resources: "Risalah",
      search: "Carian",
      about: "Tentang",
      contact: "Hubungi Kami",
      read: "Baca",
      downloadPdf: "Download PDF",
      pdfNotAvailable: "Risalah belum tersedia",
      print: "Print",
      readOnline: "Baca Online",
      lastUpdated: "Kemas kini terakhir",
      viewAllResources: "Lihat semua risalah",
      handoutCount: (count) => `${count} risalah`,
      risalahCount: (count) => `${count} risalah`,
      showingOf: (showing, total) => `Menunjukkan ${showing} daripada ${total} risalah`,
      showing: (count) => `Menunjukkan ${count} risalah`,
      resultsFound: (count) => `${count} keputusan dijumpai`,
      noQuery: "Tiada pertanyaan carian",
      emptyTitle: "Tiada hasil ditemui",
      emptyDesc: "Cuba ubah kata kunci carian atau longgarkan penapis untuk melihat lebih banyak risalah.",
      downloadPdfAria: (title) => `Muat turun PDF: ${title}`,
      pdfUnavailableTitle: "Risalah belum tersedia",
      pdfUnavailableAria: "PDF belum tersedia",
    },
    filters: {
      groupAria: "Penapis risalah",
      category: "Kategori",
      type: "Jenis Risalah",
      targetGroup: "Sasaran Pesakit",
      allCategories: "Semua kategori",
      allTypes: "Semua jenis",
      allGroups: "Semua kumpulan",
      clear: "Kosongkan Penapis",
    },
    search: {
      placeholder: "Cari risalah pemakanan...",
      ariaLabel: "Cari risalah pemakanan",
      button: "Cari",
      clear: "Kosongkan carian",
      clearAria: "Kosongkan carian",
      seeAllResults: (query) => `Lihat semua keputusan untuk “${query}”`,
      pagePlaceholder: "Cari mengikut tajuk, penyakit, makanan atau topik...",
      pageAria: "Carian risalah",
      pageButton: "Cari",
      pageClear: "Kosongkan",
      scopeNote: "Carian merangkumi tajuk, penyakit, makanan, kategori dan kata kunci.",
      emptyHint: "Cuba kata kunci lain seperti 'diabetes', 'sodium', 'hemodialysis' atau 'enteral nutrition'.",
    },
    home: {
      badge: "Koleksi Risalah Pemakanan Klinikal",
      title: "Kompilasi Risalah Pemakanan",
      subtitle:
        "Rujukan pemakanan klinikal yang mudah dicapai, tersusun dan mesra pengguna — untuk profesional kesihatan dalam merawat pesakit.",
      exampleLabel: "Contoh carian:",
      viewAllCategories: "Lihat semua kategori",
      categoriesTitle: "Kategori Risalah",
      categoriesSubtitle: "Pilih disiplin klinikal untuk meneroka risalah pemakanan berkaitan.",
      latestTitle: "Risalah Terkini",
      latestSubtitle: "Kandungan yang baru ditambah atau dikemas kini.",
      viewAllResources: "Lihat semua risalah",
      popularTitle: "Topik Popular",
      popularSubtitle: "Topik yang kerap dicari oleh profesional kesihatan.",
      ctaTitle: "Perlukan risalah tertentu?",
      ctaText: "Gunakan carian untuk mencari mengikut penyakit, makanan, topik nutrisi atau kategori.",
      ctaButton: "Mula Mencari",
      ctaAria: "Panggilan tindakan",
    },
    cards: {
      viewRisalah: "Lihat Risalah",
      readRisalah: "Baca Risalah",
      categoryAria: (name, count) => `${name} — ${count} risalah`,
    },
    detail: {
      lastUpdated: (date) => `Kemas kini terakhir: ${date}`,
      pdfNote: "Risalah belum tersedia sebagai PDF. Anda boleh membaca kandungan di atas atau mencetak halaman ini.",
      introduction: "Pengenalan",
      indications: "Sasaran / Petunjuk",
      practicalTips: "Petua Praktikal",
      sampleMeals: "Contoh Hidangan",
      references: "Rujukan",
      viewMoreIn: (category) => `Lihat risalah lain dalam ${category} →`,
    },
    pages: {
      kategori: {
        title: "Kategori Risalah",
        subtitle: "Lapan disiplin pemakanan klinikal yang dikumpulkan dalam satu portal.",
        crumb: "Kategori",
      },
      allResources: {
        title: "Semua Risalah",
        subtitle: (count) => `Koleksi ${count} bahan rujukan pemakanan klinikal.`,
        crumb: "Risalah",
        placeholder: "Cari risalah pemakanan...",
        ariaLabel: "Cari risalah",
      },
      category: {
        searchPlaceholder: (name) => `Cari dalam ${name}...`,
        searchAria: (name) => `Cari dalam kategori ${name}`,
        backToCategories: "Kembali ke semua kategori",
        emptyTitle: (name) => `Tiada risalah dalam ${name}`,
      },
      searchPage: {
        crumb: "Carian",
        title: "Hasil Carian",
        subtitleQuery: (query) => `Keputusan untuk “${query}”`,
        subtitleEmpty: "Masukkan kata kunci untuk mencari risalah.",
        placeholder: "Cari mengikut tajuk, penyakit, makanan atau topik...",
        ariaLabel: "Carian risalah",
        button: "Cari",
        clear: "Kosongkan",
        scopeNote: "Carian merangkumi tajuk, penyakit, makanan, kategori dan kata kunci.",
        emptyTitle: (query) => `Tiada hasil untuk “${query}”`,
        emptyDescription: "Cuba kata kunci lain seperti 'diabetes', 'sodium', 'hemodialysis' atau 'enteral nutrition'.",
      },
      tentang: {
        crumb: "Tentang",
        title: "Tentang Kompilasi Risalah Pemakanan",
        intro:
          "Portal ini ialah koleksi digital risalah pemakanan klinikal yang disusun untuk kegunaan profesional kesihatan — termasuk dietitian, pegawai perubatan, jururawat dan kakitangan kesihatan lain yang terlibat dalam penjagaan pesakit.",
        statsAria: "Statistik",
        statResources: "Risalah",
        statCategories: "Kategori Klinikal",
        statDisciplines: "Disiplin",
        objectivesTitle: "Objektif",
        objectives: [
          "Menyediakan rujukan pemakanan klinikal yang mudah dicari dan diakses.",
          "Menyeragamkan maklumat pemakanan merentas disiplin perubatan.",
          "Menyokong pendidikan pesakit dan penjaga melalui risalah yang jelas.",
          "Memudahkan profesional kesihatan membuat keputusan pemakanan yang selamat.",
        ],
        howTitle: "Cara Menggunakan",
        howSteps: [
          "Layari mengikut kategori klinikal atau gunakan carian.",
          "Pilih risalah yang berkaitan dengan keadaan pesakit.",
          "Baca kandungan, muat turun PDF atau cetak untuk rujukan.",
          "Gunakan maklumat untuk pendidikan pesakit dan perancangan diet.",
        ],
        cta: "Mula Meneroka Risalah",
      },
      hubungi: {
        crumb: "Hubungi Kami",
        title: "Hubungi Kami",
        intro: "Ada soalan, cadangan atau ingin menyumbang risalah pemakanan? Hubungi pasukan kami.",
        contactInfoTitle: "Maklumat Perhubungan",
        dept: "Jabatan Dietetik & Sajian",
        hospital: "Hospital Raja Perempuan Zainab II",
        sendTitle: "Hantar Mesej",
        name: "Nama",
        namePlaceholder: "Nama anda",
        email: "E-mel",
        emailPlaceholder: "nama@contoh.com",
        message: "Mesej",
        messagePlaceholder: "Tulis mesej anda di sini...",
        submit: "Hantar Mesej",
      },
      notFound: {
        title: "Halaman Tidak Dijumpai",
        description: "Maaf, halaman yang anda cari tidak wujud atau telah dialihkan.",
        home: "Kembali ke Home",
        allResources: "Lihat Semua Risalah",
      },
    },
    footer: {
      tagline:
        "Rujukan pemakanan klinikal untuk pendidikan dan penjagaan pesakit. Koleksi risalah yang tersusun untuk profesional kesihatan.",
      categoriesHeading: "Kategori",
      categoriesAria: "Pautan kategori",
      contactHeading: "Hubungi Kami",
      dept: "Jabatan Dietetik & Sajian",
      hospital: "Hospital Raja Perempuan Zainab II",
      copyright: "© 2026 Ikm@amy. Hak cipta terpelihara.",
    },
  },
  en: {
    brand: { siteName: "Clinical Nutrition Compendium" },
    nav: {
      home: "Home",
      categories: "Categories",
      resources: "Resources",
      about: "About",
      contact: "Contact Us",
      searchCta: "Search Resources",
      mobileSearchCta: "Search Nutrition Resources",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      homeAria: "Clinical Nutrition Compendium — Home page",
      searchAria: "Search nutrition resources",
    },
    lang: { label: "Language", ms: "BM", en: "EN" },
    common: {
      home: "Home",
      categories: "Categories",
      resources: "Resources",
      search: "Search",
      about: "About",
      contact: "Contact Us",
      read: "Read",
      downloadPdf: "Download PDF",
      pdfNotAvailable: "Resource not yet available",
      print: "Print",
      readOnline: "Read Online",
      lastUpdated: "Last updated",
      viewAllResources: "View all resources",
      handoutCount: (count) => `${count} resources`,
      risalahCount: (count) => `${count} resources`,
      showingOf: (showing, total) => `Showing ${showing} of ${total} resources`,
      showing: (count) => `Showing ${count} resources`,
      resultsFound: (count) => `${count} results found`,
      noQuery: "No search query",
      emptyTitle: "No results found",
      emptyDesc: "Try changing the search keywords or loosening the filters to see more resources.",
      downloadPdfAria: (title) => `Download PDF: ${title}`,
      pdfUnavailableTitle: "Resource not yet available",
      pdfUnavailableAria: "PDF not yet available",
    },
    filters: {
      groupAria: "Resource filters",
      category: "Category",
      type: "Resource Type",
      targetGroup: "Target Group",
      allCategories: "All categories",
      allTypes: "All types",
      allGroups: "All groups",
      clear: "Clear Filters",
    },
    search: {
      placeholder: "Search nutrition resources...",
      ariaLabel: "Search nutrition resources",
      button: "Search",
      clear: "Clear search",
      clearAria: "Clear search",
      seeAllResults: (query) => `View all results for “${query}”`,
      pagePlaceholder: "Search by title, condition, food or topic...",
      pageAria: "Resource search",
      pageButton: "Search",
      pageClear: "Clear",
      scopeNote: "Search covers titles, conditions, foods, categories and keywords.",
      emptyHint: "Try other keywords such as 'diabetes', 'sodium', 'hemodialysis' or 'enteral nutrition'.",
    },
    home: {
      badge: "Clinical Nutrition Handout Collection",
      title: "Clinical Nutrition Compendium",
      subtitle:
        "Easy-to-access, organised and user-friendly clinical nutrition references — for healthcare professionals caring for patients.",
      exampleLabel: "Example searches:",
      viewAllCategories: "View all categories",
      categoriesTitle: "Resource Categories",
      categoriesSubtitle: "Choose a clinical discipline to explore related nutrition resources.",
      latestTitle: "Latest Resources",
      latestSubtitle: "Content recently added or updated.",
      viewAllResources: "View all resources",
      popularTitle: "Popular Topics",
      popularSubtitle: "Topics frequently searched by healthcare professionals.",
      ctaTitle: "Need a specific resource?",
      ctaText: "Use search to find resources by condition, food, nutrition topic or category.",
      ctaButton: "Start Searching",
      ctaAria: "Call to action",
    },
    cards: {
      viewRisalah: "View Resource",
      readRisalah: "Read Resource",
      categoryAria: (name, count) => `${name} — ${count} resources`,
    },
    detail: {
      lastUpdated: (date) => `Last updated: ${date}`,
      pdfNote: "This resource is not yet available as a PDF. You can read the content above or print this page.",
      introduction: "Introduction",
      indications: "Target / Indications",
      practicalTips: "Practical Tips",
      sampleMeals: "Sample Meals",
      references: "References",
      viewMoreIn: (category) => `View more resources in ${category} →`,
    },
    pages: {
      kategori: {
        title: "Resource Categories",
        subtitle: "Eight clinical nutrition disciplines gathered in one portal.",
        crumb: "Categories",
      },
      allResources: {
        title: "All Resources",
        subtitle: (count) => `Collection of ${count} clinical nutrition reference materials.`,
        crumb: "Resources",
        placeholder: "Search nutrition resources...",
        ariaLabel: "Search resources",
      },
      category: {
        searchPlaceholder: (name) => `Search within ${name}...`,
        searchAria: (name) => `Search within category ${name}`,
        backToCategories: "Back to all categories",
        emptyTitle: (name) => `No resources in ${name}`,
      },
      searchPage: {
        crumb: "Search",
        title: "Search Results",
        subtitleQuery: (query) => `Results for “${query}”`,
        subtitleEmpty: "Enter keywords to search for resources.",
        placeholder: "Search by title, condition, food or topic...",
        ariaLabel: "Resource search",
        button: "Search",
        clear: "Clear",
        scopeNote: "Search covers titles, conditions, foods, categories and keywords.",
        emptyTitle: (query) => `No results for “${query}”`,
        emptyDescription: "Try other keywords such as 'diabetes', 'sodium', 'hemodialysis' or 'enteral nutrition'.",
      },
      tentang: {
        crumb: "About",
        title: "About the Clinical Nutrition Compendium",
        intro:
          "This portal is a digital collection of clinical nutrition handouts organised for healthcare professionals — including dietitians, medical officers, nurses and other health personnel involved in patient care.",
        statsAria: "Statistics",
        statResources: "Resources",
        statCategories: "Clinical Categories",
        statDisciplines: "Disciplines",
        objectivesTitle: "Objectives",
        objectives: [
          "Provide clinical nutrition references that are easy to find and access.",
          "Standardise nutrition information across medical disciplines.",
          "Support patient and caregiver education through clear handouts.",
          "Help healthcare professionals make safe nutrition decisions.",
        ],
        howTitle: "How to Use",
        howSteps: [
          "Browse by clinical category or use search.",
          "Select the resource relevant to the patient's condition.",
          "Read the content, download the PDF or print for reference.",
          "Use the information for patient education and diet planning.",
        ],
        cta: "Start Exploring Resources",
      },
      hubungi: {
        crumb: "Contact Us",
        title: "Contact Us",
        intro: "Have questions, suggestions or wish to contribute a nutrition resource? Contact our team.",
        contactInfoTitle: "Contact Information",
        dept: "Dietetics & Food Services Department",
        hospital: "Hospital Raja Perempuan Zainab II",
        sendTitle: "Send a Message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "name@example.com",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        submit: "Send Message",
      },
      notFound: {
        title: "Page Not Found",
        description: "Sorry, the page you are looking for does not exist or has been moved.",
        home: "Back to Home",
        allResources: "View All Resources",
      },
    },
    footer: {
      tagline:
        "Clinical nutrition references for patient education and care. An organised collection of handouts for healthcare professionals.",
      categoriesHeading: "Categories",
      categoriesAria: "Category links",
      contactHeading: "Contact Us",
      dept: "Dietetics & Food Services Department",
      hospital: "Hospital Raja Perempuan Zainab II",
      copyright: "© 2026 Ikm@amy. All rights reserved.",
    },
  },
};
