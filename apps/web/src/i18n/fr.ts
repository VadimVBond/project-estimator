// Copilot French translations
// Ce fichier contient toutes les traductions pour la langue française
// Les sections sont divisées par des commentaires pour une meilleure navigation et des conseils Copilot
import { partners } from "./pages/partners.ru";
import saas from "./lp/saas.ru";
import startup from "./lp/startup.ru";
import mobileApp from "./lp/mobile-app.ru";
import landings from "./lp/landings.ru";

export default {
  nav: {
    partners: "Partenaires",
  },

  partners,

  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};

export const fr = {
  header: {
    homes: { title: "Maison", saas: "Saas", startup: "Démarrer", app: "Téléchargez l'application", personal: "Privé" },
    pages: { title: "Pages", features: "Fonctions (lien d'ancrage)", services: "Services", pricing: "Tarifs", aboutUs: "À propos de nous", contactUs: "Contacts", terms: "Termes", privacyPolicy: "politique de confidentialité" },
    landing: {
      title: "Atterrissage", leadGeneration: "Génération de leads", sales: "Ventes longues", clickThrough: "Page cliquable", squeeze: "Presser", product: "Informations sur le produit (ou service)", comingSoon: "À venir", gallery: "Galerie",
      galleryHero: { tagline: "Portefeuille", title: "Nos projets", subtitle: "Découvrez nos récents projets et nos réussites.", goBack: "Dos" },
    },
    blog: { title: "Blogue", blogList: "Liste des articles", article: "Article", mkdocs: "Article MkDocs", ai: "L'IA en développement", multi: "Multi-architecture", twbs: "Tailwind et Bootstrap", autonav: "Navigation démarque", articleMdx: "Article (avec MDX)", category: "Page de catégorie", tag: "Page de balises" },
    brand: { firstName: "Vadim", lastName: "Bondarenko", stack: { ai: "AI", web: "Web", docs: "Docs" } }, widgets: "Widgets", contact: "Contacts", download: "Voir le CV",
  },
  footer: {
    product: { title: "Produit", features: "Fonctions", security: "Sécurité", team: "Équipe", enterprise: "Entreprise", customerStories: "Témoignages de clients", pricing: "Tarifs", resources: "Ressources" },
    platform: { title: "Plate-forme", developerAPIs: "API pour les développeurs", partners: "Partenaires", atom: "Atome", electron: "Électron", astrowindDesktop: "Bureau AstroWind" },
    support: { title: "Soutien", docs: "Documentation", communityForum: "Forum communautaire", professionalServices: "Services professionnels", skills: "Compétences", status: "Statut" },
    company: { title: "Entreprise", about: "À propos de l'entreprise", blog: "Blogue", careers: "Carrière", press: "Presse", inclusion: "Inclusivité", socialImpact: "Influence sociale", shop: "Boutique" },
    legal: { terms: "Termes", privacy: "Confidentialité" },
  },
  index: {
    metadata: {
      title: "Astrowind est un modèle gratuit pour créer des sites Web avec Astro + Tailwind CSS",
    },
    hero: {
      cta: "Voir les projets",
      cta2: "Contactez-moi",
      imageAlt: "Image AstroWind Hero",
      title: {
        part1: "L'IA dans vos projets -",
        part2: "Je crée des projets web rapides et modernes"
      },
      subtitle: "Vos idées se transforment en sites Web fonctionnels avec des fonctionnalités interactives et un support multilingue",
      description: "Convient aux startups, petites entreprises, portfolios, sites marketing et pages de destination. J'utilise Python, Astro, Next.js, Tailwind, Bootstrap et i18n pour créer des solutions Web modernes.",
    },
    philosophy: {
      title: "Philosophie",
      items: [
        {
          title: "Simplicité",
          description: "Code clair и facile à maintenir avec une UX intuitive",
          icon: "tabler:adjustments",
        },
        {
          title: "Bonnes pratiques",
          description: "Architecture modulaire, prête pour l'i18n, frameworks modernes",
          icon: "tabler:circle-check",
        },
        {
          title: "Haute performance",
          description: "Chargement rapide, ressources optimisées, respectueux du SEO",
          icon: "tabler:rocket",
        },
      ],
    },
    technologies: {
      title: "Mes technologies",
    },
    features: {
      tagline: "Qu'est-ce que vous obtenez ?",
      title: "Étapes de développement d'un site Web",
      subtitle: "Je transforme des idées en sites Web fonctionnels : portfolios, pages de destination, projets SaaS et blogs dotés de technologies modernes et performantes.",

      items: [
        {
          title: "Planification et analyse",
          description: "Nous discutons des objectifs de votre projet, de ses fonctionnalités et de votre public cible afin que chaque détail soit au service du résultat.",
          icon: "tabler:list-check",
        },
        {
          title: "Conception et prototype",
          description: "Je crée des maquettes visuelles et des prototypes d'interfaces à l'aide de Tailwind et Bootstrap, en me concentrant sur l'UX/UI et la marque du client.",
          icon: "tabler:devices",
        },
        {
          title: "Développement et intégration",
          description: "Je programme le frontend et le backend en Astro, Next.js et Python, je connecte des bases de données, des API et le multilingue (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Tests et optimisation",
          description: "Je vérifie le site sur tous les appareils, j'optimise la vitesse de chargement et je corrige les erreurs pour un fonctionnement stable et un taux de conversion élevé.",
          icon: "tabler:rocket",
        },
        {
          title: "Lancement et assistance",
          description: "J'héberge le projet, je connecte les outils d'analyse et le SEO, et j'assure également le support et les possibilités de mise à l'échelle future.",
          icon: "tabler:settings",
        },
        {
          title: "Approche individuelle",
          description: "Chaque projet est personnalisé selon les besoins spécifiques du client, avec une architecture flexible et la possibilité d'ajouter de nouvelles fonctionnalités.",
          icon: "tabler:bulb",
        },
      ],
    },
    content: {
      tagline: "À l'intérieur du projet",
      title: "Structure et fonctionnalités de vos projets Web",
      imageAlt: "Illustration du projet",
      additionalTitle: "Nous utilisons des technologies modernes",
      additionalDescription: "Nous créons des sites Web avec une performance élevée, une simplicité d'utilisation et une scalabilité.",
      items: [
        {
          title: "Construit sur Astro et Next.js",
          description:
            "Nous utilisons des générateurs de sites statiques modernes et les frameworks React pour un frontend rapide, efficace et interactif.",
        },
        {
          title: "Backend en Python/Django",
          description:
            "Nous fournissons un serveur fiable et évolutif, une API et des bases de données pour tout type de projet : du portfolio au SaaS.",
        },
        {
          title: "Stylisation avec Tailwind et Bootstrap",
          description:
            "Nous créons un design adaptatif et moderne avec une mise en page flexible, une personnalisation facile et un système visuel cohérent.",
        },
        {
          title: "Compatibilité entre navigateurs",
          description:
            "Les sites s'affichent correctement dans tous les navigateurs et sur tous les appareils populaires, offrant une expérience utilisateur stable pour tous.",
        },
      ],
    },
    content2: {
      additionalDescription: "Flexibilité et adaptation à vos besoins",
      items: [
        {
          title: "Haut niveau de personnalisation",
          description:
            "Nous adaptons l'architecture du projet aux exigences individuelles afin que le site corresponde pleinement à l'image de marque et aux objectifs commerciaux.",
        },
        {
          title: "Support multilingue (i18n)",
          description:
            "Nous réalisons des sites avec support de plusieurs langues : français, anglais, russe, ukrainien — des versions linguistiques facilement extensibles.",
        },
        {
          title: "Design entièrement réactif",
          description:
            "Optimisé pour mobile, tablette et bureau avec une expérience utilisateur cohérente et fluide.",
        },
        {
          title: "Intégration de médias et de contenus",
          description:
            "Nous intégrons des images, des vidéos, des curseurs et des blocs interactifs pour augmenter l'engagement des utilisateurs et faciliter la gestion du contenu.",
        },
      ],
    },
    content3: {
      additionalDescription: "Développement et évolution du projet",
      items: [
        {
          title: "Engagement accru des utilisateurs",
          description:
            "Les éléments interactifs, la navigation facile et les mises en page visuellement attrayantes aident à fidéliser votre audience plus longtemps.",
        },
        {
          title: "Améliorations régulières",
          description:
            "Maintien de la pertinence du projet grâce aux nouvelles technologies, aux mises à jour et à l'optimisation des fonctionnalités.",
        },
        {
          title: "Utilisation efficace des ressources",
          description:
            "Nous faisons gagner du temps et de l'énergie au client en utilisant des technologies prêtes à l'emploi et des solutions intégrées au lieu de tout développer à partir de zéro.",
        },
        {
          title: "Support et accompagnement",
          description:
            "Nous aidons le client avec l'administration du site Web, l'évolution et les fonctionnalités supplémentaires pour que le projet grandisse avec l'entreprise.",
        },
      ],
    },
    steps: {
      title: "Étapes de commande de votre site Web",
      imageAlt: "Illustration du flux de travail",
      items: [
        {
          title: "Étape 1 : <span class=\"font-medium\">Discussion du projet</span>",
          description:
            "Nous précisons les objectifs, les fonctionnalités et les exigences du site afin que le plan de développement corresponde pleinement à vos attentes.",
          icon: "tabler:users",
        },
        {
          title: "Étape 2 : <span class=\"font-medium\">Prototype et design</span>",
          description:
            "Nous créons des maquettes d'interface et des concepts visuels à l'aide de Tailwind et Bootstrap, et nous validons avec vous le style et l'UX.",
          icon: "tabler:device-desktop",
        },
        {
          title: "Étape 3 : <span class=\"font-medium\">Développement et intégration</span>",
          description:
            "Nous programmons le frontend et le backend (Astro, Next.js, Python/Django), nous connectons les bases de données, les API et le multilingue (i18n).",
          icon: "tabler:code",
        },
        {
          title: "Étape 4 : <span class=\"font-medium\">Tests et lancement</span>",
          description:
            "Nous vérifions le site sur tous les appareils, nous optimisons la vitesse, nous connectons le SEO et les outils d'analyse pour que le site soit prêt à l'emploi.",
          icon: "tabler:rocket",
        },
        {
          title: "Étape 5 : <span class=\"font-medium\">Support et développement</span>",
          description:
            "Nous assurons le suivi du projet, en ajoutant de nouvelles fonctionnalités et en faisant évoluer le site au fur et à mesure que votre entreprise grandit.",
          icon: "tabler:settings",
        },
      ],
    },
    features2: {
      title: "Technologies et outils clés",
      subtitle: "Composants et frameworks couramment utilisés pour le développement de sites Web modernes",
      tagline: "Technologies",
      items: [
        {
          title: "Frameworks Frontend",
          description: "Astro et Next.js pour un développement front-end rapide et interactif avec support des pages statiques et dynamiques.",
          icon: "flat-color-icons:template",
        },
        {
          title: "Stylisation",
          description: "Tailwind CSS et Bootstrap pour un design réactif, moderne et compatible avec tous les navigateurs avec une personnalisation flexible.",
          icon: "flat-color-icons:gallery",
        },
        {
          title: "Backend",
          description: "Python et Django/Flask pour la création de serveurs robustes, d'API, l'intégration de bases de données et la logique métier.",
          icon: "flat-color-icons:approval",
        },
        {
          title: "Gestion de contenu",
          description: "Solutions Markdown, JSON et CMS pour une gestion facile des textes, des images et des médias sur le site.",
          icon: "flat-color-icons:document",
        },
        {
          title: "SEO et analyses",
          description: "Outils SEO, Google Analytics et mesures de performance pour améliorer la visibilité et suivre les résultats.",
          icon: "flat-color-icons:advertising",
        },
        {
          title: "E-commerce et paiements",
          description: "Intégration de systèmes de paiement et création de pages de tarifs et de produits pour les sites à vocation commerciale.",
          icon: "flat-color-icons:currency-exchange",
        },
        {
          title: "Retours et communication",
          description: "Formulaires de contact intégrés, commentaires et blocs de témoignages pour interagir avec les clients et les utilisateurs.",
          icon: "flat-color-icons:voice-presentation",
        },
        {
          title: "Contacts et formulaires",
          description: "Formulaires de contact, inscriptions et widgets interactifs pour une communication rapide avec les visiteurs du site.",
          icon: "flat-color-icons:business-contact",
        },
        {
          title: "Stockage de données",
          description: "Bases de données SQL/NoSQL, solutions cloud et API pour stocker et traiter les informations de manière fiable.",
          icon: "flat-color-icons:database",
        },
      ],
    },
    blogLatestPosts: {
      title: "Ressources et cas pratiques utiles",
      information: `Je publie des analyses de projets, des technologies et des approches qui aident à créer des sites Web rapides et efficaces.
  
Ce ne sont pas seulement des articles — c'est une expérience pratique appliquée à des projets réels.`,
    },
    faqs: {
      title: "Foire aux questions",
      subtitle:
        "Réponses aux questions les plus fréquentes sur le développement de sites Web, les technologies et le processus de travail.",
      tagline: "FAQ",
      items: [
        {
          title: "Combien coûte le développement d'un site Web ?",
          description:
            "Le coût dépend de la complexité du projet : nombre de pages, fonctionnalités, intégrations et design. Après discussion du projet, je propose la solution optimale adaptée à votre budget.",
        },
        {
          title: "De quoi ai-je besoin pour commencer ?",
          description:
            "Une connaissance de base en HTML, CSS et Node.js installés sur votre ordinateur, ainsi que l'envie de créer quelque chose de super.",
        },
        {
          title: "Combien de temps faut-il pour créer un site Web ?",
          description:
            "En moyenne, de quelques jours à quelques semaines. Les pages de destination simples sont réalisées rapidement, les projets plus complexes (avec API, bases de données, i18n) demandent plus de temps.",
        },
        {
          title: "Quelles technologies utilisez-vous ?",
          description:
            "Dans mon travail, j'utilise Astro, Next.js, Python (Django/Flask), Tailwind, Bootstrap, ainsi que des solutions de multilinguisme (i18n) et d'optimisation des performances.",
        },
        {
          title: "Est-il possible de créer un site Web multilingue ?",
          description:
            "Oui, j'implémente une prise en charge complète de plusieurs langues avec une commutation pratique et la possibilité de s'adapter à de nouveaux marchés.",
        },
        {
          title: "Le site sera-t-il adapté aux appareils mobiles ?",
          description:
            "Oui, tous les projets sont développés avec un design réactif et fonctionnent correctement sur les téléphones, tablettes et ordinateurs de bureau.",
        },
        {
          title: "Aidez-vous après le lancement du site ?",
          description:
            "Oui, il est possible de prendre en charge, d'améliorer les fonctionnalités, de mettre à jour et de faire évoluer le projet à mesure que votre entreprise se développe.",
        },
      ],
    },
    stats: {
      stats: [
        { title: "Téléchargements", amount: "132 K" },
        { title: "Étoiles", amount: "24,8 K" },
        { title: "Gabellet", amount: "10,3 K" },
        { title: "Utilisateurs", amount: "48,4 K" },
      ],
    },
    callToAction: {
      cta: {
        text: "Commander un site internet",
      },
      subtitle: {
        part1: "Prêt à lancer votre site Web ? Je vous aiderai à créer un projet rapide, moderne et entièrement personnalisé selon vos besoins.",
        part2: "Écrivez-moi dès maintenant et discutons de votre projet.",
      },
    },
  },
  blog: {
    title: "Blogue",
    subtitle:
      "Exemple de blog généré statiquement avec des actualités, des tutoriels, des ressources et d'autres contenus intéressants liés à AstroWind",
    backToBlog: "Retour au blog",
    tags: "Balises :",
    olderPosts: "Anciens articles",
    newerPosts: "Nouveaux articles",
    readingTime: "min de lecture",
  },

  personal_p: {
    cta: {
      title: "Travaillons ensemble",
      subtitle: "Prêt à réaliser votre projet : de l'idée à la production",
      cta: {
        text: "Contactez-moi",
        href: "/contact",
      },
    },

    metadata: {
      title: "Portfolio personnel du développeur",
    },

    links: [
      { text: "Accueil", href: "#" },
      { text: "À propos", href: "#about" },
      { text: "Résumé", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "GitHub", href: "https://github.com/VadimVBond" },
    ],

    actions: [
      { text: "Contactez-moi", href: "#contact" },
    ],

    hero: {
      title: "Vadim",
      tagline: "Développeur Fullstack",
      cta: {
        text: "Contactez-moi",
        href: "/contact",
      },
      subtitle: "Je développe des sites Web multilingues rapides, de la documentation et des applications Web. Spécialisé en Astro, Python (Flask, Django Ninja) et MkDocs.",
    },

    about: {
      title: "À propos de moi",
      paragraph1: "Je suis un développeur fullstack spécialisé dans la création de sites statiques rapides, de documentation et d'applications Web multilingues.",
      paragraph2: "Je travaille avec Astro, MkDocs, Flask et Django Ninja. L'objectif principal est la performance, la simplicité de l'architecture et le support pratique de l'i18n.",
      paragraph3: "Je développe des projets qui s'adaptent et évoluent facilement selon les langues et les besoins.",
      items: [
        { title: "GitHub", icon: "tabler:brand-github", href: "https://github.com/VadimVBond" },
        { title: "Documentation", icon: "tabler:book", href: "/docs" },
        { title: "Portfolio", icon: "tabler:briefcase", href: "#portfolio" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt: "Espace de travail du développeur",
      },
    },

    content: {
      portfolio: {
        title: "Mes projets",
        subtitle: "Projets réels axés sur la performance, l'i18n et la facilité de maintenance.",
        items: [
          {
            title: "Site multilingue MkDocs",
            description: "Documentation avec support de plusieurs langues, navigation dynamique et thème personnalisé.",
            role: "Configuration de la structure, i18n, personnalisation du thème, intégration de composants.",
          },
          {
            title: "Portfolio Astro avec i18n",
            description: "Site statique rapide avec support multilingue et structure optimisée.",
            role: "Développement de l'architecture, configuration de l'i18n, optimisation des performances.",
          },
          {
            title: "Site Flask avec localisation",
            description: "Site sur Flask avec support de plusieurs langues et contenu Markdown.",
            role: "Backend, i18n, structure du contenu, déploiement.",
          },
          {
            title: "Check-list interactive",
            description: "Application avec calculs, filtrage et export (JSON, Excel, PDF).",
            role: "Logique frontend, manipulation de données, export de fichiers.",
          },
        ],
        image: "",
      },
    },

    steps: {
      workExperience: [
        {
          title: "Freelance et projets personnels (actuellement)",
          description: "Développement de sites Web, documentation et applications Web en utilisant des technologies modernes.",
          icon: "tabler:briefcase",
        },
      ],
      education: [
        {
          title: "Auto-apprentissage et pratique",
          icon: "tabler:school",
        },
      ],
    },

    skills: {
      title: "Compétences",
      subtitle: "Technologies et outils que j'utilise au quotidien.",
      items: [
        {
          title: "Python (Flask, Django Ninja)",
          description: "Développement de la logique backend et de l'API.",
        },
        {
          title: "Astro / Next.js",
          description: "Création d'applications frontend rapides et de sites statiques.",
        },
        {
          title: "MkDocs (Material)",
          description: "Création de documentation avec support i18n.",
        },
        {
          title: "i18n / localisation",
          description: "Mise en œuvre d'interfaces multilingues.",
        },
        {
          title: "Tailwind / Bootstrap",
          description: "Mise en page réactive et moderne.",
        },
        {
          title: "JSON / Markdown",
          description: "Architecture orientée contenu.",
        },
      ],
    },

    testimonials: {
      title: "Projets",
      subtitle: "Expérience pratique de développement",
      items: [],
    },

    portfolio: {
      callToAction: {
        title: "Prêt à discuter du projet",
        subtitle: "Contactez-moi pour une collaboration",
        action: "Contactez-moi",
        button: "Contactez-moi",
        href: "/contact",
      },
    },

    blog: {
      title: "Blog",
      information: "Articles sur le développement, l'i18n, la documentation et l'architecture des projets.",
    },
  },
};



