// ─── Simple Landing Pages — IT ─────────────────────────────────────
import type { LandingSimple } from './types';

const landings: Record<string, LandingSimple> = {
  leadGeneration: {
    metadata: { title: 'Demo Generazione Lead' },
    hero: {
      tagline: 'Demo Landing Generazione Lead',
      title: 'Landing Page per Generazione Lead Efficace: Scopri i Segreti',
      subtitle: 'Scopri i segreti per creare una Landing Page che trasforma i visitatori curiosi in lead desiderosi. (Il tuo Hero dovrebbe catturare subito l\'attenzione.)',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Magnete che attrae viti. Demo Generazione Lead',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },

  clickThrough: {
    metadata: { title: 'Demo Landing Click-through' },
    hero: {
      tagline: 'Demo Click-through',
      title: 'Landing Page Click-through: Il Ponte Perfetto per la Conversione!',
      subtitle: 'Impara a progettare una Landing Page Click-through che guida i visitatori in modo continuo verso la tua offerta principale.',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Immagine Hero Landing Click-through',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },

  product: {
    metadata: { title: 'Demo Dettagli Prodotto' },
    hero: {
      tagline: 'Demo Dettagli Prodotto',
      title: 'Landing Page del Prodotto: Presenta con Precisione e Passione!',
      subtitle: 'Guida passo dopo passo per progettare una Landing Page che metta in risalto ogni sfaccettatura del tuo prodotto o servizio.',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Riflettori su un prodotto. Demo Dettagli Prodotto',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },

  sales: {
    metadata: { title: 'Demo Landing di Vendita' },
    hero: {
      tagline: 'Demo Vendite a Testo Lungo',
      title: 'Vendere con una Storia: Il Metodo a Testo Lungo!',
      subtitle: 'Immergiti nella creazione di una Landing Page che racconta, persuade e converte.',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Bambini che raccontano una storia. Demo Landing Vendite',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },

  preLaunch: {
    metadata: { title: 'Landing Page Pre-Lancio' },
    hero: {
      tagline: 'Demo Pre-Lancio',
      title: 'Landing Page Pre-Lancio: Crea Attesa Prima della Grande Rivelazione!',
      subtitle: 'Crea un\'allettante pagina Prossimamente o di Pre-Lancio che faccia aspettare con impazienza il tuo lancio.',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Negozio con cartello Prossimamente. Landing Page Pre-Lancio',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },

  subscription: {
    metadata: { title: 'Demo Landing Abbonamento' },
    hero: {
      tagline: 'Demo Landing Abbonamento',
      title: 'Landing Page Abbonamento: Trasforma i Visitatori Casuali in Iscritti Fedeli!',
      subtitle: 'Sblocca la formula per una pagina di abbonamento che fa tornare sempre il tuo pubblico.',
      cta: 'Call to Action',
      cta2: 'Scopri di più',
      imageAlt: 'Immagine ironica legata all\'annullamento abbonamento. Demo Abbonamento',
    },
    comingSoon: {
      title: 'Prossimamente',
      subtitle: 'Stiamo lavorando ai contenuti di queste pagine demo. Le vedrai molto presto. Resta sintonizzato!',
      buttonText: 'Ottieni modello',
    },
  },
};

export default landings;
