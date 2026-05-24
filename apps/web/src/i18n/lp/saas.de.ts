// ─── SaaS Landing Page — DE ────────────────────────────────────────

import type { LandingSaas } from './types';

const saas: LandingSaas = {
  metadata: {
    title: 'Saas Startseite',
  },

  header: {
    loginButton: 'Anmelden',
    signupButton: 'Registrieren',
  },

  hero: {
    tagline: 'SaaS Web Demo',
    title: 'Vereinfachen Sie Webdesign mit Astrowind: <br /> Ihr ultimativer <span class="text-accent dark:text-white highlight">SaaS</span>-Begleiter<br />',
    subtitle: '<span class="hidden sm:inline">Heben Sie Ihren Website-Erstellungsprozess auf die nächste Stufe mit <span class="font-semibold">AstroWind</span>s SaaS-Lösungen.</span> Verbinden Sie die Kraft von Astro 3.0 und Tailwind CSS nahtlos, um Websites zu erstellen, die zu Ihrer Marke passen.',
    cta: 'Loslegen',
    cta2: 'Mehr erfahren',
    imageAlt: 'AstroWind Hero Bild',
  },

  features: {
    title: 'Warum AstroWind wählen?',
    subtitle: "Jede der folgenden Funktionen unterstreicht das Wertangebot von AstroWind.",
    items: [
      {
        title: 'Integration von Astro 3.0 und Tailwind CSS',
        description: 'Bietet eine leistungsstarke Kombination, die sowohl den Entwicklungsprozess als auch die Benutzererfahrung verbessert.',
        icon: 'tabler:layers-union',
      },
      {
        title: 'Vielseitiges Design für Startups und kleine Unternehmen',
        description: "Passen Sie AstroWind einfach an das einzigartige Branding Ihrer Marke an.",
        icon: 'tabler:artboard',
      },
      {
        title: 'Mühelose Anpassung für Portfolios und Marketing',
        description: 'Präsentieren Sie ganz einfach Portfolios, Fallstudien und Projekthighlights mit intuitiven Anpassungen.',
        icon: 'tabler:writing',
      },
      {
        title: 'Optimierte Landingpages und ansprechende Blogs',
        description: "Landingpages sind strategisch so gestaltet, dass sie Besucher fesseln und zu Aktionen anregen.",
        icon: 'tabler:podium',
      },
      {
        title: 'Schnelle Ladezeiten und produktionsreifer Code',
        description: "Die Verwendung von Astro 3.0 garantiert schnelle Ladezeiten und ein reibungsloses Rendering.",
        icon: 'tabler:rocket',
      },
      {
        title: 'SEO-optimierte Struktur für mehr Sichtbarkeit',
        description: "Befolgt SEO-Best-Practices mit sauberem Code und schnellen Ladezeiten, was das Suchmaschinenranking verbessert.",
        icon: 'tabler:eyeglass',
      },
    ],
  },

  useCases: {
    title: 'Anwendungsfälle',
    subtitle: "Entdecken Sie, wie die vielseitige Vorlage von AstroWind ideale Lösungen für verschiedene Anwendungsfälle bietet.",
    items: [
      {
        contentTitle: 'Erfolgsgeschichten von Startups: <br /><span class="text-2xl">Launch mit AstroWind</span>',
        descriptionLabel: 'Beschreibung:',
        description: "Sind Sie ein Startup mit großen Träumen? AstroWind treibt Ihren Erfolg voran. Astro 3.0 und Tailwind CSS sorgen für beeindruckende, reaktionsschnelle Websites.",
        benefitsLabel: 'Vorteile:',
        benefits: "Ermöglicht Startups die schnelle Erstellung professioneller Websites. <br /> Hinterlassen Sie einen unvergesslichen ersten Eindruck. <br /> Stellt sicher, dass Ihre Website auf allen Geräten gut aussieht.",
        imageAlt: 'Startup Bild',
      },
      {
        contentTitle: 'SaaS Showcase: <br /><span class="text-2xl">Optimierung der Benutzererfahrung</span>',
        descriptionLabel: 'Beschreibung:',
        description: "Für SaaS-Unternehmen ist das Nutzererlebnis entscheidend. Die Integration von Astro 3.0 und Tailwind CSS garantiert ein benutzerfreundliches Erlebnis.",
        benefitsLabel: 'Vorteile:',
        benefits: "Gewährleistet ein kohärentes und nutzerzentriertes Design. <br /> Effektive Kommunikation durch visuelle Hilfen. <br /> Aufforderung zum Handeln durch strategisch platzierte CTAs.",
        imageAlt: 'SaaS Unternehmen Bild',
      },
      {
        contentTitle: 'Kreative Portfolios: <br /><span class="text-2xl">Hervorheben Ihrer Arbeit</span>',
        descriptionLabel: 'Beschreibung:',
        description: "Ihr Portfolio ist Ihr Meisterwerk, und AstroWind ist Ihre Leinwand. Egal ob Designer, Fotograf oder Künstler.",
        benefitsLabel: 'Vorteile:',
        benefits: "Dient als fesselnde Kuliss, um Aufmerksamkeit zu erregen. <br /> Passen Sie Ihr Portfolio an Ihren einzigartigen Stil an.",
        imageAlt: 'Portfolio Bild',
      },
      {
        contentTitle: 'Unternehmenswachstum: <br /><span class="text-2xl">Besucher in Kunden verwandeln</span>',
        descriptionLabel: 'Beschreibung:',
        description: "Für kleine Unternehmen kann eine gut gestaltete Website ein Game-Changer sein. AstroWind hilft dabei, treue Kunden zu gewinnen.",
        benefitsLabel: 'Vorteile:',
        benefits: "Präsentieren Sie Ihr kleines Unternehmen mit einer professionellen Website. <br /> Sorgen Sie für eine reibungslose Navigation und reduzieren Sie die Absprungraten.",
        imageAlt: 'Small Business Bild',
      },
    ],
  },

  pricing: {
    title: 'Flexible Tarifpläne für AstroWind',
    plans: [
      {
        title: 'Kostenlos',
        subtitle: 'Zugriff auf Kernfunktionen und Vorlagen',
        price: '0',
        period: '/ Monat',
        ctaText: 'Kostenlos loslegen',
      },
      {
        title: 'Pro',
        subtitle: 'Premium-Vorlagen und erweiterte Anpassungen',
        price: '15',
        period: '/ Monat',
        ctaText: 'Auf Pro upgraden',
        ribbonTitle: 'Beliebt',
      },
      {
        title: 'Firmen',
        subtitle: 'Maßgeschneiderte Lösungen für große Projekte',
        price: '45',
        period: '/ Monat',
        ctaText: 'Unternehmensfunktionen freischalten',
      },
    ],
  },

  faqs: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        title: 'Ist AstroWind kompatibel mit Astro und Tailwind CSS?',
        description: 'Ja, AstroWind ist so konzipiert, dass es mit den neuesten Versionen von Astro und Tailwind CSS kompatibel ist.',
      },
      {
        title: 'Kann ich AstroWind für persönliche und kommerzielle Projekte nutzen?',
        description: "Sicherlich! AstroWind ist vielseitig und kann für eine Vielzahl von Projekten genutzt werden.",
      },
      {
        title: 'Welche Programmierkenntnisse sind erforderlich?',
        description: 'Während einige HTML- und CSS-Kenntnisse hilfreich sind, ermöglicht die benutzerfreundliche Oberfläche es auch Personen mit geringer Erfahrung, beeindruckende Websites zu erstellen.',
      },
      {
        title: 'Gibt es Kundensupport?',
        description: "Absolut, unser engagiertes Support-Team ist hier, um Ihnen bei allen Herausforderungen zu helfen.",
      },
    ],
  },

  contact: {
    title: 'Kontaktieren Sie uns',
    subtitle: "Haben Sie Fragen? Wir sind hier, um zu helfen!",
    ctaText: 'Kontakt aufnehmen',
    items: [
      {
        title: 'E-Mail',
        description: 'contact@support.com',
        icon: 'tabler:mail',
      },
      {
        title: 'Telefon',
        description: '+1 (234) 567-890',
        icon: 'tabler:headset',
      },
      {
        title: 'Folgen',
        description: '@example',
        icon: 'tabler:brand-twitter',
      },
    ],
  },

  blog: {
    title: "Bleiben Sie informiert",
    information: 'Entdecken Sie unsere Sammlung von Artikeln und Tutorials zu Webentwicklung und Design-Trends.',
  },
};

export default saas;
