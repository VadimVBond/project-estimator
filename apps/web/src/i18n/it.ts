// Copilot Italian translations
// Questo file contiene tutte le traduzioni per la lingua italiana
// Le sezioni sono divise da commenti per una migliore navigazione e suggerimenti di Copilot
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

export const it = {
  header: {
    homes: { title: "Casa", saas: "Saas", startup: "Avvio", app: "Scarica l'applicazione", personal: "Privato" },
    pages: { title: "Pagine", features: "Funzioni (link di ancoraggio)", services: "Servizi", pricing: "Prezzi", aboutUs: "Chi siamo", contactUs: "Contatti", terms: "Termini", privacyPolicy: "politica sulla riservatezza" },
    landing: {
      title: "Approdo", leadGeneration: "Generazione di lead", sales: "Vendite lunghe", clickThrough: "Pagina cliccabile", squeeze: "Stretta", product: "Informazioni sul prodotto (o servizio).", comingSoon: "Prossimamente", gallery: "Galleria",
      galleryHero: { tagline: "Portfolio", title: "I nostri progetti", subtitle: "Scopri i nostri progetti recenti e le storie di successo.", goBack: "Indietro" },
    },
    blog: { title: "Blog", blogList: "Elenco degli articoli", article: "Articolo", mkdocs: "Articolo di MkDocs", ai: "L'intelligenza artificiale in fase di sviluppo", multi: "Multiarchitettura", twbs: "Tailwind contro Bootstrap", autonav: "Navigazione con riduzione dei prezzi", articleMdx: "Articolo (con MDX)", category: "Pagina della categoria", tag: "Etichetta la pagina" },
    brand: { firstName: "Vadim", lastName: "Bondarenko", stack: { ai: "AI", web: "Web", docs: "Docs" } }, widgets: "Widget", contact: "Contatti", download: "Vedi CV",
  },
  footer: {
    product: { title: "Prodotto", features: "Funzioni", security: "Sicurezza", team: "Squadra", enterprise: "Aziendale", customerStories: "Storie di clienti", pricing: "Prezzi", resources: "Risorse" },
    platform: { title: "Piattaforma", developerAPIs: "API per sviluppatori", partners: "Partner", atom: "Atomo", electron: "Elettrone", astrowindDesktop: "Desktop AstroWind" },
    support: { title: "Supporto", docs: "Documentazione", communityForum: "Forum comunitario", professionalServices: "Servizi professionali", skills: "Competenze", status: "Stato" },
    company: { title: "Azienda", about: "Informazioni sull'azienda", blog: "Blog", careers: "Carriera", press: "Premere", inclusion: "Inclusività", socialImpact: "Influenza sociale", shop: "Negozio" },
    legal: { terms: "Termini", privacy: "Riservatezza" },
  },
  index: {
    metadata: {
      title: "Astrowind è un modello gratuito per creare siti Web con Astro + Tailwind CSS",
    },
    hero: {
      cta: "Visualizza progetti",
      cta2: "Contattami",
      imageAlt: "Immagine dell'eroe di AstroWind",
      title: {
        part1: "L'intelligenza artificiale nei tuoi progetti -",
        part2: "Realizzo progetti web veloci e moderni"
      },
      subtitle: "Le tue idee vengono trasformate in siti web funzionanti con funzionalità interattive e supporto multilingue",
      description: "Adatto a startup, piccole imprese, portfolio, siti di marketing e pagine di destinazione. Utilizzo Python, Astro, Next.js, Tailwind, Bootstrap e i18n per creare soluzioni web moderne.",
    },
    philosophy: {
      title: "Filosofia",
      items: [
        {
          title: "Semplicità",
          description: "Codice chiaro e mantenibile con UX intuitiva",
          icon: "tabler:adjustments",
        },
        {
          title: "Best Practices",
          description: "Architettura modulare, pronta per l'i18n, framework moderni",
          icon: "tabler:circle-check",
        },
        {
          title: "Alte prestazioni",
          description: "Caricamento veloce, risorse ottimizzate, ottimizzato per la SEO",
          icon: "tabler:rocket",
        },
      ],
    },
    technologies: {
      title: "Le mie tecnologie",
    },
    features: {
      tagline: "Cosa ottieni?",
      title: "Fasi di sviluppo del sito web",
      subtitle: "Trasformo le idee in siti web funzionanti: portfolio, landing page, progetti SaaS e blog con tecnologie moderne e ad alte prestazioni.",

      items: [
        {
          title: "Pianificazione e analisi",
          description: "Discutiamo gli obiettivi del tuo progetto, la funzionalità e il pubblico di destinazione in modo che ogni dettaglio funzioni per il risultato.",
          icon: "tabler:list-check",
        },
        {
          title: "Progettazione e prototipo",
          description: "Creo mockup visivi e prototipi di interfacce utilizzando Tailwind e Bootstrap, concentrandomi su UX/UI e sul marchio del cliente.",
          icon: "tabler:devices",
        },
        {
          title: "Sviluppo e integrazione",
          description: "Programma frontend e backend in Astro, Next.js e Python, collego database, API e multilingue (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Test e ottimizzazione",
          description: "Controllo il sito su tutti i dispositivi, ottimizzo la velocità di caricamento e correggo gli errori per un funzionamento stabile e un'elevata conversione.",
          icon: "tabler:rocket",
        },
        {
          title: "Lancio e supporto",
          description: "Ospito il progetto, collego analisi e SEO e fornisco anche supporto e possibilità di ulteriore ridimensionamento.",
          icon: "tabler:settings",
        },
        {
          title: "Approccio individuale",
          description: "Ogni progetto è personalizzato in base alle esigenze specifiche del cliente, con un'architettura flessibile e la disponibilità ad aggiungere nuove funzionalità.",
          icon: "tabler:bulb",
        },
      ],
    },
    content: {
      tagline: "All'interno del progetto",
      title: "Struttura e caratteristiche dei vostri progetti web",
      imageAlt: "Illustrazione del progetto",
      additionalTitle: "Utilizziamo tecnologie moderne",
      additionalDescription: "Realizziamo siti web ad alte prestazioni, comodità e scalabilità.",
      items: [
        {
          title: "Costruito su Astro e Next.js",
          description:
            "Utilizziamo moderni generatori di siti statici e framework React per un frontend veloce, efficiente e interattivo.",
        },
        {
          title: "Backend in Python/Django",
          description:
            "Forniamo server, API e database affidabili e scalabili per qualsiasi progetto: dal portfolio al SaaS.",
        },
        {
          title: "Styling con Tailwind e Bootstrap",
          description:
            "Creiamo un design adattivo e moderno con layout flessibile, comoda personalizzazione e un sistema visivo coerente.",
        },
        {
          title: "Compatibilità tra browser",
          description:
            "I siti vengono visualizzati correttamente in tutti i browser e dispositivi più diffusi, fornendo un'esperienza utente stabile per tutti gli utenti.",
        },
      ],
    },
    content2: {
      additionalDescription: "Flessibilità e adattamento alle vostre esigenze",
      items: [
        {
          title: "Alto livello di personalizzazione",
          description:
            "Personalizziamo l'architettura del progetto in base alle esigenze individuali in modo che il sito sia pienamente conforme al marchio e agli obiettivi aziendali.",
        },
        {
          title: "Supporto multilingue (i18n)",
          description:
            "Realizziamo siti Web con supporto per diverse lingue: russo, inglese, ucraino - versioni linguistiche facilmente espandibili.",
        },
        {
          title: "Design completamente reattivo",
          description:
            "Ottimizzato per dispositivi mobili, tablet e desktop con un'esperienza utente coerente e senza interruzioni.",
        },
        {
          title: "Integrazione di media e contenuti",
          description:
            "Colleghiamo immagini, video, slide e blocchi interattivi per aumentare il coinvolgimento degli utenti e la facilità di gestione dei contenuti.",
        },
      ],
    },
    content3: {
      additionalDescription: "Sviluppo e scalabilità del progetto",
      items: [
        {
          title: "Maggiore coinvolgimento degli utenti",
          description:
            "Elementi interattivi, navigazione semplice e layout visivamente accattivanti aiutano a mantenere il pubblico coinvolto più a lungo.",
        },
        {
          title: "Miglioramenti regolari",
          description:
            "Mantenere la pertinenza del progetto con nuove tecnologie, aggiornamentи e ottimizzazione delle funzionalità.",
        },
        {
          title: "Uso efficiente delle risorse",
          description:
            "Risparmiamo tempo e fatica al cliente utilizzando tecnologie già pronte e soluzioni integrate invece di sviluppare da zero.",
        },
        {
          title: "Supporto e sostegno",
          description:
            "Aiutiamo il cliente con l'amministrazione del sito web, il dimensionamento e le funzioni aggiuntive in modo che il progetto cresca insieme al business.",
        },
      ],
    },
    steps: {
      title: "Fasi di ordinazione del tuo sito web",
      imageAlt: "Illustrazione del flusso di lavoro",
      items: [
        {
          title: "Passaggio 1: <span class=\"font-medium\">discussione del progetto</span>",
          description:
            "Chiariamo gli obiettivi, la funzionalità e i requisiti del sito in modo che il piano di sviluppo soddisfi pienamente i tuoi obiettivi.",
          icon: "tabler:users",
        },
        {
          title: "Passaggio 2: <span class=\"font-medium\">Prototipo e progettazione</span>",
          description:
            "Creiamo layout di interfaccia e concetti visivi utilizzando Tailwind e Bootstrap e coordiniamo con te lo stile e la UX.",
          icon: "tabler:device-desktop",
        },
        {
          title: "Passaggio 3: <span class=\"font-medium\">Sviluppo e integrazione</span>",
          description:
            "Programmiamo frontend e backend (Astro, Next.js, Python/Django), colleghiamo database, API e multilingue (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Passaggio 4: <span class=\"font-medium\">test e avvio</span>",
          description:
            "Controlliamo il sito su tutti i dispositivi, ottimizziamo la velocità, colleghiamo SEO e strumenti analitici in modo che il sito sia pronto per l'uso.",
          icon: "tabler:rocket",
        },
        {
          title: "Passaggio 5: <span class=\"font-medium\">Supporto e sviluppo</span>",
          description:
            "Forniamo supporto al progetto, aggiungendo nuove funzionalità e adattando il sito man mano che la tua attività cresce.",
          icon: "tabler:settings",
        },
      ],
    },
    features2: {
      title: "Tecnologie e strumenti principali",
      subtitle: "Componenti e framework utilizzati di frequente per lo sviluppo di siti Web moderni",
      tagline: "Tecnologie",
      items: [
        {
          title: "Framework frontend",
          description: "Astro e Next.js per uno sviluppo front-end veloce e interattivo con supporto per pagine statiche e dinamiche.",
          icon: "flat-color-icons:template",
        },
        {
          title: "Stilizzazione",
          description: "Tailwind CSS e Bootstrap per un design reattivo, moderno e cross-browser con personalizzazione flessibile.",
          icon: "flat-color-icons:gallery",
        },
        {
          title: "Backend",
          description: "Python e Django/Flask per la creazione di server, API, integrazione di database e logica aziendale robusti.",
          icon: "flat-color-icons:approval",
        },
        {
          title: "Gestione dei contenuti",
          description: "Soluzioni Markdown, JSON e CMS per una facile gestione di testi, immagini e contenuti multimediali sul sito.",
          icon: "flat-color-icons:document",
        },
        {
          title: "SEO e analisi",
          description: "Strumenti SEO, Google Analytics e metriche prestazionali per migliorare la visibilità e monitorare le prestazioni.",
          icon: "flat-color-icons:advertising",
        },
        {
          title: "Commercio elettronico e pagamenti",
          description: "Integrazione di sistemi di pagamento e realizzazione di pagine con tariffe e prodotti per siti con funzionalità commerciali.",
          icon: "flat-color-icons:currency-exchange",
        },
        {
          title: "Feedback e comunicazione",
          description: "Moduli di feedback, commenti e blocchi di revisione integrati per l'interazione con clienti e utenti.",
          icon: "flat-color-icons:voice-presentation",
        },
        {
          title: "Contatti e modulistica",
          description: "Moduli di contatto, iscrizioni e widget interattivi per una comunicazione rapida con i visitatori del sito.",
          icon: "flat-color-icons:business-contact",
        },
        {
          title: "Archiviazione dei dati",
          description: "Database SQL/NoSQL, soluzioni cloud e API per l'archiviazione e l'elaborazione affidabili delle informazioni.",
          icon: "flat-color-icons:database",
        },
      ],
    },
    blogLatestPosts: {
      title: "Materiali e custodie utili",
      information: `Pubblico analisi di progetti, tecnologie e approcci che aiutano a creare siti Web veloci ed efficienti.
  
Questi non sono solo articoli: è un'esperienza pratica applicata in progetti reali.`,
    },
    faqs: {
      title: "Domande frequenti",
      subtitle:
        "Risposte alle domande più frequenti sullo sviluppo di siti Web, sulle tecnologie e sul processo di lavoro.",
      tagline: "Domande frequenti",
      items: [
        {
          title: "Quanto costa lo sviluppo di un sito web?",
          description:
            "Il costo dipende dalla complessità del progetto: numero di pagine, funzionalità, integrazioni e design. Dopo aver discusso il problema, offro la soluzione ottimale adatta al tuo budget.",
        },
        {
          title: "Di cosa ho bisogno per iniziare?",
          description:
            "Conoscenza di base di HTML, CSS e Node.js installati sul tuo computer e desiderio di creare qualcosa di interessante.",
        },
        {
          title: "Quanto tempo ci vuole per creare un sito web?",
          description:
            "In media da diversi giorni a diverse settimane. Le pagine di destinazione semplici vengono realizzate rapidamente, i progetti più complessi (con API, database, i18n) richiedono più tempo.",
        },
        {
          title: "Qualи tecnologie usi?",
          description:
            "Nel mio lavoro utilizzo Astro, Next.js, Python (Django/Flask), Tailwind, Bootstrap, oltre a soluzioni per il multilinguismo (i18n) e l'ottimizzazione delle prestazioni.",
        },
        {
          title: "È possibile realizzare un sito web multilingue ?",
          description:
            "Sì, implemento il supporto completo per diverse lingue con un comodo passaggio e la possibilità di scalare nuovi mercati.",
        },
        {
          title: "Il sito sarà adattato ai dispositivi mobili ?",
          description:
            "Sì, tutti i progetti sono sviluppati con un design responsivo e funzionano correttamente su telefoni, tablet e desktop.",
        },
        {
          title: "Aiuti dopo il lancio del sito ?",
          description:
            "Sì, è possibile supportare, migliorare la funzionalità, aggiornare e scalare il progetto man mano che la tua azienda cresce.",
        },
      ],
    },
    stats: {
      stats: [
        { title: "Download", amount: "132K" },
        { title: "Stelle", amount: "24,8K" },
        { title: "Forchette", amount: "10,3K" },
        { title: "Utenti", amount: "48,4K" },
      ],
    },
    callToAction: {
      cta: {
        text: "Ordina un sito web",
      },
      subtitle: {
        part1: "Pronto a lanciare il tuo sito web ? Ti aiuterò a creare un progetto veloce, moderno e completamente personalizzato per le tue esigenze.",
        part2: "Scrivimi adesso e parliamo del tuo progetto.",
      },
    },
  },
  blog: {
    title: "Blog",
    subtitle:
      "Blog di esempio generato staticamente con notizie, tutorial, risorse e altri contenuti interessanti relativi ad AstroWind",
    backToBlog: "Torna al blog",
    tags: "Tag:",
    olderPosts: "Vecchi articoli",
    newerPosts: "Nuovi articoli",
    readingTime: "min di lettura",
  },

  personal_p: {
    cta: {
      title: "Lavoriamo insieme",
      subtitle: "Pronto a realizzare il tuo progetto: dall'idea alla produzione",
      cta: {
        text: "Contattami",
        href: "/contact",
      },
    },

    metadata: {
      title: "Portfolio personale dello sviluppatore",
    },

    links: [
      { text: "Home", href: "#" },
      { text: "Chi sono", href: "#about" },
      { text: "Curriculum", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "GitHub", href: "https://github.com/VadimVBond" },
    ],

    actions: [
      { text: "Contattami", href: "#contact" },
    ],

    hero: {
      title: "Vadim",
      tagline: "Sviluppatore Fullstack",
      cta: {
        text: "Contattami",
        href: "/contact",
      },
      subtitle: "Sviluppo siti web multilingue veloci, documentazione e applicazioni web. Specializzato in Astro, Python (Flask, Django Ninja) e MkDocs.",
    },

    about: {
      title: "Chi sono",
      paragraph1: "Sono uno sviluppatore fullstack specializzato nella creazione di siti staticи veloci, documentazione e applicazioni web multilingue.",
      paragraph2: "Lavoro con Astro, MkDocs, Flask e Django Ninja. Il focus principale è la performance, la semplicità dell'architettura e il supporto i18n.",
      paragraph3: "Sviluppo progetti che scalano e si adattano facilmente a diverse lingue e compiti.",
      items: [
        { title: "GitHub", icon: "tabler:brand-github", href: "https://github.com/VadimVBond" },
        { title: "Documentazione", icon: "tabler:book", href: "/docs" },
        { title: "Portfolio", icon: "tabler:briefcase", href: "#portfolio" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt: "Developer workspace",
      },
    },

    content: {
      portfolio: {
        title: "I miei progetti",
        subtitle: "Progetti reali con focus su performance, i18n e facilità di manutenzione.",
        items: [
          {
            title: "Sito multilingue MkDocs",
            description: "Documentazione con supporto multilingue, navigazione dinamica e tema personalizzato.",
            role: "Configurazione struttura, i18n, personalizzazione tema, integrazione componenti.",
          },
          {
            title: "Portfolio Astro con i18n",
            description: "Sito statico veloce con supporto multilingue e struttura ottimizzata.",
            role: "Sviluppo architettura, configurazione i18n, ottimizzazione performance.",
          },
          {
            title: "Sito Flask con localizzazione",
            description: "Sito su Flask con supporto per diverse lingue e contenuto Markdown.",
            role: "Backend, i18n, struttura contenuti, deploy.",
          },
          {
            title: "Check-list interattiva",
            description: "Applicazione con calcoli, filtraggio ed esportazione (JSON, Excel, PDF).",
            role: "Logica frontend, gestione dati, esportazione file.",
          },
        ],
        image: "",
      },
    },

    steps: {
      workExperience: [
        {
          title: "Freelance e progetti personali (attuale)",
          description: "Sviluppo di siti web, documentazione e applicazioni web utilizzando tecnologie moderne.",
          icon: "tabler:briefcase",
        },
      ],
      education: [
        {
          title: "Autoformazione e pratica",
          icon: "tabler:school",
        },
      ],
    },

    skills: {
      title: "Competenze",
      subtitle: "Tecnologie e strumenti che utilizzo nel mio lavoro.",
      items: [
        {
          title: "Python (Flask, Django Ninja)",
          description: "Sviluppo della logica backend e delle API.",
        },
        {
          title: "Astro / Next.js",
          description: "Creazione di applicazioni frontend veloci e siti statici.",
        },
        {
          title: "MkDocs (Material)",
          description: "Creazione di documentazione con supporto i18n.",
        },
        {
          title: "i18n / localizzazione",
          description: "Implementazione di interfacce multilingue.",
        },
        {
          title: "Tailwind / Bootstrap",
          description: "Layout adattivo e moderno.",
        },
        {
          title: "JSON / Markdown",
          description: "Architettura incentrata sui contenuti.",
        },
      ],
    },

    testimonials: {
      title: "Progetti",
      subtitle: "Esperienza pratica di sviluppo",
      items: [],
    },

    portfolio: {
      callToAction: {
        title: "Pronto a discutere il progetto",
        subtitle: "Contattami per collaborare",
        action: "Contattami",
        button: "Contattami",
        href: "/contact",
      },
    },

    blog: {
      title: "Blog",
      information: "Articoli su sviluppo, i18n, documentazione e architettura dei progetti.",
    },
  },
};



