// ─── Mobile App Landing Page — DE ──────────────────────────────────

import type { LandingMobileApp } from './types';

const mobileApp: LandingMobileApp = {
  metadata: {
    title: 'Mobile App Startseite',
  },

  hero: {
    tagline: 'Mobile App Web Demo',
    title: 'AstroWind <span class="text-accent dark:text-white highlight">App</span>: <br /> Professionelle Websites leicht gemacht',
    subtitle: '<span class="hidden sm:inline">Entfesseln Sie grenzenlose Kreativität: Ihr Gateway zu innovativem Design.</span> Jetzt herunterladen und Ihre Projekte wie nie zuvor aufwerten.',
    cta: 'App herunterladen',
    cta2: 'Mehr erfahren',
    imageAlt: 'AstroWind Hero Bild',
  },

  guide: {
    title: 'Wie benutzt man unsere App?',
    subtitle: 'Keine Lust mehr, Stunden mit der Erstellung von Dokumenten zu verbringen? Unsere App bietet eine innovative Lösung. Mit einer großen Auswahl an Vorlagen erstellen Sie atemberaubende Dokumente in wenigen Minuten.',
    tagline: 'Schritt-für-Schritt-Anleitung',
    steps: [
      {
        title: 'App herunterladen und installieren',
        description: "Beginnen Sie, indem Sie unsere benutzerfreundliche App aus Ihrem App Store herunterladen.",
        icon: 'tabler:square-number-1',
      },
      {
        title: 'Registrieren',
        description: 'Erstellen Sie ein Konto, um auf alle Funktionen zugreifen zu können.',
        icon: 'tabler:square-number-2',
      },
      {
        title: 'Vorlagen durchsuchen',
        description: 'Erkunden Sie unsere vielfältige Sammlung von Website-Vorlagen.',
        icon: 'tabler:square-number-3',
      },
      {
        title: 'Vorlage vorschauen und auswählen',
        description: "Nutzen Sie Vorschauen und wählen Sie die Vorlage, die am besten zu Ihrem Projekt passt.",
        icon: 'tabler:square-number-4',
      },
    ],
  },

  mainFeatures: {
    sectionTitle: 'Hauptfunktionen',
    items: [
      { title: 'Benutzerfreundlich', description: 'Eine intuitive Oberfläche, mit der Benutzer schnell die gewünschten Vorlagen finden.', icon: 'tabler:wand' },
      { title: 'Personalisierung', description: 'Beinhaltet Anpassungswerkzeuge, um Texte, Farben und Bilder zu ändern.', icon: 'tabler:settings' },
      { title: 'Gebrauchsfertige Komponenten', description: 'Verbessern Sie Ihre Designs mit Elementen wie Grafiken und Icons.', icon: 'tabler:template' },
      { title: 'Vorschau-Modus', description: 'Bietet eine Vorschau jeder Vorlage vor dem Kauf.', icon: 'tabler:carousel-horizontal' },
    ],
  },

  otherFeatures: {
    sectionTitle: 'Weitere Funktionen',
    items: [
      { title: 'Offline-Zugriff', description: 'Möglichkeit, gekaufte Vorlagen für die Offline-Nutzung herunterzuladen.', icon: 'tabler:wifi-off' },
      { title: 'Sicherer Cloud-Speicher', description: 'Cloud-Speicher für Vorlagen, sicherer Zugriff von überall.', icon: 'tabler:file-download' },
      { title: 'Regelmäßige Updates', description: 'Laufend neue Vorlagen und Funktionen.', icon: 'tabler:refresh' },
      { title: 'Wunschliste', description: "Erstellen Sie eine Wunschliste von Vorlagen für später.", icon: 'tabler:heart' },
    ],
  },

  stats: {
    title: 'Statistiken unserer App',
  },

  testimonials: {
    title: 'Was unsere Nutzer sagen?',
    items: [
      {
        testimonial: "Es hat das Durchsuchen und Herunterladen von Vorlagen zu einem Kinderspiel gemacht. Die Oberfläche ist intuitiv.",
        name: 'Cary Kennedy',
        job: 'Regisseur',
      },
      {
        testimonial: "Die Vorschau und das Testen verschiedener Designs vor der Entscheidung hat mir viel Zeit gespart.",
        name: 'Josh Wilkinson',
        job: 'Produktmanager',
      },
      {
        testimonial: 'Ich konnte innerhalb von Minuten eine professionelle Website-Vorlage herunterladen und nutzen.',
        name: 'Sidney Hansen',
        job: 'Dekorateur',
      },
    ],
    ctaText: 'Mehr Erfahrungsberichte',
  },

  faqs: {
    title: 'Haben Sie noch Fragen?',
    items: [
      { title: 'Was macht diese App?', description: 'Diese App bietet eine Plattform zum Durchsuchen, Kaufen, Herunterladen und Verwenden von Website-Vorlagen.' },
      { title: 'Wie löst diese App mein Problem?', description: 'Sie optimiert den Prozess der Webgestaltung und spart Ihnen Zeit und Mühe.' },
      { title: 'Ist sie für mein Gerät verfügbar?', description: "Unsere App ist plattformübergreifend kompatibel." },
      { title: 'Was unterscheidet diese App von anderen?', description: 'Benutzerfreundlichkeit, umfangreiche Sammlung und nahtlose Integration.' },
      { title: 'Gibt es Kosten?', description: 'Die App selbst ist kostenlos, Vorlagen können jedoch kostenpflichtig sein.' },
    ],
  },

  finalCta: {
    title: 'Sofortiger Zugriff auf schöne Vorlagen',
    subtitle: 'Vereinfachen Sie Ihren kreativen Prozess und verbessern Sie Ihre Online-Präsenz.',
    buttonText: 'App herunterladen',
  },
};

export default mobileApp;
