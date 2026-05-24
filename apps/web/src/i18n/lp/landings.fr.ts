// ─── Simple Landing Pages — FR ─────────────────────────────────────
import type { LandingSimple } from './types';

const landings: Record<string, LandingSimple> = {
  leadGeneration: {
    metadata: { title: 'Démo Page Génération de Leads' },
    hero: {
      tagline: 'Démo Génération de Leads',
      title: 'Landing Page de Génération de Leads Efficace : Découvrez les Secrets',
      subtitle: 'Découvrez les secrets pour créer une Landing Page qui transforme les visiteurs curieux en leads qualifiés. (Votre Hero doit attirer l\'attention instantanément.)',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Aimant attirant des vis. Démo génération de leads',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },

  clickThrough: {
    metadata: { title: 'Démo Page Click-through' },
    hero: {
      tagline: 'Démo Click-through',
      title: 'Landing Page Click-through : Le Parfait Pont vers la Conversion !',
      subtitle: 'Apprenez à concevoir une Landing Page Click-through qui guide sans effort les visiteurs vers votre offre principale.',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Image Héros Page Click-through',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },

  product: {
    metadata: { title: 'Démo Page Détails Produit' },
    hero: {
      tagline: 'Démo Détails Produit',
      title: 'Landing Page Produit : Présentez avec Précision et Passion !',
      subtitle: 'Guide étape par étape pour concevoir une Landing Page qui met en valeur chaque facette de votre produit ou service.',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Pleins feux sur un produit. Démo Détails Produit',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },

  sales: {
    metadata: { title: 'Démo Page de Vente' },
    hero: {
      tagline: 'Démo Vente Long Format',
      title: 'Vente Long Format : Vendez avec une Histoire !',
      subtitle: 'Plongez dans la création d\'une Landing Page qui raconte, persuade et convertit.',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Enfants racontant une histoire. Démo Page de Vente',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },

  preLaunch: {
    metadata: { title: 'Page de Pré-lancement' },
    hero: {
      tagline: 'Démo Pré-lancement',
      title: 'Landing Page Pré-lancement : Créez l\'Attente Avant la Grande Révélation !',
      subtitle: 'Concevez une page Bientôt Disponible ou de Pré-lancement attrayante qui fait attendre vos visiteurs avec impatience.',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Magasin avec panneau Bientôt Disponible. Page de Pré-lancement',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },

  subscription: {
    metadata: { title: 'Démo Page d\'Abonnement' },
    hero: {
      tagline: 'Démo Abonnement',
      title: 'Landing Page d\'Abonnement : Transformez les Visiteurs en Abonnés Fidèles !',
      subtitle: 'Découvrez la formule d\'une page d\'abonnement qui incite votre audience à revenir.',
      cta: 'Appel à l\'action',
      cta2: 'En savoir plus',
      imageAlt: 'Image ironique liée à l\'annulation d\'abonnement. Démo Abonnement',
    },
    comingSoon: {
      title: 'Bientôt disponible',
      subtitle: 'Nous travaillons sur le contenu de ces pages démo. Vous les verrez très bientôt. Restez à l\'écoute !',
      buttonText: 'Obtenir le modèle',
    },
  },
};

export default landings;
