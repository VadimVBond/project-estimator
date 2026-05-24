// ─── Startup Landing Page — IT ─────────────────────────────────────

import type { LandingStartup } from './types';

const startup: LandingStartup = {
  metadata: {
    title: 'Pagina Iniziale Startup',
  },

  hero: {
    tagline: 'Demo Web Startup',
    title: 'Migliora <span class="hidden sm:inline">la presenza online della</span> tua <span class="text-accent dark:text-white highlight">Startup</span> con i modelli Astrowind',
    subtitle: 'Cattura l\'attenzione con i modelli <span class="font-semibold">Astrowind</span>, il tuo percorso per rafforzare l\'impronta digitale della tua startup, favorire la credibilità ed espandere la tua portata.',
    cta: 'Ottieni i modelli',
    cta2: 'Scopri di più',
  },

  stats: {
    title: 'Le nostre statistiche',
    items: [
      { title: 'Modelli', amount: '56' },
      { title: 'Download', amount: '182K' },
      { title: 'Valutazioni', amount: '4.8' },
      { title: 'Clienti Soddisfatti', amount: '116K' },
    ],
  },

  services: {
    title: 'Quali servizi offriamo?',
    subtitle: 'Offriamo un\'ampia gamma di template per siti web adatti a vari settori e scopi come business, portfolio, e-commerce, blog, ecc.',
    items: [
      {
        title: 'Istruzioni per Download e Installazione',
        description: 'Offri istruzioni chiare su come scaricare i template acquistati e installarli su varie piattaforme.',
        icon: 'flat-color-icons:document',
      },
      {
        title: 'Demo e Anteprime',
        description: 'Fornisci demo interattive e anteprime che permettano ai clienti di vedere come sarà il loro template prima dell\'acquisto.',
        icon: 'flat-color-icons:template',
      },
      {
        title: 'Supporto Tecnico',
        description: 'Fornire supporto clienti per eventuali problemi tecnici legati ai template.',
        icon: 'flat-color-icons:voice-presentation',
      },
    ],
  },

  features: {
    title: 'Caratteristiche principali dei modelli',
    subtitle: 'Possiedono diverse caratteristiche chiave per soddisfare efficacemente le esigenze di startup e imprenditori.',
    items: [
      {
        title: 'Design Moderno e Professionale',
        description: 'Hanno un design contemporaneo che riflette le tendenze attuali e dà un\'impressione professionale.',
        icon: 'tabler:artboard',
      },
      {
        title: 'Responsive e Mobile-Friendly',
        description: 'Si adattano perfettamente a diverse dimensioni dello schermo.',
        icon: 'tabler:picture-in-picture',
      },
      {
        title: 'Personalizzabilità',
        description: 'Facilmente personalizzabili, permettendo agli utenti di adattare design, colori e contenuti all\'identità del proprio brand.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Tempi di Caricamento Rapidi',
        description: 'Ottimizzati per la velocità per garantire un\'esperienza utente fluida.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Ottimizzazione per i Motori di Ricerca (SEO)',
        description: 'Incorporare le migliori pratiche SEO nella struttura del template.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'Compatibilità',
        description: 'I template funzionano perfettamente su vari sistemi di gestione dei contenuti.',
        icon: 'tabler:plug-connected',
      },
    ],
  },

  faqs: {
    title: 'Domande Frequenti',
    items: [
      {
        title: 'Cosa sono i template per landing page?',
        description: 'I template per landing page sono layout di pagine web predefiniti, creati per servire come base per costruire landing page efficaci.',
      },
      {
        title: 'Perché dovrei usare un template?',
        description: 'I vantaggi includono l\'avere una struttura pronta all\'uso che fa risparmiare tempo e fornisce un\'alternativa economica.',
      },
      {
        title: 'Posso visualizzare un\'anteprima prima dell\'acquisto?',
        description: 'Sì, i template consentono la visualizzazione in anteprima. C\'è un pulsante "Demo" associato ad ogni template.',
      },
      {
        title: 'Ho bisogno di competenze tecniche?',
        description: 'Non sono richieste competenze tecniche avanzate, ma è utile avere una comprensione di base.',
      },
      {
        title: 'Posso usare il template su più siti web?',
        description: 'No, il template viene fornito con una licenza per singolo utilizzo.',
      },
      {
        title: 'E se ho bisogno di aiuto con la personalizzazione?',
        description: "I template forniscono una guida passo-passo. Se hai ancora dubbi, il nostro supporto clienti è a disposizione.",
      },
    ],
  },

  cta: {
    title: 'Astro + <br class="block sm:hidden" /><span class="sm:whitespace-nowrap"> Tailwind CSS</span>',
    subtitle: 'Sii sorpreso da questi enormi e falsi numeri. <br class="hidden md:inline" />Non perdere altro tempo! :P',
    buttonText: 'Ottieni modello',
  },

  contact: {
    title: 'Facci sapere come possiamo aiutarti',
    subtitle: "Siamo qui per aiutarti e rispondere a qualsiasi domanda.",
    items: [
      { title: 'Telefono', icon: 'tabler:phone', ctaText: 'Chiamaci' },
      { title: 'Email', icon: 'tabler:mail', ctaText: 'Scrivici' },
      { title: 'Chat vendite', icon: 'tabler:message-circle', ctaText: 'Inizia chat' },
      { title: 'Chat supporto', icon: 'tabler:message-circle', ctaText: 'Inizia chat' },
    ],
  },
};

export default startup;
