// ─── Mobile App Landing Page — FR ──────────────────────────────────

import type { LandingMobileApp } from './types';

const mobileApp: LandingMobileApp = {
  metadata: {
    title: 'Page d\'accueil Application Mobile',
  },

  hero: {
    tagline: 'Démo Web Application Mobile',
    title: 'Application <span class="text-accent dark:text-white highlight">AstroWind</span> : <br /> la création de sites professionnels simplifiée',
    subtitle: '<span class="hidden sm:inline">Libérez une créativité sans limites : votre passerelle vers un design innovant.</span> Téléchargez maintenant et sublimez vos projets.',
    cta: 'Télécharger l\'App',
    cta2: 'En savoir plus',
    imageAlt: 'Image Hero AstroWind',
  },

  guide: {
    title: 'Comment utiliser notre application ?',
    subtitle: 'Fatigué de passer des heures à créer des documents à partir de zéro ? Notre application offre une solution innovante avec de nombreux modèles.',
    tagline: 'Guide étape par étape',
    steps: [
      {
        title: 'Télécharger et installer l\'application',
        description: "Commencez par télécharger notre application intuitive depuis votre boutique d\'applications.",
        icon: 'tabler:square-number-1',
      },
      {
        title: 'S\'inscrire',
        description: 'Créez votre compte pour accéder à toutes nos fonctionnalités.',
        icon: 'tabler:square-number-2',
      },
      {
        title: 'Parcourir les modèles',
        description: 'Explorez notre collection variée de modèles de sites web.',
        icon: 'tabler:square-number-3',
      },
      {
        title: 'Prévisualiser et sélectionner',
        description: "Visualisez le potentiel de chaque modèle et choisissez celui qui correspond à vos besoins.",
        icon: 'tabler:square-number-4',
      },
    ],
  },

  mainFeatures: {
    sectionTitle: 'Fonctionnalités Principales',
    items: [
      { title: 'Interface intuitive', description: 'Une interface facile à naviguer pour trouver rapidement les modèles dont vous avez besoin.', icon: 'tabler:wand' },
      { title: 'Options de personnalisation', description: 'Outils inclus pour modifier le texte, les couleurs et les images.', icon: 'tabler:settings' },
      { title: 'Composants prêts à l\'emploi', description: 'Améliorez vos designs avec des graphismes et mises en page prêts à l\'emploi.', icon: 'tabler:template' },
      { title: 'Mode Aperçu', description: 'Visualisez chaque modèle avant de l\'acheter.', icon: 'tabler:carousel-horizontal' },
    ],
  },

  otherFeatures: {
    sectionTitle: 'Autres fonctionnalités',
    items: [
      { title: 'Accès Hors-Ligne', description: 'Téléchargez les modèles achetés pour une utilisation hors ligne.', icon: 'tabler:wifi-off' },
      { title: 'Stockage Cloud Sécurisé', description: 'Stockage cloud pour sécuriser et accéder à vos modèles partout.', icon: 'tabler:file-download' },
      { title: 'Mises à jour Régulières', description: 'Nouveaux modèles et fonctionnalités ajoutés continuellement.', icon: 'tabler:refresh' },
      { title: 'Liste de souhaits', description: "Créez une liste des modèles qui vous intéressent pour plus tard.", icon: 'tabler:heart' },
    ],
  },

  stats: {
    title: 'Statistiques de l\'application',
  },

  testimonials: {
    title: 'Ce que disent nos utilisateurs',
    items: [
      {
        testimonial: "Explorer et télécharger des modèles de sites web est devenu un jeu d'enfant. L'interface est intuitive.",
        name: 'Cary Kennedy',
        job: 'Réalisateur',
      },
      {
        testimonial: "Pouvoir prévisualiser et tester différents designs avant de m'engager m'a fait gagner beaucoup de temps.",
        name: 'Josh Wilkinson',
        job: 'Chef de Produit',
      },
      {
        testimonial: 'J\'ai pu télécharger et utiliser un modèle professionnel en quelques minutes.',
        name: 'Sidney Hansen',
        job: 'Décorateur',
      },
    ],
    ctaText: 'Lire plus de témoignages',
  },

  faqs: {
    title: 'Encore des doutes ?',
    items: [
      { title: 'Que fait cette application ?', description: 'Elle fournit une plateforme pour parcourir, acheter et télécharger des modèles de sites web.' },
      { title: 'Comment cela résout-il mon problème ?', description: 'Elle simplifie la création de sites web professionnels, vous faisant gagner du temps.' },
      { title: 'Est-ce compatible avec mon appareil ?', description: "Notre application est conçue pour être compatible avec de nombreux appareils (smartphone, tablette, ordinateur)." },
      { title: 'Qu\'est-ce qui la différencie des autres ?', description: 'Une interface conviviale, une vaste collection et une expérience fluide.' },
      { title: 'Y a-t-il des coûts ?', description: 'L\'application est gratuite, mais certains modèles peuvent être payants.' },
    ],
  },

  finalCta: {
    title: 'Accès immédiat à de superbes modèles',
    subtitle: 'Accédez à une variété de modèles, simplifiez votre créativité et boostez votre présence en ligne.',
    buttonText: 'Télécharger',
  },
};

export default mobileApp;
