// ─── LP Types ──────────────────────────────────────────────────────
// Shared type definitions for all landing page i18n files

export interface LpFaqItem {
  title: string;
  description: string;
  icon?: string;
}

export interface LpFeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface LpPricingPlan {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  ctaText: string;
  ribbonTitle?: string;
}

export interface LpContactItem {
  title: string;
  description: string;
  icon: string;
}

export interface LpUseCaseItem {
  contentTitle: string;
  descriptionLabel: string;
  description: string;
  benefitsLabel: string;
  benefits: string;
  imageAlt: string;
}

// ─── SaaS LP ───────────────────────────────────────────────────────
export interface LandingSaas {
  metadata: { title: string };
  header: { loginButton: string; signupButton: string };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    imageAlt: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: LpFeatureItem[];
  };
  useCases: {
    title: string;
    subtitle: string;
    items: LpUseCaseItem[];
  };
  pricing: {
    title: string;
    plans: LpPricingPlan[];
  };
  faqs: {
    title: string;
    items: LpFaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    ctaText: string;
    items: LpContactItem[];
  };
  blog: {
    title: string;
    information: string;
  };
}

// ─── Startup LP ────────────────────────────────────────────────────
export interface LpServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface LpStatItem {
  title: string;
  amount: string;
}

export interface LpContactBlock {
  title: string;
  icon: string;
  ctaText: string;
}

export interface LandingStartup {
  metadata: { title: string };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
  };
  stats: {
    title: string;
    items: LpStatItem[];
  };
  services: {
    title: string;
    subtitle: string;
    items: LpServiceItem[];
  };
  features: {
    title: string;
    subtitle: string;
    items: LpFeatureItem[];
  };
  faqs: {
    title: string;
    items: LpFaqItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    items: LpContactBlock[];
  };
}

// ─── Mobile App LP ─────────────────────────────────────────────────
export interface LpGuideStep {
  title: string;
  description: string;
  icon: string;
}

export interface LpAppFeature {
  title: string;
  description: string;
  icon: string;
}

export interface LpTestimonial {
  testimonial: string;
  name: string;
  job: string;
}

export interface LandingMobileApp {
  metadata: { title: string };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    imageAlt: string;
  };
  guide: {
    title: string;
    subtitle: string;
    tagline: string;
    steps: LpGuideStep[];
  };
  mainFeatures: {
    sectionTitle: string;
    items: LpAppFeature[];
  };
  otherFeatures: {
    sectionTitle: string;
    items: LpAppFeature[];
  };
  stats: {
    title: string;
  };
  testimonials: {
    title: string;
    items: LpTestimonial[];
    ctaText: string;
  };
  faqs: {
    title: string;
    items: LpFaqItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

// ─── Simple Landing (stub pages) ───────────────────────────────────
export interface LandingSimple {
  metadata: { title: string };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    imageAlt: string;
  };
  comingSoon: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}
