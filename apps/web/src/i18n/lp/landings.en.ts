// ─── Simple Landing Pages — EN ─────────────────────────────────────
// Stub landing pages (lead-generation, click-through, product, sales, pre-launch, subscription)

import type { LandingSimple } from './types';

const landings: Record<string, LandingSimple> = {
  leadGeneration: {
    metadata: { title: 'Lead Generation Landing Page Demo' },
    hero: {
      tagline: 'Lead Generation Landing Demo',
      title: 'Effective Lead Generation Landing Page: Unlock the Secrets',
      subtitle: 'Discover the secrets to creating a Landing Page that turns curious visitors into eager leads. (Your Hero should grab attention instantly. Use a powerful headline that speaks directly to your target audience.)',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'Magnet attracting screws. Lead generation landing page demo',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },

  clickThrough: {
    metadata: { title: 'Click-through Landing Page Demo' },
    hero: {
      tagline: 'Click-through Demo',
      title: 'Click-through Landing Page: The Perfect Bridge to Conversion!',
      subtitle: 'Learn how to design a Click-Through Landing Page that seamlessly guides visitors to your main offer.',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'Click-through Landing Page Hero Image',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },

  product: {
    metadata: { title: 'Product Details Landing Page Demo' },
    hero: {
      tagline: 'Product Details Demo',
      title: 'Product Landing Page: Showcase with Precision and Passion!',
      subtitle: 'Step-by-step guide to designing a Landing Page that highlights every facet of your product or service.',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'A spotlight on a product. Product Details Landing Page Demo',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },

  sales: {
    metadata: { title: 'Sales Landing Page Demo' },
    hero: {
      tagline: 'Long-form Sales Demo',
      title: 'Long-form Sales: Sell with a Story: The Long-form Way!',
      subtitle: 'Dive deep into crafting a Landing Page that narrates, persuades, and converts.',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'Children telling a story. Long-form Sales Landing Page demo',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },

  preLaunch: {
    metadata: { title: 'Pre-Launch Landing Page' },
    hero: {
      tagline: 'Pre-launch Demo',
      title: 'Pre-launch Landing Page: Build the Hype Before the Big Reveal!',
      subtitle: 'Craft a tantalizing Coming Soon or Pre-Launch Landing Page that leaves visitors eagerly awaiting your launch.',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'Store with a Coming Soon sign. Pre-launch Landing Page',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },

  subscription: {
    metadata: { title: 'Subscription Landing Page Demo' },
    hero: {
      tagline: 'Subscription Landing Demo',
      title: 'Subscription Landing Page: Turn Casual Browsers into Loyal Subscribers!',
      subtitle: 'Unlock the formula for a Subscription Landing Page that keeps your audience coming back for more.',
      cta: 'Call to Action',
      cta2: 'Learn more',
      imageAlt: 'Ironic image associated with canceling a subscription. Subscription Landing Page Demo',
    },
    comingSoon: {
      title: 'Coming soon',
      subtitle: 'We are working on the content of these demo pages. You will see them very soon. Stay tuned!',
      buttonText: 'Get template',
    },
  },
};

export default landings;
