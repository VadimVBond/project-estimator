// ─── SaaS Landing Page — IT ────────────────────────────────────────

import type { LandingSaas } from './types';

const saas: LandingSaas = {
  metadata: {
    title: 'Landing Page Saas',
  },

  header: {
    loginButton: 'Accedi',
    signupButton: 'Iscriviti',
  },

  hero: {
    tagline: 'Demo Web SaaS',
    title: 'Semplifica il web design con Astrowind: <br /> il tuo alleato <span class="text-accent dark:text-white highlight">SaaS</span> ideale<br />',
    subtitle: '<span class="hidden sm:inline">Migliora il tuo flusso di creazione siti web con le soluzioni SaaS di <span class="font-semibold">AstroWind</span>.</span> Unisci perfettamente Astro 3.0 e Tailwind CSS.',
    cta: 'Inizia',
    cta2: 'Scopri di più',
    imageAlt: 'Immagine Hero AstroWind',
  },

  features: {
    title: 'Perché scegliere AstroWind?',
    subtitle: "Ciascuna delle seguenti caratteristiche accresce il valore di AstroWind.",
    items: [
      {
        title: 'Integrazione di Astro 3.0 e Tailwind CSS',
        description: 'Offre una combinazione potente che migliora sia il processo di sviluppo che l\'esperienza dell\'utente finale.',
        icon: 'tabler:layers-union',
      },
      {
        title: 'Design versatile per startup e piccole imprese',
        description: "Personalizza facilmente AstroWind per allinearlo al brand della tua attività.",
        icon: 'tabler:artboard',
      },
      {
        title: 'Personalizzazione semplice',
        description: 'Ideale per professionisti e creativi che vogliono evidenziare la loro competenza con strumenti intuitivi.',
        icon: 'tabler:writing',
      },
      {
        title: 'Landing page e blog ottimizzati',
        description: "Le pagine di atterraggio sono progettate per coinvolgere i visitatori e stimolare azioni.",
        icon: 'tabler:podium',
      },
      {
        title: 'Caricamenti veloci',
        description: "L'uso di Astro 3.0 garantisce rendering e caricamenti fluidi e performanti.",
        icon: 'tabler:rocket',
      },
      {
        title: 'Struttura orientata alla SEO',
        description: "Segue le migliori pratiche SEO con un codice pulito per aumentare la visibilità.",
        icon: 'tabler:eyeglass',
      },
    ],
  },

  useCases: {
    title: 'Casi d\'uso',
    subtitle: "Scopri come il template versatile si rivela la soluzione ideale per tanti campi di impiego.",
    items: [
      {
        contentTitle: 'Storie di successo di Startup: <br /><span class="text-2xl">Il Lancio con AstroWind</span>',
        descriptionLabel: 'Descrizione:',
        description: "Sei una startup con grandi sogni? AstroWind guida il tuo successo garantendoti credibilità fin dall'inizio.",
        benefitsLabel: 'Vantaggi:',
        benefits: "Permetti alle startup di creare siti professionali in fretta. <br /> Fai una prima impressione memorabile.",
        imageAlt: 'Immagine Startup',
      },
      {
        contentTitle: 'Vetrina SaaS: <br /><span class="text-2xl">Migliorare l\'esperienza dell\'utente</span>',
        descriptionLabel: 'Descrizione:',
        description: "Per un SaaS, l'esperienza utente è vitale. Sfrutta l'efficienza e le configurazioni intuitive.",
        benefitsLabel: 'Vantaggi:',
        benefits: "Sviluppa layout chiari e coesi. <br /> Comunica elementi complessi in modo efficace.",
        imageAlt: 'Immagine Azienda SaaS',
      },
      {
        contentTitle: 'Portfolio Creativi: <br /><span class="text-2xl">Metti in mostra il tuo lavoro</span>',
        descriptionLabel: 'Descrizione:',
        description: "Il tuo portfolio è il tuo capolavoro e AstroWind è la tua tela. Per designer, artisti e creativi.",
        benefitsLabel: 'Vantaggi:',
        benefits: "Fornisce sfondi accattivanti per dare priorità all'aspetto visivo e impressionare gli ospiti.",
        imageAlt: 'Immagine Portfolio',
      },
      {
        contentTitle: 'Crescita delle Imprese: <br /><span class="text-2xl">Filtra nuovi visitatori</span>',
        descriptionLabel: 'Descrizione:',
        description: "Per le piccole imprese, un sito accurato crea la differenza e attira nuovi avventori.",
        benefitsLabel: 'Vantaggi:',
        benefits: "Presenta l'impresa conferendo fiducia e solidità. <br /> Assicura una navigazione tranquilla e rassicurante.",
        imageAlt: 'Immagine Piccola Impresa',
      },
    ],
  },

  pricing: {
    title: 'Piani Tariffari Flessibili',
    plans: [
      {
        title: 'Gratis',
        subtitle: 'Accesso alle utilità di base',
        price: '0',
        period: '/ mese',
        ctaText: 'Inizia Gratuitamente',
      },
      {
        title: 'Pro',
        subtitle: 'Funzionalità premium ed esclusive',
        price: '15',
        period: '/ Mese',
        ctaText: 'Aggiorna a Pro',
        ribbonTitle: 'Popolare',
      },
      {
        title: 'Enterprise',
        subtitle: 'Progetti su scala larga',
        price: '45',
        period: '/ Mese',
        ctaText: 'Sblocca Funzioni',
      },
    ],
  },

  faqs: {
    title: 'Domande Frequenti',
    items: [
      {
        title: 'AstroWind è compatibile con le ultime versioni?',
        description: 'Sì, AstroWind è studiato per appoggiarsi alla forza delle tecnologie più moderne e affidabili.',
      },
      {
        title: 'Posso usarlo per scopi commerciali?',
        description: "Assolutamente sì! Puoi declinare l'uso come meglio si adatta alle tue necessità commerciali o hobby.",
      },
      {
        title: 'Le competenze richieste?',
        description: 'L\'interfaccia ti permette di saltare il duro del codice anche senza un pesante background formativo alle spalle.',
      },
      {
        title: 'Fornite Supporto?',
        description: "Sì, non esitare a raggiungerci in caso di difficoltà estreme e dubbi.",
      },
    ],
  },

  contact: {
    title: 'Mettiti in contatto',
    subtitle: "Dubbi? Contattaci con il form qui sotto!",
    ctaText: 'Contattaci',
    items: [
      {
        title: 'Email',
        description: 'contact@support.com',
        icon: 'tabler:mail',
      },
      {
        title: 'Telefono',
        description: '+1 (234) 567-890',
        icon: 'tabler:headset',
      },
      {
        title: 'Seguici',
        description: '@example',
        icon: 'tabler:brand-twitter',
      },
    ],
  },

  blog: {
    title: "Resta Aggiornato",
    information: 'Trova nuovi spunti tra guide e articoli del mondo design e web.',
  },
};

export default saas;
