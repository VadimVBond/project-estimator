// Copilot German translations
// Diese Datei enthält alle Übersetzungen für die deutsche Sprache
// Abschnitte sind durch Kommentare für eine bessere Navigation und Copilot-Hinweise unterteilt
import { partners } from "./pages/partners.ru";
import saas from "./lp/saas.ru";
import startup from "./lp/startup.ru";
import mobileApp from "./lp/mobile-app.ru";
import landings from "./lp/landings.ru";

export default {
  nav: {
    partners: "Partner",
  },

  partners,

  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};

export const de = {
  header: {
    homes: { title: "Heim", saas: "Saas", startup: "Start-up", app: "Laden Sie die Anwendung herunter", personal: "Privat" },
    pages: { title: "Seiten", features: "Funktionen (Ankerlink)", services: "Dienstleistungen", pricing: "Preise", aboutUs: "Über uns", contactUs: "Kontakte", terms: "Bedingungen", privacyPolicy: "Datenschutzrichtlinie" },
    landing: {
      title: "Landung", leadGeneration: "Lead-Generierung", sales: "Lange Verkäufe", clickThrough: "Anklickbare Seite", squeeze: "Quetschen", product: "Produkt- (oder Dienstleistungs-)Informationen", comingSoon: "Kommt bald", gallery: "Galerie",
      galleryHero: { tagline: "Portfolio", title: "Unsere Projekte", subtitle: "Informieren Sie sich über unsere aktuellen Projekte und Erfolgsgeschichten.", goBack: "Zurück" },
    },
    blog: { title: "Blog", blogList: "Liste der Artikel", article: "Artikel", mkdocs: "MkDocs-Artikel", ai: "KI in der Entwicklung", multi: "Multi-Architektur", twbs: "Tailwind vs. Bootstrap", autonav: "Markdown-Navigation", articleMdx: "Artikel (mit MDX)", category: "Kategorieseite", tag: "Tag-Seite" },
    brand: { firstName: "Vadim", lastName: "Bondarenko", stack: { ai: "AI", web: "Web", docs: "Docs" } }, widgets: "Widgets", contact: "Kontakte", download: "Lebenslauf ansehen",
  },
  footer: {
    product: { title: "Produkt", features: "Funktionen", security: "Sicherheit", team: "Team", enterprise: "Unternehmen", customerStories: "Kundengeschichten", pricing: "Preise", resources: "Ressourcen" },
    platform: { title: "Plattform", developerAPIs: "API für Entwickler", partners: "Partner", atom: "Atom", electron: "Elektron", astrowindDesktop: "AstroWind-Desktop" },
    support: { title: "Unterstützung", docs: "Dokumentation", communityForum: "Community-Forum", professionalServices: "Professionelle Dienstleistungen", skills: "Fähigkeiten", status: "Status" },
    company: { title: "Unternehmen", about: "Über das Unternehmen", blog: "Blog", careers: "Karriere", press: "Drücken", inclusion: "Inklusivität", socialImpact: "Sozialer Einfluss", shop: "Geschäft" },
    legal: { terms: "Bedingungen", privacy: "Vertraulichkeit" },
  },
  index: {
    metadata: {
      title: "Astrowind ist eine kostenlose Vorlage zum Erstellen von Websites mit Astro + Tailwind CSS",
    },
    hero: {
      cta: "Projekte ansehen",
      cta2: "Kontaktieren Sie mich",
      imageAlt: "AstroWind Hero-Bild",
      title: {
        part1: "KI in Ihren Projekten -",
        part2: "Ich erstelle schnelle und moderne Webprojekte"
      },
      subtitle: "Aus Ihren Ideen werden funktionierende Websites mit interaktiven Funktionen und mehrsprachiger Unterstützung",
      description: "Geeignet für Startups, kleine Unternehmen, Portfolios, Marketingseiten und Landingpages. Ich verwende Python, Astro, Next.js, Tailwind, Bootstrap und i18n, um moderne Weblösungen zu erstellen.",
    },
    philosophy: {
      title: "Philosophie",
      items: [
        {
          title: "Einfachheit",
          description: "Cleaner, wartbarer Code mit intuitivem UX",
          icon: "tabler:adjustments",
        },
        {
          title: "Best Practices",
          description: "Modulare Architektur, i18n-fähig, moderne Frameworks",
          icon: "tabler:circle-check",
        },
        {
          title: "Hohe Performance",
          description: "Schnelles Laden, optimierte Assets, SEO-freundlich",
          icon: "tabler:rocket",
        },
      ],
    },
    technologies: {
      title: "Meine Technologien",
    },
    features: {
      tagline: "Was bekommen Sie?",
      title: "Phasen der Website-Entwicklung",
      subtitle: "Ich verwandle Ideen in funktionierende Websites: Portfolios, Landingpages, SaaS-Projekte und Blogs mit modernen Technologien und hoher Leistung.",

      items: [
        {
          title: "Planung und Analyse",
          description: "Wir besprechen die Ziele Ihres Projekts, die Funktionalität und die Zielgruppe, damit jedes Detail zum Ergebnis passt.",
          icon: "tabler:list-check",
        },
        {
          title: "Design und Prototyp",
          description: "Ich erstelle visuelle Modelle und Prototypen von Schnittstellen mit Tailwind und Bootstrap und konzentriere mich dabei auf UX/UI und die Marke des Kunden.",
          icon: "tabler:devices",
        },
        {
          title: "Entwicklung und Integration",
          description: "Ich programmiere Frontend und Backend in Astro, Next.js und Python, verbinde Datenbanken, APIs und mehrsprachig (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Testen und Optimieren",
          description: "Ich überprüfe die Seite auf allen Geräten, optimiere die Ladegeschwindigkeit und korrigiere Fehler für einen stabilen Betrieb und eine hohe Conversion.",
          icon: "tabler:rocket",
        },
        {
          title: "Einführung und Support",
          description: "Ich hoste das Projekt, verbinde Analytics und SEO und sorge auch für Support und die Möglichkeit zur weiteren Skalierung.",
          icon: "tabler:settings",
        },
        {
          title: "Individueller Ansatz",
          description: "Jedes Projekt wird an die individuellen Bedürfnisse des Kunden angepasst, mit einer flexiblen Architektur und der Bereitschaft, neue Funktionen hinzuzufügen.",
          icon: "tabler:bulb",
        },
      ],
    },
    content: {
      tagline: "Im Projekt",
      title: "Struktur und Möglichkeiten Ihrer Webprojekte",
      imageAlt: "Projektillustration",
      additionalTitle: "Wir nutzen moderne Technologien",
      additionalDescription: "Wir erstellen Websites mit hoher Leistung, Komfort und Skalierbarkeit.",
      items: [
        {
          title: "Basierend auf Astro und Next.js",
          description:
            "Wir nutzen moderne statische Site-Generatoren und React-Frameworks für ein schnelles, effizientes und interaktives Frontend.",
        },
        {
          title: "Backend in Python/Django",
          description:
            "Wir bieten einen zuverlässigen und skalierbaren Server, eine API und Datenbanken für jedes Projekt: vom Portfolio bis zum SaaS.",
        },
        {
          title: "Styling mit Tailwind und Bootstrap",
          description:
            "Wir schaffen adaptives und modernes Design mit flexiblem Layout, bequemer Anpassung und einem einheitlichen visuellen System.",
        },
        {
          title: "Cross-Browser-Kompatibilität",
          description:
            "Websites werden in allen gängigen Browsern und Geräten korrekt angezeigt und bieten allen Benutzern eine stabile Benutzeroberfläche.",
        },
      ],
    },
    content2: {
      additionalDescription: "Flexibilität und Anpassung an Ihre Bedürfnisse",
      items: [
        {
          title: "Hohes Maß an Individualisierung",
          description:
            "Wir passen die Projektarchitektur an individuelle Anforderungen an, sodass die Website vollständig den Marken- und Geschäftszielen entspricht.",
        },
        {
          title: "Mehrsprachige Unterstützung (i18n)",
          description:
            "Wir implementieren Websites mit Unterstützung für mehrere Sprachen: Russisch, Englisch, Ukrainisch – leicht erweiterbare Sprachversionen.",
        },
        {
          title: "Vollständig responsives Design",
          description:
            "Optimiert für Mobilgeräte, Tablets und Desktops mit einem konsistenten und nahtlosen Benutzererlebnis.",
        },
        {
          title: "Medien- und Content-Integration",
          description:
            "Wir verbinden Bilder, Videos, Folien und interaktive Blöcke, um die Benutzereinbindung zu erhöhen und die Inhaltsverwaltung zu vereinfachen.",
        },
      ],
    },
    content3: {
      additionalDescription: "Entwicklung und Skalierung des Projekts",
      items: [
        {
          title: "Erhöhtes Benutzerengagement",
          description:
            "Interaktive Elemente, einfache Navigation und optisch ansprechende Layouts tragen dazu bei, dass Ihr Publikum länger fesselt.",
        },
        {
          title: "Regelmäßige Verbesserungen",
          description:
            "Aufrechterhaltung der Relevanz des Projekts durch neue Technologien, Updates und Optimierung der Funktionalität.",
        },
        {
          title: "Effizienter Einsatz von Ressourcen",
          description:
            "Wir sparen dem Kunden Zeit und Aufwand, indem wir vorgefertigte Technologien und integrierte Lösungen verwenden, anstatt alles von Grund auf neu zu entwickeln.",
        },
        {
          title: "Unterstützung und Unterstützung",
          description:
            "Wir unterstützen den Kunden bei der Website-Administration, Skalierung und zusätzlichen Funktionen, damit das Projekt mit dem Unternehmen wächst.",
        },
      ],
    },
    steps: {
      title: "Phasen der Bestellung Ihrer Website",
      imageAlt: "Workflow-Illustration",
      items: [
        {
          title: "Schritt 1: <span class=\"font-medium\">Projektbesprechung</span>",
          description:
            "Wir klären die Ziele, Funktionalitäten und Anforderungen an den Standort, damit der Bebauungsplan Ihren Zielen voll und ganz entspricht.",
          icon: "tabler:users",
        },
        {
          title: "Schritt 2: <span class=\"font-medium\">Prototyp und Design</span>",
          description:
            "Wir erstellen Interface-Layouts und visuelle Konzepte mit Tailwind und Bootstrap und stimmen Style und UX mit Ihnen ab.",
          icon: "tabler:device-desktop",
        },
        {
          title: "Schritt 3: <span class=\"font-medium\">Entwicklung und Integration</span>",
          description:
            "Wir programmieren Frontend und Backend (Astro, Next.js, Python/Django), verbinden Datenbanken, APIs und mehrsprachig (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Schritt 4: <span class=\"font-medium\">Testen und starten</span>",
          description:
            "Wir überprüfen die Seite auf allen Geräten, optimieren die Geschwindigkeit, verbinden SEO- und Analysetools, damit die Seite einsatzbereit ist.",
          icon: "tabler:rocket",
        },
        {
          title: "Schritt 5: <span class=\"font-medium\">Support und Entwicklung</span>",
          description:
            "Wir bieten Projektunterstützung, fügen neue Funktionen hinzu und skalieren die Website, wenn Ihr Unternehmen wächst.",
          icon: "tabler:settings",
        },
      ],
    },
    features2: {
      title: "Kerntechnologien und Tools",
      subtitle: "Häufig verwendete Komponenten und Frameworks zur Entwicklung moderner Websites",
      tagline: "Technologien",
      items: [
        {
          title: "Frontend-Frameworks",
          description: "Astro und Next.js für schnelle und interaktive Frontend-Entwicklung mit Unterstützung für statische und dynamische Seiten.",
          icon: "flat-color-icons:template",
        },
        {
          title: "Stilisierung",
          description: "Tailwind CSS und Bootstrap für reaktionsfähiges, modernes und browserübergreifendes Design mit flexibler Anpassung.",
          icon: "flat-color-icons:gallery",
        },
        {
          title: "Backend",
          description: "Python und Django/Flask zum Erstellen robuster Server, APIs, Datenbankintegration und Geschäftslogik.",
          icon: "flat-color-icons:approval",
        },
        {
          title: "Content-Management",
          description: "Markdown-, JSON- und CMS-Lösungen für die einfache Verwaltung von Text, Bildern und Multimedia auf der Website.",
          icon: "flat-color-icons:document",
        },
        {
          title: "SEO und Analyse",
          description: "SEO-Tools, Google Analytics und Leistungsmetriken zur Verbesserung der Sichtbarkeit und Verfolgung der Leistung.",
          icon: "flat-color-icons:advertising",
        },
        {
          title: "E-Commerce und Zahlungen",
          description: "Integration von Zahlungssystemen und Aufbau von Seiten mit Tarifen und Produkten für Websites mit kommerzieller Funktionalität.",
          icon: "flat-color-icons:currency-exchange",
        },
        {
          title: "Feedback und Kommunikation",
          description: "Integrierte Feedback-Formulare, Kommentare und Bewertungsblöcke für die Interaktion mit Kunden und Benutzern.",
          icon: "flat-color-icons:voice-presentation",
        },
        {
          title: "Kontakte und Formulare",
          description: "Kontaktformulare, Abonnements und interaktive Widgets für eine schnelle Kommunikation mit Website-Besuchern.",
          icon: "flat-color-icons:business-contact",
        },
        {
          title: "Datenspeicherung",
          description: "SQL/NoSQL-Datenbanken, Cloud-Lösungen und APIs zur zuverlässigen Speicherung und Verarbeitung von Informationen.",
          icon: "flat-color-icons:database",
        },
      ],
    },
    blogLatestPosts: {
      title: "Nützliche Materialien und Koffer",
      information: `Ich veröffentliche Projektanalysen, Technologien und Ansätze, die zur Erstellung schneller und effizienter Websites beitragen.
  
Dies sind nicht nur Artikel – es sind praktische Erfahrungen, die in realen Projekten angewendet wurden.`,
    },
    faqs: {
      title: "Häufig gestellte Fragen",
      subtitle: "Antworten auf häufig gestellte Fragen zur Website-Entwicklung, zu Technologien und zum Arbeitsprozess.",
      tagline: "FAQs",
      items: [
        {
          title: "Wie viel kostet die Website-Entwicklung?",
          description:
            "Die Kosten hängen von der Komplexität des Projekts ab: Anzahl der Seiten, Funktionalität, Integrationen und Design. Nach der Problembesprechung biete ich die optimale Lösung passend zu Ihrem Budget an.",
        },
        {
          title: "Was brauche ich, um loszulegen?",
          description:
            "Grundkenntnisse über HTML, CSS und Node.js, die auf Ihrem Computer installiert sind, und der Wunsch, etwas Cooles zu erstellen.",
        },
        {
          title: "Wie lange dauert die Erstellung einer Website?",
          description:
            "Im Durchschnitt mehrere Tage bis mehrere Wochen. Einfache Landingpages sind schnell fertig, komplexere Projekte (mit API, Datenbanken, i18n) benötigen mehr Zeit.",
        },
        {
          title: "Welche Technologien nutzen Sie?",
          description:
            "In meiner Arbeit verwende ich Astro, Next.js, Python (Django/Flask), Tailwind, Bootstrap, sowie Lösungen für Mehrsprachigkeit (i18n) und Leistungsoptimierung.",
        },
        {
          title: "Ist es möglich, eine mehrsprachige Website zu erstellen?",
          description:
            "Ja, ich implementiere volle Unterstützung für mehrere Sprachen mit bequemer Umschaltung und der Möglichkeit, auf neue Märkte zu skalieren.",
        },
        {
          title: "Wird die Seite für mobile Geräte angepasst?",
          description:
            "Ja, alle Projekte werden mit einem responsiven Design entwickelt und funktionieren ordnungsgemäß auf Telefonen, Tablets und Desktops.",
        },
        {
          title: "Helfen Sie nach dem Start der Website?",
          description:
            "Ja, es ist möglich, das Projekt zu unterstützen, die Funktionalität zu verbessern, zu aktualisieren und zu skalieren, wenn Ihr Unternehmen wächst.",
        },
      ],
    },
    stats: {
      stats: [
        { title: "Downloads", amount: "132 K" },
        { title: "Sterne", amount: "24,8 K" },
        { title: "Gabeln", amount: "10,3 K" },
        { title: "Benutzer", amount: "48,4 K" },
      ],
    },
    callToAction: {
      cta: {
        text: "Bestellen Sie eine Website",
      },
      subtitle: {
        part1: "Sind Sie bereit, Ihre Website zu starten? Ich helfe Ihnen, schnell ein modernes und vollständig auf Ihre Bedürfnisse zugeschnittenes Projekt zu erstellen.",
        part2: "Schreiben Sie mir gleich jetzt und lassen Sie uns Ihr Projekt besprechen.",
      },
    },
  },
  blog: {
    title: "Blog",
    subtitle:
      "Statisch generierter Beispielblog mit Neuigkeiten, Tutorials, Ressourcen und anderen interessanten Inhalten rund um AstroWind",
    backToBlog: "Zurück zum Blog",
    tags: "Schlagworte:",
    olderPosts: "Alte Artikel",
    newerPosts: "Neue Artikel",
    readingTime: "Min. Lektüre",
  },

  personal_p: {
    cta: {
      title: "Lassen Sie uns zusammenarbeiten",
      subtitle: "Bereit, Ihr Projekt zu realisieren: von der Idee bis zur Produktion",
      cta: {
        text: "Kontaktieren",
        href: "/contact",
      },
    },

    metadata: {
      title: "Persönliches Entwickler-Portfolio",
    },

    links: [
      { text: "Startseite", href: "#" },
      { text: "Über mich", href: "#about" },
      { text: "Lebenslauf", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "GitHub", href: "https://github.com/VadimVBond" },
    ],

    actions: [
      { text: "Kontaktieren", href: "#contact" },
    ],

    hero: {
      title: "Vadim",
      tagline: "Fullstack-Entwickler",
      cta: {
        text: "Kontaktieren",
        href: "/contact",
      },
      subtitle: "Ich entwickle schnelle mehrsprachige Websites, Dokumentationen und Webanwendungen. Spezialisiert auf Astro, Python (Flask, Django Ninja) und MkDocs.",
    },

    about: {
      title: "Über mich",
      paragraph1: "Ich bin ein Fullstack-Entwickler, der sich auf die Erstellung schneller statischer Websites, Dokumentationen und mehrsprachiger Webanwendungen spezialisiert hat.",
      paragraph2: "Ich arbeite mit Astro, MkDocs, Flask und Django Ninja. Der Hauptfokus liegt auf Leistung, Einfachheit der Architektur und komfortablem i18n-Support.",
      paragraph3: "Ich entwickle Projekte, die leicht skalierbar sind und sich an verschiedene Sprachen und Aufgaben anpassen lassen.",
      items: [
        { title: "GitHub", icon: "tabler:brand-github", href: "https://github.com/VadimVBond" },
        { title: "Dokumentation", icon: "tabler:book", href: "/docs" },
        { title: "Portfolio", icon: "tabler:briefcase", href: "#portfolio" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt: "Developer workspace",
      },
    },

    content: {
      portfolio: {
        title: "Meine Projekte",
        subtitle: "Echte Projekte mit Fokus auf Leistung, i18n und Wartungsfreundlichkeit.",
        items: [
          {
            title: "MkDocs mehrsprachige Website",
            description: "Dokumentation mit Unterstützung für mehrere Sprachen, dynamischer Navigation und benutzerdefiniertem Thema.",
            role: "Strukturaufbau, i18n, Themenanpassung, Komponentenintegration.",
          },
          {
            title: "Astro Portfolio mit i18n",
            description: "Schnelle statische Website mit mehrsprachiger Unterstützung und optimierter Struktur.",
            role: "Architekturentwicklung, i18n-Einrichtung, Leistungsoptimierung.",
          },
          {
            title: "Flask Website mit Lokalisierung",
            description: "Website auf Flask mit Unterstützung für mehrere Sprachen und Markdown-Inhalten.",
            role: "Backend, i18n, Inhaltsstruktur, Deployment.",
          },
          {
            title: "Interaktive Checkliste",
            description: "Anwendung mit Berechnungen, Filterung und Export (JSON, Excel, PDF).",
            role: "Frontend-Logik, Datenverarbeitung, Dateiexport.",
          },
        ],
        image: "",
      },
    },

    steps: {
      workExperience: [
        {
          title: "Freelance und Pet-Projekte (aktuell)",
          description: "Entwicklung von Websites, Dokumentationen und Webanwendungen mit modernen Technologien.",
          icon: "tabler:briefcase",
        },
      ],
      education: [
        {
          title: "Selbststudium und Praxis",
          icon: "tabler:school",
        },
      ],
    },

    skills: {
      title: "Fähigkeiten",
      subtitle: "Technologien und Werkzeuge, die ich bei der Arbeit einsetze.",
      items: [
        {
          title: "Python (Flask, Django Ninja)",
          description: "Entwicklung der Backend-Logik und APIs.",
        },
        {
          title: "Astro / Next.js",
          description: "Erstellung von schnellen Frontend-Anwendungen und statischen Websites.",
        },
        {
          title: "MkDocs (Material)",
          description: "Erstellung von Dokumentationen mit i18n-Unterstützung.",
        },
        {
          title: "i18n / Lokalisierung",
          description: "Implementierung mehrsprachiger Schnittstellen.",
        },
        {
          title: "Tailwind / Bootstrap",
          description: "Adaptives und modernes Layout.",
        },
        {
          title: "JSON / Markdown",
          description: "Inhaltszentrierte Architektur.",
        },
      ],
    },

    testimonials: {
      title: "Projekte",
      subtitle: "Praktische Entwicklungserfahrung",
      items: [],
    },

    portfolio: {
      callToAction: {
        title: "Bereit, das Projekt zu besprechen",
        subtitle: "Kontaktieren Sie mich für eine Zusammenarbeit",
        action: "Kontaktieren",
        button: "Kontaktieren",
        href: "/contact",
      },
    },

    blog: {
      title: "Blog",
      information: "Artikel über Entwicklung, i18n, Dokumentation und Projektarchitektur.",
    },
  },
};



