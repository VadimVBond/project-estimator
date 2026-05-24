// ─── Simple Landing Pages — DE ─────────────────────────────────────
import type { LandingSimple } from './types';

const landings: Record<string, LandingSimple> = {
  leadGeneration: {
    metadata: { title: 'Lead-Generierung Demo' },
    hero: {
      tagline: 'Lead-Generierung Landing Demo',
      title: 'Effektive Lead-Generierung: Entschlüsseln Sie die Geheimnisse',
      subtitle: 'Entdecken Sie die Geheimnisse zur Erstellung einer Landing Page, die neugierige Besucher in begeisterte Leads verwandelt. (Ihr Hero sollte sofort Aufmerksamkeit erregen. Verwenden Sie eine starke Überschrift.)',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Magnet zieht Schrauben an. Lead-Generierung Demo',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },

  clickThrough: {
    metadata: { title: 'Click-Through Landing Page Demo' },
    hero: {
      tagline: 'Click-Through Demo',
      title: 'Click-Through Landing Page: Die perfekte Brücke zur Konvertierung!',
      subtitle: 'Erfahren Sie, wie Sie eine Click-Through Landing Page gestalten, die Besucher nahtlos zu Ihrem Hauptangebot führt.',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Click-Through Landing Page Hero-Bild',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },

  product: {
    metadata: { title: 'Produktdetails Landing Page Demo' },
    hero: {
      tagline: 'Produktdetails Demo',
      title: 'Produkt Landing Page: Präsentieren Sie mit Präzision und Leidenschaft!',
      subtitle: 'Schritt-für-Schritt-Anleitung zur Erstellung einer Landing Page, die jede Facette Ihres Produkts hervorhebt.',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Ein Scheinwerfer auf ein Produkt. Produktdetails Demo',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },

  sales: {
    metadata: { title: 'Verkaufs-Landing Page Demo' },
    hero: {
      tagline: 'Long-Form Sales Demo',
      title: 'Verkaufen mit einer Geschichte: Auf die ausführliche Art!',
      subtitle: 'Tauchen Sie tief ein in die Gestaltung einer Landing Page, die erzählt, überzeugt und konvertiert.',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Kinder erzählen eine Geschichte. Sales Landing Page Demo',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },

  preLaunch: {
    metadata: { title: 'Pre-Launch Landing Page' },
    hero: {
      tagline: 'Pre-Launch Demo',
      title: 'Pre-Launch Landing Page: Bauen Sie Hype auf vor der großen Enthüllung!',
      subtitle: 'Gestalten Sie eine verlockende Coming Soon Page, die Besucher ungeduldig auf Ihren Start warten lässt.',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Geschäft mit Coming Soon Schild. Pre-Launch Landing Page',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },

  subscription: {
    metadata: { title: 'Abo-Landing Page Demo' },
    hero: {
      tagline: 'Abo-Landing Demo',
      title: 'Abo-Landing Page: Machen Sie aus Besuchern treue Abonnenten!',
      subtitle: 'Entschlüsseln Sie die Formel für eine Abo-Landing Page, die Ihr Publikum immer wieder zurückkehren lässt.',
      cta: 'Aktion ausführen',
      cta2: 'Mehr erfahren',
      imageAlt: 'Ironisches Bild im Zusammenhang mit Abo-Kündigung. Abo Demo',
    },
    comingSoon: {
      title: 'Demnächst',
      subtitle: 'Wir arbeiten an den Inhalten dieser Demo-Seiten. Sie werden bald verfügbar sein. Bleiben Sie dran!',
      buttonText: 'Vorlage holen',
    },
  },
};

export default landings;
