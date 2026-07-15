/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-15T10:40:12.556Z
 * Kundennummer: 238
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "RB- BECKER Gmbh",
  branche: "Garten / Landschaftsbau",
  ort: "Kassel",
  slogan: "Garten- und Landschaftsbau",
  adresse: "Hegelsbergstraße 21, 34127 Kassel",
  maps_url: "https://maps.google.com/?cid=5602050310434734953&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  telefon: "0561 49172551",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/238/logo.png",
  standort_bild: "https://r2.kuwezu.de/kunden/238/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihr Garten- und Landschaftsbau in Kassel",
    ueberschriftHighlight: "Garten- und Landschaftsbau",
    untertext: "Von der Planung bis zur Pflege – wir gestalten Ihren Außenbereich mit Fachwissen und Leidenschaft. Professionell und zuverlässig.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/238/ueber-uns.webp",
    ueberschrift: "RB-BECKER – Ihr Partner für Außenanlagen in Kassel",
    text1: "Die RB-BECKER GmbH ist Ihr erfahrener Partner für professionellen Garten- und Landschaftsbau in Kassel und Umgebung. Wir verwirklichen private und gewerbliche Projekte – von der ersten Beratung über die fachgerechte Ausführung bis zur langfristigen Pflege Ihrer Außenanlagen.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Unser Team arbeitet gewissenhaft, termintreu und mit dem Anspruch, Ihre Wünsche präzise umzusetzen. Auf uns können Sie sich verlassen.",
    tags: ["Erfahrenes Team", "Qualitätsarbeit", "Termintreu", "Faire Preise"],
    stats: [
      { value: "36+", label: "Jahre Erfahrung" },
      { value: "12", label: "Fachkräfte" },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Professionelle Autoglasreparatur und -austausch für alle Fahrzeugtypen. Wir kümmern uns um Steinschläge, Risse und komplette Scheibenwechsel – schnell und fachgerecht.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Rundum-Service für Ihre Fahrzeugbremsen. Von der Inspektion über den Austausch von Bremsbelägen und -scheiben bis zur Wartung – für Ihre Sicherheit im Straßenverkehr.",
      highlights: ["Bremseninspektion", "Beläge & Scheiben", "Alle Fahrzeugmarken"],
    },
    {
      slug: "consulting",
      title: "Consulting",
      bild: "https://r2.kuwezu.de/kunden/238/consulting-1784111997267.png",
      description: "Fachkundige Beratung rund um Garten- und Landschaftsbauprojekte. Wir entwickeln mit Ihnen Konzepte, planen die Umsetzung und begleiten Sie von der Idee bis zum fertigen Projekt.",
      highlights: ["Projektplanung", "Konzeptentwicklung", "Individuelle Lösungen"],
    }
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [

    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  oeffnungszeiten: {
    mo_fr: "09:00 – 18:00" as string,
    sa:    "09:00 – 14:00" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 09:00 – 18:00", "Sa: 09:00 – 14:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
