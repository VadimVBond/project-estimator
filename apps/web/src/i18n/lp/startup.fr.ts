// ─── Startup Landing Page — FR ─────────────────────────────────────

import type { LandingStartup } from './types';

const startup: LandingStartup = {
  metadata: {
    title: 'Page d\'accueil Startup',
  },

  hero: {
    tagline: 'Démo Web Startup',
    title: 'Améliorez <span class="hidden sm:inline">la présence en ligne de</span> votre <span class="text-accent dark:text-white highlight">Startup</span> avec les modèles Astrowind',
    subtitle: 'Mettez-vous en valeur avec les modèles <span class="font-semibold">Astrowind</span>, votre chemin pour renforcer l\'empreinte numérique de votre startup, favoriser la crédibilité et élargir votre portée.',
    cta: 'Obtenir des modèles',
    cta2: 'En savoir plus',
  },

  stats: {
    title: 'Nos statistiques',
    items: [
      { title: 'Modèles', amount: '56' },
      { title: 'Téléchargements', amount: '182K' },
      { title: 'Évaluations', amount: '4.8' },
      { title: 'Clients satisfaits', amount: '116K' },
    ],
  },

  services: {
    title: 'Quels services proposons-nous ?',
    subtitle: 'Nous proposons une large gamme de modèles de sites web adaptés à divers secteurs et objectifs (entreprise, portfolio, e-commerce, blog, etc.).',
    items: [
      {
        title: 'Instructions de téléchargement',
        description: 'Offrez des instructions claires sur la manière de télécharger et d\'installer les modèles achetés sur diverses plateformes.',
        icon: 'flat-color-icons:document',
      },
      {
        title: 'Démo et aperçus',
        description: 'Fournissez des démos et des aperçus interactifs permettant aux clients de voir le rendu de leur modèle avant d\'acheter.',
        icon: 'flat-color-icons:template',
      },
      {
        title: 'Support technique',
        description: 'Fourniture d\'un support client pour tout problème technique lié aux modèles.',
        icon: 'flat-color-icons:voice-presentation',
      },
    ],
  },

  features: {
    title: 'Fonctionnalités principales de nos modèles',
    subtitle: 'Possèdent plusieurs caractéristiques clés pour répondre efficacement aux besoins des startups et des entrepreneurs.',
    items: [
      {
        title: 'Design moderne et professionnel',
        description: 'Ont un design contemporain qui reflète les tendances actuelles et donne une impression professionnelle.',
        icon: 'tabler:artboard',
      },
      {
        title: 'Responsive et adapté aux mobiles',
        description: 'S\'adaptent parfaitement aux différentes tailles d\'écran et aux appareils.',
        icon: 'tabler:picture-in-picture',
      },
      {
        title: 'Personnalisation',
        description: 'Facilement personnalisables, permettant aux utilisateurs d\'adapter le design, les couleurs et la typographie à leur identité.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Temps de chargement rapides',
        description: 'Optimisés pour la vitesse afin de garantir une expérience utilisateur fluide.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Optimisation pour les moteurs de recherche (SEO)',
        description: 'Intégrez les meilleures pratiques SEO dans la structure du modèle et le code.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'Compatibilité',
        description: 'Les modèles fonctionnent parfaitement avec divers systèmes de gestion de contenu.',
        icon: 'tabler:plug-connected',
      },
    ],
  },

  faqs: {
    title: 'Foire aux Questions',
    items: [
      {
        title: 'Que sont les modèles de landing page ?',
        description: 'Ce sont des mises en page web prédéfinies spécifiquement créées pour servir de base à la création de pages de destination efficaces.',
      },
      {
        title: 'Pourquoi devrais-je utiliser un modèle ?',
        description: 'Parmi les avantages, citons le fait qu\'ils fournissent une structure prête à l\'emploi, vous faisant gagner un temps précieux.',
      },
      {
        title: 'Puis-je prévisualiser les modèles avant d\'acheter ?',
        description: 'Oui, vous pouvez les prévisualiser. Il y a un bouton "Démo" pour chaque modèle.',
      },
      {
        title: 'Ai-je besoin de compétences techniques ?',
        description: 'Des compétences techniques avancées ne sont pas requises, mais une compréhension de base de la navigation web est utile.',
      },
      {
        title: 'Puis-je utiliser le modèle sur plusieurs sites ?',
        description: 'Non, le modèle est fourni avec une licence à usage unique.',
      },
      {
        title: 'Et si j\'ai besoin d\'aide pour la personnalisation ?',
        description: "Les modèles fournissent un guide détaillé. Si vous avez encore des doutes, notre service client est là.",
      },
    ],
  },

  cta: {
    title: 'Astro + <br class="block sm:hidden" /><span class="sm:whitespace-nowrap"> Tailwind CSS</span>',
    subtitle: 'Soyez très surpris par ces énormes faux chiffres sur cette page. <br class="hidden md:inline" />Ne perdez plus de temps ! :P',
    buttonText: 'Obtenir le modèle',
  },

  contact: {
    title: 'Faites-nous savoir comment nous pouvons aider',
    subtitle: "Nous sommes là pour vous aider et répondre à toutes vos questions.",
    items: [
      { title: 'Téléphone', icon: 'tabler:phone', ctaText: 'Appelez-nous' },
      { title: 'Email', icon: 'tabler:mail', ctaText: 'Écrivez-nous' },
      { title: 'Chat avec les ventes', icon: 'tabler:message-circle', ctaText: 'Démarrer le chat' },
      { title: 'Chat avec le support', icon: 'tabler:message-circle', ctaText: 'Démarrer le chat' },
    ],
  },
};

export default startup;
