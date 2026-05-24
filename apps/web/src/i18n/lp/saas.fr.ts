// ─── SaaS Landing Page — FR ────────────────────────────────────────

import type { LandingSaas } from './types';

const saas: LandingSaas = {
  metadata: {
    title: 'Page de Renvoi SaaS',
  },

  header: {
    loginButton: 'Connexion',
    signupButton: 'S\'inscrire',
  },

  hero: {
    tagline: 'Démo Web SaaS',
    title: 'Simplifiez le design web avec Astrowind : <br /> votre compagnon <span class="text-accent dark:text-white highlight">SaaS</span> ultime<br />',
    subtitle: '<span class="hidden sm:inline">Élevez votre processus de création de sites web avec les solutions de <span class="font-semibold">AstroWind</span>.</span> Fusionnez la puissance d\'Astro 3.0 et Tailwind CSS.',
    cta: 'Commencer',
    cta2: 'En savoir plus',
    imageAlt: 'Image Hero AstroWind',
  },

  features: {
    title: 'Pourquoi choisir AstroWind ?',
    subtitle: "Chacune des fonctionnalités suivantes renforce la proposition de valeur d'AstroWind.",
    items: [
      {
        title: 'Intégration d\'Astro 3.0 et Tailwind CSS',
        description: 'Offre une combinaison puissante qui améliore à la fois le processus de développement et l\'expérience utilisateur.',
        icon: 'tabler:layers-union',
      },
      {
        title: 'Design polyvalent pour les startups',
        description: "Personnalisez facilement AstroWind pour s'harmoniser avec l'identité de votre entreprise.",
        icon: 'tabler:artboard',
      },
      {
        title: 'Personnalisation sans effort',
        description: 'Idéal pour les professionnels créatifs cherchant à mettre en valeur leur expertise avec des ajustements intuitifs.',
        icon: 'tabler:writing',
      },
      {
        title: 'Pages de renvoi optimisées et blogs engageants',
        description: "Les pages sont stratégiquement conçues pour captiver les visiteurs et provoquer des actions spécifiques.",
        icon: 'tabler:podium',
      },
      {
        title: 'Temps de chargement rapides',
        description: "L'utilisation d'Astro 3.0 garantit un chargement rapide. Le code suit les meilleures pratiques.",
        icon: 'tabler:rocket',
      },
      {
        title: 'Structure optimisée pour le SEO',
        description: "Suit les meilleures pratiques SEO avec un code propre et un rendu rapide.",
        icon: 'tabler:eyeglass',
      },
    ],
  },

  useCases: {
    title: 'Cas d\'utilisation',
    subtitle: "Découvrez comment le modèle AstroWind sert de solution idéale pour divers cas d'utilisation.",
    items: [
      {
        contentTitle: 'Histoires de réussite de startups : <br /><span class="text-2xl">Lancement avec AstroWind</span>',
        descriptionLabel: 'Description :',
        description: "Êtes-vous une startup avec de grands rêves ? Notre modèle forge une présence en ligne sans faille.",
        benefitsLabel: 'Avantages :',
        benefits: "Permettez aux startups de créer rapidement des sites professionnels. <br /> Faites une première impression mémorable.",
        imageAlt: 'Image Startup',
      },
      {
        contentTitle: 'Démonstration SaaS : <br /><span class="text-2xl">Fluidifier l\'expérience utilisateur</span>',
        descriptionLabel: 'Description :',
        description: "Pour les entreprises SaaS, l'expérience utilisateur est essentielle. L'intégration garantit une expérience optimale.",
        benefitsLabel: 'Avantages :',
        benefits: "Garantir un design cohérent et centré sur l'utilisateur. <br /> Encourager l'action avec des boutons judicieusement placés.",
        imageAlt: 'Image Entreprise SaaS',
      },
      {
        contentTitle: 'Portefeuilles créatifs : <br /><span class="text-2xl">Mise en avant de votre travail</span>',
        descriptionLabel: 'Description :',
        description: "Votre portfolio est votre chef-d'œuvre. AstroWind est votre toile pour les designers et créateurs.",
        benefitsLabel: 'Avantages :',
        benefits: "Sert de toile de fond captivante pour mettre en valeur votre travail. <br /> Donne la priorité aux visuels.",
        imageAlt: 'Image Portfolio',
      },
      {
        contentTitle: 'Croissance des petites entreprises : <br /><span class="text-2xl">Convertir les visiteurs en clients</span>',
        descriptionLabel: 'Description :',
        description: "Un site web bien conçu peut changer la donne pour les petites entreprises en captivant les visiteurs.",
        benefitsLabel: 'Avantages :',
        benefits: "Présentez votre entreprise de façon polie. <br /> Assurez une navigation fluide, réduisant le taux de rebond.",
        imageAlt: 'Image Small Business',
      },
    ],
  },

  pricing: {
    title: 'Plans tarifaires flexibles',
    plans: [
      {
        title: 'Gratuit',
        subtitle: 'Accès aux fonctionnalités de base',
        price: '0',
        period: '/ mois',
        ctaText: 'Commencer gratuitement',
      },
      {
        title: 'Pro',
        subtitle: 'Modèles Premium et personnalisation',
        price: '15',
        period: '/ mois',
        ctaText: 'Passer au niveau Pro',
        ribbonTitle: 'Populaire',
      },
      {
        title: 'Entreprise',
        subtitle: 'Solutions sur mesure',
        price: '45',
        period: '/ mois',
        ctaText: 'Débloquer Entreprise',
      },
    ],
  },

  faqs: {
    title: 'Foire Aux Questions',
    items: [
      {
        title: 'AstroWind est-il compatible avec Astro et Tailwind CSS ?',
        description: 'Oui, AstroWind est conçu pour être compatible avec les versions les plus récentes de ces deux technologies.',
      },
      {
        title: 'Puis-je l\'utiliser pour des projets commerciaux ?',
        description: "Absolument ! AstroWind est polyvalent et adapté à tout type de projets.",
      },
      {
        title: 'Quelles connaissances en codage sont requises ?',
        description: 'Bien qu\'une certaine familiarité soit utile, des options simples permettent aux débutants de créer de superbes sites.',
      },
      {
        title: 'Un service client est-il disponible ?',
        description: "Absolument, notre service client dédié est là pour vous aider à surmonter les défis rencontrés.",
      },
    ],
  },

  contact: {
    title: 'Contactez-nous',
    subtitle: "Des questions ? N'hésitez pas à nous contacter !",
    ctaText: 'Nous contacter',
    items: [
      {
        title: 'Nous écrire',
        description: 'contact@support.com',
        icon: 'tabler:mail',
      },
      {
        title: 'Nous appeler',
        description: '+1 (234) 567-890',
        icon: 'tabler:headset',
      },
      {
        title: 'Nous suivre',
        description: '@example',
        icon: 'tabler:brand-twitter',
      },
    ],
  },

  blog: {
    title: "Restez informé",
    information: 'Explorez nos articles et tutoriels sur le développement web.',
  },
};

export default saas;
