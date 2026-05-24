// ─── Startup Landing Page — DE ─────────────────────────────────────

import type { LandingStartup } from './types';

const startup: LandingStartup = {
  metadata: {
    title: 'Startup Startseite',
  },

  hero: {
    tagline: 'Startup Web Demo',
    title: 'Verbessern Sie <span class="hidden sm:inline">die Online-Präsenz</span> Ihres <span class="text-accent dark:text-white highlight">Startups</span> mit Astrowind-Vorlagen',
    subtitle: 'Treten Sie ins Rampenlicht mit <span class="font-semibold">Astrowind</span>-Vorlagen, Ihrem Weg, um den digitalen Fußabdruck Ihres Startups zu stärken, Glaubwürdigkeit zu fördern und Ihre Reichweite zu vergrößern.',
    cta: 'Vorlagen holen',
    cta2: 'Mehr erfahren',
  },

  stats: {
    title: 'Unsere Statistiken',
    items: [
      { title: 'Vorlagen', amount: '56' },
      { title: 'Downloads', amount: '182K' },
      { title: 'Nutzerbewertungen', amount: '4.8' },
      { title: 'Zufriedene Kunden', amount: '116K' },
    ],
  },

  services: {
    title: 'Welche Dienstleistungen bieten wir an?',
    subtitle: 'Wir bieten eine breite Palette an Website-Vorlagen, die für verschiedene Branchen und Zwecke wie Business, Portfolio, E-Commerce, Blog usw. geeignet sind.',
    items: [
      {
        title: 'Download- und Installationsanweisungen',
        description: 'Bieten Sie klare Anweisungen zum Herunterladen der gekauften Vorlagen und deren Installation auf verschiedenen Plattformen.',
        icon: 'flat-color-icons:document',
      },
      {
        title: 'Demo und Vorschauen',
        description: 'Bieten Sie interaktive Demos an, damit Kunden sehen können, wie ihre gewählte Vorlage aussehen wird, bevor sie kaufen.',
        icon: 'flat-color-icons:template',
      },
      {
        title: 'Technischer Support',
        description: 'Bereitstellung von Kundensupport für technische Probleme im Zusammenhang mit den Vorlagen.',
        icon: 'flat-color-icons:voice-presentation',
      },
    ],
  },

  features: {
    title: 'Hauptmerkmale unserer Vorlagen',
    subtitle: 'Besitzen mehrere Schlüsseleigenschaften, um den Bedürfnissen von Startups und Unternehmern effektiv gerecht zu werden.',
    items: [
      {
        title: 'Modernes und professionelles Design',
        description: 'Haben ein zeitgemäßes Design, das aktuelle Trends widerspiegelt und einen professionellen Eindruck hinterlässt.',
        icon: 'tabler:artboard',
      },
      {
        title: 'Responsive und Mobile-Friendly',
        description: 'Passen sich nahtlos an verschiedene Bildschirmgrößen an.',
        icon: 'tabler:picture-in-picture',
      },
      {
        title: 'Anpassbarkeit',
        description: 'Einfach anpassbar, sodass Nutzer Design, Farben, Typografie und Inhalte an ihre Markenidentität anpassen können.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Schnelle Ladezeiten',
        description: 'Optimiert für Geschwindigkeit, um ein reibungsloses Nutzererlebnis zu gewährleisten.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Suchmaschinenoptimierung (SEO)',
        description: 'Integrieren Sie SEO Best Practices in die Vorlagenstruktur und den Code.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'Kompatibilität',
        description: 'Die Vorlagen funktionieren nahtlos über verschiedene Content-Management-Systeme hinweg.',
        icon: 'tabler:plug-connected',
      },
    ],
  },

  faqs: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        title: 'Was sind Landingpage-Vorlagen?',
        description: 'Landingpage-Vorlagen sind vorgefertigte Webseiten-Layouts, die speziell als Grundlage für die Erstellung effektiver Landingpages entwickelt wurden.',
      },
      {
        title: 'Warum sollte ich eine Vorlage verwenden?',
        description: 'Einige der Vorteile sind, dass sie eine sofort einsatzbereite Struktur bieten und Ihnen viel Zeit sparen.',
      },
      {
        title: 'Kann ich Vorlagen vor dem Kauf in der Vorschau anzeigen lassen?',
        description: 'Ja, Sie können Vorlagen vor dem Kauf in der Vorschau anzeigen lassen. Zu jeder Vorlage gibt es eine "Demo"-Schaltfläche.',
      },
      {
        title: 'Benötige ich technische Fähigkeiten, um eine Vorlage zu nutzen?',
        description: 'Fortgeschrittene technische Kenntnisse sind nicht erforderlich, aber ein grundlegendes Verständnis von Webnavigation kann von Vorteil sein.',
      },
      {
        title: 'Kann ich die Vorlage auf mehreren Websites verwenden?',
        description: 'Nein, die Vorlage wird mit einer Einzelnutzungslizenz geliefert.',
      },
      {
        title: 'Was ist, wenn ich Hilfe bei der Anpassung benötige?',
        description: "Die Vorlagen bieten eine umfassende Schritt-für-Schritt-Anleitung. Wenn Sie dennoch Zweifel haben, können Sie sich an unser Kundensupport-Team wenden.",
      },
    ],
  },

  cta: {
    title: 'Astro + <br class="block sm:hidden" /><span class="sm:whitespace-nowrap"> Tailwind CSS</span>',
    subtitle: 'Seien Sie sehr überrascht von diesen riesigen falschen Zahlen, die Sie auf dieser Seite sehen. <br class="hidden md:inline" />Verschwenden Sie keine Zeit mehr! :P',
    buttonText: 'Vorlage holen',
  },

  contact: {
    title: 'Lassen Sie uns wissen, wie wir helfen können',
    subtitle: "Wir sind hier, um zu helfen und alle Fragen zu beantworten, die Sie haben.",
    items: [
      { title: 'Telefon', icon: 'tabler:phone', ctaText: 'Rufen Sie uns an' },
      { title: 'E-Mail', icon: 'tabler:mail', ctaText: 'Schreiben Sie uns' },
      { title: 'Chat mit Vertrieb', icon: 'tabler:message-circle', ctaText: 'Chat starten' },
      { title: 'Chat mit Support', icon: 'tabler:message-circle', ctaText: 'Chat starten' },
    ],
  },
};

export default startup;
