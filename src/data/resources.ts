import type { Lang, Resource } from "../types";
import { resourcesEn } from "./resources.en";

export const resources: Resource[] = [
  {
    id: "r01",
    slug: "diet-pesakit-hemodialisis",
    title: "Risalah Diet untuk Pesakit Hemodialisis",
    categoryId: "nefrologi",
    description:
      "Panduan pemakanan bagi membantu pesakit hemodialisis mengurus pengambilan protein, cecair, sodium, potassium dan phosphorus.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["hemodialisis", "dialisis", "renal", "potassium", "sodium", "phosphorus", "protein", "cecair", "ckd"],
    content: {
      intro:
        "Pesakit hemodialisis memerlukan pengawalan ketat terhadap pengambilan protein, cecair, sodium, potassium dan phosphorus. Risalah ini merumuskan saranan diet harian yang praktikal untuk pesakit dewasa yang menjalani hemodialisis secara tetap.",
      indications: [
        "Pesakit penyakit buah pinggang kronik (CKD) peringkat 5 yang menjalani hemodialisis",
        "Pesakit dialisis peritoneal yang memerlukan panduan pengurusan cecair",
        "Penjaga dan ahli keluarga yang menyediakan makanan untuk pesakit dialisis",
      ],
      blocks: [
        {
          title: "Protein",
          tone: "info",
          items: [
            "Sasaran: 1.0–1.2 g protein/kg berat badan/hari.",
            "Utamakan protein bernilai biologi tinggi: ikan, ayam, telur, susu dan produk tenusu.",
            "Hadkan protein daripada sumber haiwan yang diproses dan daging berlemak.",
          ],
        },
        {
          title: "Cecair",
          tone: "info",
          items: [
            "Kira pengambilan cecair harian: jumlah air kencing semalam + 500 ml.",
            "Bahagikan kepada bahagian kecil sepanjang hari; elakkan minum sekaligus.",
            "Kurangkan makanan tinggi kandungan air seperti sup, buah berair dan ais krim.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Ikan, ayam tanpa kulit, putih telur, tofu dan tauhu",
            "Sayur-sayuran rendah potassium: kobis, lobak, timun, salad",
            "Roti putih, nasi putih, mee halus dan bihun",
            "Herba dan rempah untuk perisa tanpa garam",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Makanan tinggi potassium: pisang, oren, tomato, kentang, avokado",
            "Makanan tinggi phosphorus: susu pekat, produk tenusu banyak, kacang-kacangan, organ",
            "Makanan tinggi sodium: makanan proses, sos, jeruk, snek masin",
            "Minuman berkafein dan berkarbonat dalam kuantiti besar",
          ],
        },
        {
          title: "Ubat & Makanan",
          tone: "info",
          items: [
            "Ambil binder phosphorus (mengikut preskripsi) semasa makan.",
            "Elakkan mengambil suplemen atau makanan tambahan tanpa nasihat doktor/dietitian.",
          ],
        },
      ],
      tips: [
        "Timbang badan selepas setiap sesi dialisis untuk pantau status cecair.",
        "Gunakan garam herba atau perasa bebas garam semasa memasak.",
        "Bawa bekal makanan apabila keluar — makanan luar sering tinggi sodium dan potassium.",
        "Semak dengan dietitian setiap 3 bulan atau apabila berat badan berubah ketara.",
      ],
      sampleMeals: [
        {
          label: "Sarapan",
          items: ["2 keping roti putih + telur rebus", "1 cawan teh tanpa gula"],
        },
        {
          label: "Makan tengah hari",
          items: ["Nasi putih + ikan kukus + sayur kobis/lobak", "Air suam terhad"],
        },
        {
          label: "Snek",
          items: ["Biskut tanpa garam", "Kepingan epal kecil (jumlah terhad)"],
        },
      ],
      references: [
        "KDOQI Clinical Practice Guideline for Nutrition in CKD, 2020.",
        "Dietary Guidelines for Malaysian Renal Patients (Dietitian Department).",
        "Protokol pemakanan hemodialisis institusi.",
      ],
      lastUpdated: "2026-01-15",
    },
  },
  {
    id: "r02",
    slug: "pengurusan-cecair-pesakit-ckd",
    title: "Panduan Pengurusan Cecair untuk Pesakit CKD",
    categoryId: "nefrologi",
    description:
      "Sistem pengiraan cecair dan strategi pengurangan edema untuk pesakit penyakit buah pinggang kronik peringkat awal hingga pertengahan.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["ckd", "cecair", "edema", "bengkak", "air", "renal", "nefrologi"],
    content: {
      intro:
        "Pengurusan cecair yang baik membantu mengawal tekanan darah dan mengurangkan beban kepada jantung serta buah pinggang pada pesakit CKD.",
      indications: [
        "Pesakit CKD peringkat 1–4 dengan edema atau hipertensi",
        "Pesakit sebelum memulakan dialisis yang perlu mengawal cecair",
      ],
      blocks: [
        {
          title: "Prinsip Pengiraan Cecair",
          tone: "info",
          items: [
            "Cecair harian = air kencing 24 jam + 500–750 ml (bergantung pada cuaca dan aktiviti).",
            "Termasuk semua bentuk cecair: air, teh, kopi, sup, jeli, ais krim.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Sayur-sayuran dan buah-buahan segar dalam jumlah sederhana",
            "Protein tanpa lemak berlebihan",
            "Minuman tanpa gula seperti air kosong dan air mineral",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Minuman manis, sirap dan jus pekat",
            "Makanan sup/gulai berkuah banyak",
            "Makanan masin yang merangsang dahaga",
          ],
        },
      ],
      tips: [
        "Gunakan cawan/mug kecil untuk minum supaya mudah dikira.",
        "Bersihkan mulut dengan berkumur air jika dahaga tetapi tidak mahu minum.",
        "Angkat kaki dan rehatkan bila bengkak pada kaki dan buku lali.",
      ],
      references: [
        "Panduan pengurusan cecair CKD institusi.",
        "KDOQI Nutrition in CKD guideline.",
      ],
      lastUpdated: "2025-11-02",
    },
  },
  {
    id: "r03",
    slug: "risalah-diet-hipertensi",
    title: "Risalah Diet DASH untuk Pesakit Hipertensi",
    categoryId: "kardiologi",
    description:
      "Panduan corak pemakanan DASH yang berkesan menurunkan tekanan darah melalui pengurangan sodium dan peningkatan kalium, magnesium serta kalsium.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["hipertensi", "tekanan darah", "dash", "sodium", "kardiologi", "garam", "jantung"],
    content: {
      intro:
        "Hipertensi boleh diuruskan dengan perubahan gaya hidup, terutamanya melalui corak pemakanan DASH (Dietary Approaches to Stop Hypertension).",
      indications: [
        "Pesakit hipertensi tahap 1 atau tambahan kepada rawatan perubatan",
        "Individu berisiko penyakit kardiovaskular",
      ],
      blocks: [
        {
          title: "Prinsip Utama DASH",
          tone: "info",
          items: [
            "Sasaran sodium: < 2,300 mg/hari (idealnya < 1,500 mg untuk hipertensi teruk).",
            "Tingkatkan buah-buahan dan sayur-sayuran kepada 5 hidangan sehari.",
            "Utamakan bijirin penuh, kekacang, ikan dan protein tanpa lemak.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Sayur hijau, tomato, pisang, oren (sumber kalium)",
            "Kacang-kacangan, oat, beras perang",
            "Ikan kembung, salmon, tuna",
            "Susu rendah lemak tanpa gula",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Garutan meja, sos soya, sos tiram, kicap masin",
            "Makanan proses: sosej, nugget, makanan tin",
            "Makanan berminyak dan makanan bergoreng",
            "Alkohol melebihi had disyorkan",
          ],
        },
      ],
      tips: [
        "Masak di rumah dengan herba, halia dan bawang putih sebagai perasa.",
        "Baca label pemakanan — pilih produk dengan kandungan sodium < 140 mg/100g.",
        "Kurangkan pengambilan garam secara beransur-ansur selama 2–4 minggu.",
      ],
      references: [
        "Appel LJ et al. DASH eating plan. Hypertension, 2006.",
        "Panduan pemakanan kardiovaskular institusi.",
      ],
      lastUpdated: "2026-02-10",
    },
  },
  {
    id: "r04",
    slug: "pemakanan-gagal-jantung",
    title: "Pemakanan untuk Pesakit Gagal Jantung",
    categoryId: "kardiologi",
    description:
      "Saranan pemakanan dan pengurusan cecair untuk pesakit gagal jantung kongestif bagi mengurangkan beban jantung.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["gagal jantung", "cecair", "kardiologi", "sodium", "edema", "jantung"],
    content: {
      intro:
        "Pesakit gagal jantung sering mengalami pengekalan cecair. Pemakanan yang betul membantu mengawal gejala seperti sesak nafas dan bengkak.",
      indications: [
        "Pesakit gagal jantung kongestif (NYHA II–IV)",
        "Pesakit pasca-infark jantung yang memerlukan pengawalan lemak dan sodium",
      ],
      blocks: [
        {
          title: "Cecair & Sodium",
          tone: "info",
          items: [
            "Hadkan sodium kepada < 2,000 mg/hari (setara < 5g garam).",
            "Batas cecair mengikut arahan doktor — lazimnya 1.5–2 liter/hari.",
            "Weigh diri setiap pagi; laporkan kenaikan > 2 kg dalam 3 hari.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Sayur-sayuran segar, buah-buahan",
            "Bijirin penuh, kekacang",
            "Ikan dan protein tanpa lemak",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Makanan masin dan diproses",
            "Makanan tinggi lemak tepu dan lemak trans",
            "Minuman beralkohol",
          ],
        },
      ],
      tips: [
        "Catat berat badan harian dan bawa ke setiap temu janji klinik.",
        "Angkat kaki apabila duduk atau berehat untuk mengurangkan edema.",
      ],
      references: [
        "ESC Heart Failure Guidelines, 2023.",
        "Panduan pemakanan gagal jantung institusi.",
      ],
      lastUpdated: "2025-09-20",
    },
  },
  {
    id: "r05",
    slug: "panduan-penyakit-diabetes-melitus",
    title: "Panduan Pemakanan untuk Penyakit Diabetes Melitus",
    categoryId: "endokrin",
    description:
      "Prinsip pemakanan diabetes termasuk kawalan karbohidrat, pemilihan indeks glisemik dan pengurusan snek antara waktu makan.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["diabetes", "gula", "karbohidrat", "endokrin", "glukosa", "insulin", "diabetik"],
    content: {
      intro:
        "Pemakanan yang terancang karbohidrat, serat dan lemak sihat membantu mengawal paras glukosa darah pada pesakit diabetes melitus.",
      indications: [
        "Pesakit diabetes jenis 1 dan jenis 2",
        "Individu pre-diabetes dan pesakit obesiti dengan risiko diabetes",
      ],
      blocks: [
        {
          title: "Prinsip Karbohidrat",
          tone: "info",
          items: [
            "Bahagikan karbohidrat secara sekata antara 3 waktu makan utama dan 1–2 snek.",
            "Utamakan karbohidrat kompleks indeks glisemik rendah: beras perang, oat, ubi keledek, barli.",
            "Elakkan minuman manis, jus buah pekat dan gula tambahan.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Sayur-sayuran bukan berkanji: sawi, kobis, bayam, timun",
            "Protein: ikan, ayam, telur, kekacang",
            "Lemak sihat: kacang, alpukat, minyak zaitun",
            "Buah-buahan utuh dengan kulit (jumlah terhad)",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Nasi putih, roti putih, mee dan mi dalam jumlah besar sekaligus",
            "Makanan bergoreng, kuih manis dan pencuci mulut",
            "Makanan proses dengan gula tambahan",
          ],
        },
      ],
      tips: [
        "Ukur saiz hidangan menggunakan genggam tangan: tapak tangan ≈ 1 cawan nasi.",
        "Makan mengikut waktu yang tetap — jangan langkau waktu makan.",
        "Semak paras gula darah sebelum dan 2 jam selepas makan mengikut jadual klinik.",
      ],
      sampleMeals: [
        {
          label: "Sarapan",
          items: ["Oat + susu rendah lemak + kacang", "1 biji telur rebus"],
        },
        {
          label: "Makan tengah hari",
          items: ["Separuh cawan nasi merah + ikan bakar + sayur campur"],
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
    title: "Pemakanan untuk Pesakit Obesiti",
    categoryId: "endokrin",
    description:
      "Strategi pengurusan berat badan berasaskan defisit tenaga, makanan tepu tinggi dan perubahan tingkah laku pemakanan.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2025,
    keywords: ["obesiti", "berat badan", "kurus", "endokrin", "metabolik", "diet"],
    content: {
      intro:
        "Pengurusan obesiti memerlukan pendekatan holistik: pemakanan, aktiviti fizikal dan sokongan tingkah laku. Sasaran penurunan 0.5–1 kg/minggu adalah realistik dan mampan.",
      indications: [
        "Pesakit dengan BMI ≥ 30 kg/m² atau BMI ≥ 23 kg/m² dengan komorbiditi",
        "Pesakit pasca-ceroboh gastrik yang memerlukan panduan pemakanan",
      ],
      blocks: [
        {
          title: "Prinsip Defisit Tenaga",
          tone: "info",
          items: [
            "Kurangkan pengambilan tenaga harian sebanyak 500–750 kcal daripada keperluan.",
            "Perbanyakkan protein (1.2–1.5 g/kg berat sasaran) untuk kekalkan jisim otot.",
            "Makan perlahan-lahan dan berhenti apabila rasa kenyang 80%.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Sayur-sayuran dan salad dalam kuantiti besar",
            "Ikan, ayam, putih telur, tofu",
            "Bijirin penuh dalam saiz hidangan kecil",
            "Air kosong sebagai minuman utama",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Minuman bergula, minuman berkafein manis dan alkohol",
            "Makanan bergoreng dan makanan segera",
            "Makanan proses tinggi lemak dan garam",
          ],
        },
      ],
      tips: [
        "Makan daripada pinggan kecil dan elakkan makan di hadapan skrin.",
        "Sediakan makanan di rumah — elakkan beli di luar lebih 3 kali seminggu.",
        "Catat makanan harian untuk mengenal pasti corak makan.",
      ],
      references: [
        "WHO Obesity Guidelines.",
        "Panduan pengurusan obesiti institusi.",
      ],
      lastUpdated: "2025-12-05",
    },
  },
  {
    id: "r07",
    slug: "pemakanan-bayi-bawah-6-bulan",
    title: "Panduan Pemakanan Bayi Bawah 6 Bulan",
    categoryId: "pediatrik",
    description:
      "Susu ibu eksklusif, teknik penyusuan dan isyarat kelaparan bayi — asas pemakanan pediatrik yang sihat.",
    type: "Patient education",
    targetGroup: "Caregiver",
    year: 2026,
    keywords: ["bayi", "penyusuan", "susu ibu", "pediatrik", "nefes", "pemakanan bayi"],
    content: {
      intro:
        "Bayi bawah 6 bulan memerlukan susu ibu eksklusif. Risalah ini ditujukan kepada ibu, bapa dan penjaga untuk memahami amalan pemakanan bayi yang selamat.",
      indications: [
        "Ibu menyusukan bayi di bawah 6 bulan",
        "Penjaga yang menjaga bayi baru lahir",
      ],
      blocks: [
        {
          title: "Susu Ibu Eksklusif",
          tone: "info",
          items: [
            "Beri susu ibu eksklusif selama 6 bulan pertama tanpa air, formula atau makanan lain.",
            "Susukan atas permintaan — bayi baharu lahir biasanya menyusu 8–12 kali sehari.",
            "Kedudukan menyusu yang betul: kepala dan badan selaras, mulut bayi melekap luas pada puting.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Susu ibu langsung",
            "Susukan awal selepas kelahiran (dalam 1 jam pertama jika boleh)",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Air kosong, teh atau jus sebelum 6 bulan",
            "Makanan pejal atau bijirin sebelum isyarat kesediaan muncul",
            "Botol susu susu formula kecuali atas nasihat doktor",
          ],
        },
      ],
      tips: [
        "Kenal pasti isyarat kelaparan: mengedip, menghisap bibir, menggeliat.",
        "Bawa bayi ke mana-mana — kulit-ke-kulit membantu penyusuan.",
        "Dapatkan nasihat penyusuan jika puting sakit atau bayi tidak naik berat.",
      ],
      references: [
        "WHO Infant and Young Child Feeding Guidelines.",
        "Kementerian Kesihatan Malaysia — Garis Panduan Menyusu.",
      ],
      lastUpdated: "2026-01-20",
    },
  },
  {
    id: "r08",
    slug: "pemakanan-kanak-kanak-toddler",
    title: "Panduan Pemakanan Kanak-Kanak (Toddler 1–3 Tahun)",
    categoryId: "pediatrik",
    description:
      "Peralihan ke makanan pejal, penanganan selera makan sukar dan pencegahan kekurangan zat pada kanak-kanak kecil.",
    type: "Risalah",
    targetGroup: "Paediatric",
    year: 2025,
    keywords: ["kanak-kanak", "toddler", "makanan pejal", "pediatrik", "tumbesaran", "pemakanan"],
    content: {
      intro:
        "Pada usia 1–3 tahun, kanak-kanak beralih kepada makanan keluarga dengan saiz hidangan kecil dan tekstur yang sesuai.",
      indications: [
        "Kanak-kanak berusia 1–3 tahun",
        "Ibu bapa yang menghadapi isu pemilih makanan atau kurang selera makan",
      ],
      blocks: [
        {
          title: "Prinsip Hidangan",
          tone: "info",
          items: [
            "Sediakan 3 waktu makan utama + 2 snek sihat sehari.",
            "Saiz hidangan ≈ saiz genggaman tangan kanak-kanak.",
            "Hidangkan makanan berwarna-warni dan pelbagai tekstur.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Nasi/roti, ikan, ayam, telur",
            "Sayur-sayuran berwarna: bayam, lobak, tomato",
            "Buah-buahan potong kecil: betik, pisang, tembikai",
            "Susu penuh atau susu formula sehingga 2 cawan/hari",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Makanan tinggi gula: kuih, coklat, minuman manis",
            "Makanan kecil/tidak selamat: kacang tanah penuh, anggur utuh",
            "Minuman berkafein dan soda",
          ],
        },
      ],
      tips: [
        "Jadikan waktu makan keluarga tanpa skrin.",
        "Berikan pilihan terhad (contoh: 'nak epal atau pisang?').",
        "Jangan paksa makan — tawarkan semula selepas beberapa hari.",
      ],
      references: [
        "WHO Complementary Feeding Guidelines.",
        "Panduan pemakanan kanak-kanak institusi.",
      ],
      lastUpdated: "2025-10-14",
    },
  },
  {
    id: "r09",
    slug: "pemakanan-pra-dan-pasca-operasi",
    title: "Pemakanan Pra dan Pasca Operasi",
    categoryId: "surgikal",
    description:
      "Persediaan nutrisi sebelum pembedahan dan pemulihan selepas operasi — dari puasa karbohidrat hingga diet beransur.",
    type: "Panduan",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["pembedahan", "operasi", "pre-operasi", "post-operasi", "surgikal", "puasa"],
    content: {
      intro:
        "Pemakanan yang betul sebelum dan selepas pembedahan mempercepatkan penyembuhan, mengurangkan komplikasi dan memendekkan tempoh hospitalization.",
      indications: [
        "Pesakit yang menjalani pembedahan terancang atau kecemasan",
        "Pesakit dengan status nutrisi kurang atau berisiko kekurangan zat",
      ],
      blocks: [
        {
          title: "Pra-Operasi",
          tone: "info",
          items: [
            "2–3 minggu sebelum: tingkatkan protein (1.2–1.5 g/kg) dan kalori untuk simpan nutrisi.",
            "Puasa karbohidrat 12 jam sebelum pembedahan (mengikut protokol hospital) — air kosong dibenarkan sehingga 2 jam sebelum.",
            "Elakkan alkohol sekurang-kurangnya 48 jam sebelum operasi.",
          ],
        },
        {
          title: "Pasca-Operasi",
          tone: "info",
          items: [
            "Mulakan dengan cecair jernih, kemudian makanan lembut beransur-ansur.",
            "Sasaran protein 1.2–1.5 g/kg untuk penyembuhan luka.",
            "Makan kecil kerap (6 kali sehari) untuk elakkan rasa loya.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Putih telur, ikan, ayam, produk tenusu",
            "Sup, bubur, makanan lembut pada awal pasca-operasi",
            "Sayur-sayuran dan buah-buahan untuk vitamin dan serat",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Makanan berlemak tinggi yang sukar dihadam",
            "Minuman bergas dan makanan pedas pada awal pemulihan",
            "Alkohol semasa tempoh penyembuhan",
          ],
        },
      ],
      tips: [
        "Ikut arahan puasa daripada pasukan anestesia dengan ketat.",
        "Minum air kosong secukupnya untuk elakkan dehidrasi.",
        "Catat jumlah makanan dan gejala (loya, sembelit) untuk pasukan dietitian.",
      ],
      references: [
        "ESPEN Guidelines on Nutrition in Surgery.",
        "Protokol pemakanan perioperatif institusi.",
      ],
      lastUpdated: "2026-02-18",
    },
  },
  {
    id: "r10",
    slug: "pemakanan-enteral-pesakit-surgikal",
    title: "Pemakanan Enteral untuk Pesakit Surgikal",
    categoryId: "surgikal",
    description:
      "Panduan formula enteral, kadar suapan dan pemantauan toleransi tiub makan untuk pesakit yang tidak dapat makan melalui mulut.",
    type: "Risalah",
    targetGroup: "Healthcare professional",
    year: 2025,
    keywords: ["enteral", "tiub makan", "ngt", "surgikal", "formula", "sokongan pemakanan"],
    content: {
      intro:
        "Pemakanan enteral adalah laluan utama sokongan nutrisi apabila pesakit tidak dapat makan melalui mulut tetapi saluran pencernaan berfungsi.",
      indications: [
        "Pesakit pasca-operasi besar (abdomen, esofagus)",
        "Pesakit dengan disfagia atau masalah menelan",
        "Pesakit kritikal yang stabil dan berfungsi gastrousus",
      ],
      blocks: [
        {
          title: "Jenis Formula",
          tone: "info",
          items: [
            "Formula polimerik standard untuk kebanyakan pesakit.",
            "Formula semi-elemental / oligomerik untuk malabsorpsi atau masalah pencernaan.",
            "Formula khusus: diabetes, renal, respiratori mengikut keperluan pesakit.",
          ],
        },
        {
          title: "Protokol Pemberian",
          tone: "info",
          items: [
            "Mula dengan kadar rendah (20–30 ml/j), naikkan 10–20 ml/j setiap 12–24 jam.",
            "Siram tiub dengan 30–50 ml air sebelum dan selepas suapan.",
            "Rehatkan tiub 4 jam pada setiap penyesuaian untuk elakkan aspirasi.",
          ],
        },
        {
          title: "Pemantauan",
          tone: "alert",
          items: [
            "Pantau tanda toleransi: residu lambung, kembung, cirit-birit.",
            "Semak kedudukan tiub sebelum setiap suapan.",
            "Laporkan residu lambung > 250–400 ml mengikut protokol.",
          ],
        },
      ],
      tips: [
        "Angkat kepala katil 30–45° semasa dan 1 jam selepas suapan.",
        "Gunakan pam suapan untuk ketepatan kadar — jangan gantung beg.",
        "Kemas kini berat badan dan pengambilan protein setiap minggu.",
      ],
      references: [
        "ASPEN Enteral Nutrition Guidelines.",
        "Protokol pemakanan enteral institusi.",
      ],
      lastUpdated: "2025-08-30",
    },
  },
  {
    id: "r11",
    slug: "pemakanan-parenteral-critical-care",
    title: "Pemakanan Parenteral dalam Critical Care",
    categoryId: "critical-care",
    description:
      "Keperluan tenaga dan protein pesakit kritikal, masa permulaan parenteral nutrition dan pencegahan komplikasi metabolik.",
    type: "Risalah",
    targetGroup: "Healthcare professional",
    year: 2026,
    keywords: ["parenteral", "tpn", "icu", "critical care", "tenaga", "protein"],
    content: {
      intro:
        "Pesakit kritikal mempunyai keperluan metabolik tinggi. Pemilihan laluan pemakanan dan formula yang betul adalah penting untuk mengelakkan kekurangan zat dan komplikasi.",
      indications: [
        "Pesakit ICU dengan saluran pencernaan tidak berfungsi",
        "Pesakit dengan risiko kekurangan zat teruk dalam 5–7 hari",
        "Pesakit trauma atau post-operasi besar dengan keperluan nutrisi tinggi",
      ],
      blocks: [
        {
          title: "Keperluan Tenaga & Protein",
          tone: "info",
          items: [
            "Tenaga: 20–25 kcal/kg berat badan/hari (guna pengukuran tidak langsung jika ada).",
            "Protein: 1.2–2.0 g/kg berat badan/hari bergantung pada tahap kritikal.",
            "Lemak: 30–40% jumlah tenaga; karbohidrat selebihnya.",
          ],
        },
        {
          title: "Masa Permulaan",
          tone: "info",
          items: [
            "Pemakanan enteral dimulakan dalam 24–48 jam jika pesakit stabil.",
            "Parenteral nutrition hanya jika enteral tidak dapat diberikan ≥ 7 hari.",
            "Overfeeding (> 110% keperluan tenaga) dikaitkan dengan komplikasi — elakkan.",
          ],
        },
        {
          title: "Pemantauan",
          tone: "alert",
          items: [
            "Pantau glukosa darah setiap 4–6 jam semasa permulaan TPN.",
            "Semak fungsi hati (AST, ALT, bilirubin) dan renal (urea, kreatinin) mingguan.",
            "Perhatikan tanda refeeding syndrome pada pesakit kurang zat.",
          ],
        },
      ],
      tips: [
        "Gunakan kaedah 'permissive underfeeding' pada pesakit obesiti kritikal awal.",
        "Kawal kadar suapan enteral secara beransur untuk elakkan intoleransi.",
        "Kolaborasi rapat antara doktor, dietitian dan jururawat.",
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
    title: "Pemakanan Enteral untuk Pesakit ICU",
    categoryId: "critical-care",
    description:
      "Strategi pemberian enteral nutrition pada pesakit kritikal — permulaan awal, kadar sasaran dan pengurusan intoleransi suapan.",
    type: "Panduan",
    targetGroup: "Healthcare professional",
    year: 2025,
    keywords: ["icu", "enteral", "suapan", "kritis", "critical care", "pemakanan"],
    content: {
      intro:
        "Pemakanan enteral awal (dalam 24–48 jam) pada pesakit ICU dikaitkan dengan hasil yang lebih baik berbanding pemakanan lewat.",
      indications: [
        "Pesakit ICU yang stabil hemodinamik",
        "Pesakit dengan saluran pencernaan berfungsi walaupun penggunaan vasopresor rendah",
      ],
      blocks: [
        {
          title: "Protokol Permulaan",
          tone: "info",
          items: [
            "Mulakan pada 10–20 ml/j, naikkan kepada kadar sasaran dalam 24–48 jam.",
            "Kadar sasaran: 60–80% keperluan tenaga menjelang hari ke-3 ICU.",
            "Gunakan formula polimerik standard atau formula kritikal khusus.",
          ],
        },
        {
          title: "Pengurusan Intoleransi",
          tone: "alert",
          items: [
            "Cirit-birit: periksa antibiotik, formula dan kadar suapan.",
            "Kembung: kurangkan kadar sementara, elakkan pengambilan gas.",
            "Residu lambung tinggi: hentikan suapan, reposition, semak kedudukan tiub.",
          ],
        },
        {
          title: "Pemantauan",
          tone: "info",
          items: [
            "Pantau residu lambung setiap 4–6 jam pada awal.",
            "Pantau tanda aspirasi: suhu, sputum, kedudukan.",
            "Rekod jumlah suapan dan toleransi dalam carta pesakit.",
          ],
        },
      ],
      tips: [
        "Kepala katil 30–45° sentiasa semasa suapan.",
        "Gunakan pam dengan kaedah berterusan atau bolus mengikut keadaan pesakit.",
        "Elakkan pemberian ubat melalui tiub yang sama dengan formula tanpa arahan.",
      ],
      references: [
        "ASPEN/SCCM Critical Care Nutrition Guidelines.",
        "Protokol pemakanan ICU institusi.",
      ],
      lastUpdated: "2025-11-25",
    },
  },
  {
    id: "r13",
    slug: "pemakanan-pesakit-luka-bakar",
    title: "Pemakanan untuk Pesakit Luka Bakar",
    categoryId: "burn",
    description:
      "Keperluan tenaga dan protein yang sangat tinggi untuk pesakit luka bakar, pengurusan mikronutrien dan strategi pemakanan enteral.",
    type: "Risalah",
    targetGroup: "Adult",
    year: 2026,
    keywords: ["bakar", "luka bakar", "burn", "protein", "tenaga", "mikronutrien", "wound healing"],
    content: {
      intro:
        "Luka bakar menyebabkan hypermetabolism yang teruk. Pemakanan yang mencukupi adalah kritikal untuk survival, penyembuhan luka dan fungsi imun.",
      indications: [
        "Pesakit luka bakar > 20% luas permukaan badan",
        "Pesakit luka bakar dalam dengan luka dalam atau melibatkan muka/joint",
        "Pesakit pediatrik dengan luka bakar signifikan",
      ],
      blocks: [
        {
          title: "Keperluan Tenaga & Protein",
          tone: "info",
          items: [
            "Tenaga: 25–30 kcal/kg berat badan + 40 kcal per 1% TBSA luka bakar (formula Curreri).",
            "Protein: 1.5–2.5 g/kg berat badan/hari untuk penyembuhan luka.",
            "Karbohidrat: glukosa kompleks untuk elakkan hipoglikemia berulang.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Protein: telur, ikan, ayam, daging tanpa lemak, produk tenusu",
            "Karbohidrat: nasi, roti, ubi, pasta dalam kuantiti besar",
            "Mikronutrien: vitamin C, zinc, vitamin A daripada sayur dan buah",
          ],
        },
        {
          title: "Makanan Tambahan",
          tone: "info",
          items: [
            "Formula modular protein (whey protein) untuk tambah protein tanpa lemak berlebihan.",
            "Supplement zinc dan vitamin C mengikut preskripsi jika defisit.",
            "Minuman elektrolit semasa fasa awal penyembuhan.",
          ],
        },
        {
          title: "Hadkan / Elakkan",
          tone: "alert",
          items: [
            "Makanan berlemak tinggi yang lambat dihadam",
            "Makanan pedas yang merangsang edema mukosa",
            "Alkohol — mengganggu penyembuhan dan fungsi imun",
          ],
        },
      ],
      tips: [
        "Makan 6–8 kali sehari — perut kecil sukar muat makanan besar.",
        "Minum air kosong antara waktu makan.",
        "Pantau berat badan 2 kali seminggu — sasaran +1–2 kg/minggu semasa penyembuhan aktif.",
      ],
      references: [
        "ABA Guidelines for Burn Patient Nutrition.",
        "Curreri formula untuk keperluan tenaga luka bakar.",
      ],
      lastUpdated: "2026-01-28",
    },
  },
  {
    id: "r14",
    slug: "pemakanan-luka-bakar-kanak",
    title: "Pemakanan Kanak-Kanak dengan Luka Bakar",
    categoryId: "burn",
    description:
      "Keperluan nutrisi khusus pesakit pediatrik luka bakar — termasuk formula susu dan pemantauan pertumbuhan.",
    type: "Risalah",
    targetGroup: "Paediatric",
    year: 2025,
    keywords: ["bakar", "kanak-kanak", "pediatrik", "burn", "pertumbuhan", "susu"],
    content: {
      intro:
        "Kanak-kanak dengan luka bakar memerlukan lebih banyak nutrisi per kg berat badan berbanding dewasa, dan pemantauan pertumbuhan adalah kritikal.",
      indications: [
        "Kanak-kanak dengan luka bakar > 10% luas permukaan badan",
        "Bayinya dengan luka bakar — keperluan metabolik relatif lebih tinggi",
      ],
      blocks: [
        {
          title: "Keperluan Khusus",
          tone: "info",
          items: [
            "Tenaga: 1800 kcal/m² permukaan badan (formula Galveston) atau formula Curreri pediatrik.",
            "Protein: 2.5–4 g/kg berat badan/hari — lebih tinggi daripada dewasa.",
            "Kalsium dan fosforus untuk pertumbuhan tulang yang berterusan.",
          ],
        },
        {
          title: "Makanan Digalakkan",
          tone: "check",
          items: [
            "Susu penuh/fortified, produk tenusu",
            "Putih telur, ikan, ayam, daging tanpa lemak",
            "Bijirin, roti, kentang, ubi",
            "Sayur dan buah untuk vitamin",
          ],
        },
        {
          title: "Pemantauan",
          tone: "alert",
          items: [
            "Timbang berat dan ukur tinggi setiap minggu.",
            "Pantau cirit-birit, sembelit dan tanda dehidrasi.",
            "Semak paras zink dan vitamin jika penyembuhan lambat.",
          ],
        },
      ],
      tips: [
        "Libatkan kanak-kanak dalam pilihan makanan untuk tingkatkan kerjasama.",
        "Gunakan formula susu tinggi kalori jika berat tidak naik.",
        "Sediakan makanan yang sesuai tekstur dan saiz untuk umur.",
      ],
      references: [
        "ABA Pediatric Burn Nutrition Guidelines.",
        "Galveston formula untuk keperluan tenaga pediatrik.",
      ],
      lastUpdated: "2025-09-12",
    },
  },
  {
    id: "r15",
    slug: "pemakanan-pesakit-domiciliary",
    title: "Pemakanan Pesakit di Rumah (Domiciliary)",
    categoryId: "domiciliary",
    description:
      "Panduan penjagaan pemakanan pesakit di rumah termasuk penyiapan makanan, pemantauan dan sokongan kepada penjaga.",
    type: "Panduan",
    targetGroup: "Caregiver",
    year: 2026,
    keywords: ["rumah", "domiciliary", "penjaga", "pemakanan rumah", "caregiver", "komuniti"],
    content: {
      intro:
        "Ramai pesakit kronik pulang ke rumah dengan keperluan pemakanan khusus. Penjaga memainkan peranan penting dalam memastikan pemakanan yang betul disediakan dan dimakan.",
      indications: [
        "Pesakit kronik yang menerima penjagaan di rumah",
        "Penjaga yang menguruskan pesakit elderly atau disabled",
        "Pesakit yang memerlukan pemantauan pemakanan berterusan",
      ],
      blocks: [
        {
          title: "Prinsip Penjagaan",
          tone: "info",
          items: [
            "Sediakan makanan mengikut keperluan nutrisi pesakit yang ditetapkan oleh dietitian.",
            "Makan bersama-sama — suasana santai meningkatkan selera makan.",
            "Catat makanan yang dimakan dan gejala yang dialami.",
          ],
        },
        {
          title: "Penyiapan Makanan",
          tone: "check",
          items: [
            "Masak segar mengikut keperluan diet (rendah sodium, rendah gula, dll.).",
            "Bahagikan makanan kepada hidangan kecil yang boleh disimpan.",
            "Gunakan label pada bekas untuk tarikh dan kandungan.",
          ],
        },
        {
          title: "Pemantauan",
          tone: "alert",
          items: [
            "Pantau berat badan dan tanda-tanda dehidrasi.",
            "Laporkan perubahan selera makan atau gejala pencernaan kepada klinik.",
            "Pastikan ubat diambil dengan betul berkaitan waktu makan.",
          ],
        },
      ],
      tips: [
        "Jadualkan waktu makan yang tetap untuk membantu rutin.",
        "Sediakan snek sihat yang mudah disimpan dan dimakan.",
        "Hubungi dietitian atau jururawat jika ada pertanyaan tentang pemakanan.",
      ],
      references: [
        "Panduan penjagaan domiciliary institusi.",
        "Dietitian Home Care Guidelines.",
      ],
      lastUpdated: "2026-02-01",
    },
  },
  {
    id: "r16",
    slug: "pemakanan-tiub-enteral-rumah",
    title: "Pemakanan Tiub di Rumah (Home Enteral Nutrition)",
    categoryId: "domiciliary",
    description:
      "Panduan untuk pesakit dan penjaga yang menguruskan tiub makan enteral di rumah — kebersihan, pemberian formula dan penyelesaian masalah.",
    type: "Patient education",
    targetGroup: "Caregiver",
    year: 2025,
    keywords: ["enteral", "tiub makan", "rumah", "domiciliary", "home feeding", "caregiver"],
    content: {
      intro:
        "Sesetengah pesakit memerlukan pemakanan enteral di rumah melalui tiub nasogastrik (NGT) atau gastrostomi (PEG). Penjaga perlu dilatih untuk menguruskan proses ini dengan selamat.",
      indications: [
        "Pesakit dengan disfagia kronik yang stabil di rumah",
        "Pesakit pasca-stroke yang memerlukan sokongan nutrisi jangka panjang",
        "Pesakit kanser kepala dan leher yang tidak dapat makan melalui mulut",
      ],
      blocks: [
        {
          title: "Kebersihan & Keselamatan",
          tone: "info",
          items: [
            "Basuh tangan dengan sabun sebelum dan selepas mengendalikan tiub.",
            "Gunakan sarung tangan semasa menyuap dan membersihkan tiub.",
            "Simpan formula di tempat sejuk dan semak tarikh luput.",
          ],
        },
        {
          title: "Pemberian Formula",
          tone: "check",
          items: [
            "Siram tiub dengan 30 ml air sebelum dan selepas suapan.",
            "Beri formula pada suhu bilik — jangan panaskan dalam microwave.",
            "Rehatkan tiub 4 jam selepas setiap waktu suapan.",
          ],
        },
        {
          title: "Penyelesaian Masalah",
          tone: "alert",
          items: [
            "Tiub tersumbat: cuba siram dengan air suam, jangan paksa.",
            "Cirit-birit: kurangkan kadar, periksa formula dan kebersihan.",
            "Demam atau sakit perut: hubungi doktor dengan segera.",
          ],
        },
      ],
      tips: [
        "Jadualkan suapan mengikut masa yang ditetapkan oleh pasukan perubatan.",
        "Kekalkan kepala katil 30–45° selama 1 jam selepas suapan.",
        "Catat jumlah suapan dan gejala dalam buku log.",
      ],
      references: [
        "Home Enteral Nutrition Guidelines (HEN).",
        "Protokol pemakanan enteral domiciliary institusi.",
      ],
      lastUpdated: "2025-12-08",
    },
  },
];

const enResourceMap = new Map(resourcesEn.map((r) => [r.id, r]));

export function getResources(lang: Lang = "ms"): Resource[] {
  if (lang === "ms") return resources;
  return resources.map((r) => enResourceMap.get(r.id) ?? r);
}

export function getResourceBySlug(slug: string, lang: Lang = "ms"): Resource | undefined {
  const r = resources.find((r) => r.slug === slug);
  if (!r) return undefined;
  if (lang === "ms") return r;
  return enResourceMap.get(r.id) ?? r;
}

export function getResourcesByCategory(categoryId: string, lang: Lang = "ms"): Resource[] {
  return getResources(lang).filter((r) => r.categoryId === categoryId);
}

export function getLatestResources(count = 6, lang: Lang = "ms"): Resource[] {
  return [...getResources(lang)]
    .sort((a, b) => b.year - a.year)
    .slice(0, count);
}

export function getPopularTopics(lang: Lang = "ms"): { label: string; keyword: string }[] {
  if (lang === "en") {
    return [
      { label: "Diabetes", keyword: "diabetes" },
      { label: "Dialysis", keyword: "dialysis" },
      { label: "Sodium", keyword: "sodium" },
      { label: "Enteral Nutrition", keyword: "enteral" },
      { label: "Critical Care", keyword: "critical care" },
      { label: "Paediatric Nutrition", keyword: "paediatric" },
    ];
  }
  return [
    { label: "Diabetes", keyword: "diabetes" },
    { label: "Dialisis", keyword: "dialisis" },
    { label: "Sodium", keyword: "sodium" },
    { label: "Enteral Nutrition", keyword: "enteral" },
    { label: "Critical Care", keyword: "icu" },
    { label: "Pemakanan Pediatrik", keyword: "kanak-kanak" },
  ];
}
