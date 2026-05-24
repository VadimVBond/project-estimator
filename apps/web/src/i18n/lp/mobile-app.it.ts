// ─── Mobile App Landing Page — IT ──────────────────────────────────

import type { LandingMobileApp } from './types';

const mobileApp: LandingMobileApp = {
  metadata: {
    title: 'Homepage App Mobile',
  },

  hero: {
    tagline: 'Demo App Mobile',
    title: 'App <span class="text-accent dark:text-white highlight">AstroWind</span>: <br /> creare siti professionali è facilissimo',
    subtitle: '<span class="hidden sm:inline">Libera una creatività senza limiti: la tua porta d\'accesso al design innovativo.</span> Scarica ora e porta i tuoi progetti al livello successivo.',
    cta: 'Scarica l\'App',
    cta2: 'Scopri di più',
    imageAlt: 'Immagine Hero AstroWind',
  },

  guide: {
    title: 'Come usare la nostra app?',
    subtitle: 'Stanco di passare ore a creare documenti da zero? La nostra app offre una soluzione innovativa con numerosi template.',
    tagline: 'Guida passo-passo',
    steps: [
      {
        title: 'Scarica e installa',
        description: "Inizia scaricando la nostra app user-friendly dallo store del tuo dispositivo.",
        icon: 'tabler:square-number-1',
      },
      {
        title: 'Registrati',
        description: 'Crea un account per accedere a tutte le funzionalità.',
        icon: 'tabler:square-number-2',
      },
      {
        title: 'Esplora i template',
        description: 'Sfoglia la nostra vasta collezione di template per siti web.',
        icon: 'tabler:square-number-3',
      },
      {
        title: 'Visualizza in anteprima e seleziona',
        description: "Visualizza l'anteprima e scegli il template perfetto per le tue esigenze.",
        icon: 'tabler:square-number-4',
      },
    ],
  },

  mainFeatures: {
    sectionTitle: 'Caratteristiche Principali',
    items: [
      { title: 'Interfaccia intuitiva', description: 'Un\'interfaccia facile da navigare per trovare rapidamente i template desiderati.', icon: 'tabler:wand' },
      { title: 'Opzioni di personalizzazione', description: 'Strumenti per modificare testo, colori e immagini all\'interno dei template.', icon: 'tabler:settings' },
      { title: 'Componenti pronti all\'uso', description: 'Migliora il design con grafiche e layout pronti all\'uso.', icon: 'tabler:template' },
      { title: 'Modalità Anteprima', description: 'Guarda l\'anteprima di ogni template prima dell\'acquisto.', icon: 'tabler:carousel-horizontal' },
    ],
  },

  otherFeatures: {
    sectionTitle: 'Altre caratteristiche',
    items: [
      { title: 'Accesso Offline', description: 'Possibilità di scaricare i template acquistati per uso offline.', icon: 'tabler:wifi-off' },
      { title: 'Archiviazione Cloud Sicura', description: 'Spazio cloud per accedere ai mockup da qualsiasi luogo.', icon: 'tabler:file-download' },
      { title: 'Aggiornamenti Regolari', description: 'Aggiunta continua di nuovi template e feature.', icon: 'tabler:refresh' },
      { title: 'Wishlist', description: "Crea una lista dei desideri per salvare i template che preferisci.", icon: 'tabler:heart' },
    ],
  },

  stats: {
    title: 'Statistiche della nostra app',
  },

  testimonials: {
    title: 'Cosa dicono i nostri utenti',
    items: [
      {
        testimonial: "Esplorare e scaricare template per siti web è un gioco da ragazzi. L'interfaccia è intuitiva.",
        name: 'Cary Kennedy',
        job: 'Regista',
      },
      {
        testimonial: "Poter visualizzare e testare vari design prima dell'acquisto mi ha fatto risparmiare un sacco di tempo.",
        name: 'Josh Wilkinson',
        job: 'Product Manager',
      },
      {
        testimonial: 'Ho scaricato e usato un template professionale in pochi minuti.',
        name: 'Sidney Hansen',
        job: 'Arredatore',
      },
    ],
    ctaText: 'Leggi altre recensioni',
  },

  faqs: {
    title: 'Hai ancora dubbi?',
    items: [
      { title: 'Cosa fa questa app?', description: 'Fornisce una piattaforma per navigare, acquistare e scaricare template per siti web.' },
      { title: 'Come risolve il mio problema?', description: 'Semplifica il processo di web design risparmiandoti tempo e fatica.' },
      { title: 'È disponibile per il mio dispositivo?', description: "Sì, l'app ha un design multipiattaforma." },
      { title: 'Cosa la differenzia dalle altre?', description: 'L\'interfaccia amichevole, la vasta collezione e l\'integrazione fluida.' },
      { title: 'Ci sono dei costi?', description: 'Il download è gratuito, ma alcuni template potrebbero essere a pagamento.' },
    ],
  },

  finalCta: {
    title: 'Accesso istantaneo a bellissimi template',
    subtitle: 'Semplifica il tuo processo creativo ed eleva la tua presenza online.',
    buttonText: 'Scarica l\'App',
  },
};

export default mobileApp;
