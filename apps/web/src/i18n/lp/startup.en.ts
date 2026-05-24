// ─── Startup Landing Page — EN ─────────────────────────────────────

import type { LandingStartup } from './types';

const startup: LandingStartup = {
  metadata: {
    title: 'Startup Landing Page',
  },

  hero: {
    tagline: 'Startup Web Demo',
    title: 'Improve <span class="hidden sm:inline">the online presence of</span> your <span class="text-accent dark:text-white highlight">Startup</span> with Astrowind templates',
    subtitle: 'Step into the spotlight with <span class="font-semibold">Astrowind</span> templates, your pathway to fortifying your startup\'s digital footprint, fostering credibility, and expanding your reach.',
    cta: 'Get templates',
    cta2: 'Learn more',
  },

  stats: {
    title: 'Our statistics',
    items: [
      { title: 'Templates', amount: '56' },
      { title: 'Downloads', amount: '182K' },
      { title: 'User Ratings', amount: '4.8' },
      { title: 'Satisfied Clients', amount: '116K' },
    ],
  },

  services: {
    title: 'What services do we provide?',
    subtitle: 'We offer a wide range of website templates that suit various industries and purposes such as business, portfolio, e-commerce, blog, etc.',
    items: [
      {
        title: 'Download and Installation Instructions',
        description: 'Offer clear instructions on how to download the purchased templates and install them on various website platforms or content management systems.',
        icon: 'flat-color-icons:document',
      },
      {
        title: 'Demo and Previews',
        description: 'Provide interactive demos and previews that allow customers to see how their chosen template will look and function before making a purchase.',
        icon: 'flat-color-icons:template',
      },
      {
        title: 'Technical Support',
        description: 'Providing customer support for any technical issues related to the templates or their implementation.',
        icon: 'flat-color-icons:voice-presentation',
      },
    ],
  },

  features: {
    title: 'Main features of our templates',
    subtitle: 'Possess several key characteristics to effectively cater to the needs of startups and entrepreneurs.',
    items: [
      {
        title: 'Modern and Professional Design',
        description: 'Have a contemporary design that reflects current design trends and gives a professional impression.',
        icon: 'tabler:artboard',
      },
      {
        title: 'Responsive and Mobile-Friendly',
        description: 'Adapt seamlessly to different screen sizes and devices to ensure a consistent experience.',
        icon: 'tabler:picture-in-picture',
      },
      {
        title: 'Customizability',
        description: 'Easily customizable, allowing users to adapt the design, colors, typography, and content to match their brand identity.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Fast Loading Times',
        description: 'Optimized for speed to ensure a smooth user experience and favorable search engine rankings.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Incorporate SEO best practices in template structure and code to improve visibility in search engine results.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'Compatibility',
        description: 'The templates work seamlessly across various content management systems and website builders.',
        icon: 'tabler:plug-connected',
      },
    ],
  },

  faqs: {
    title: 'Frequently Asked Questions',
    items: [
      {
        title: 'What are landing page templates?',
        description: 'Landing page templates are pre-designed web page layouts that are specifically created to serve as a foundation for building effective landing pages. These templates are designed to capture the attention of visitors and guide them towards a specific action or goal, such as signing up for a newsletter, making a purchase, or downloading a resource.',
      },
      {
        title: 'Why should I use a template?',
        description: 'Some of the advantages are that they provide a ready-to-use structure, saving you significant time. Are designed with user-friendliness in mind and provide a cost-effective alternative, saving you money while still delivering a quality result.',
      },
      {
        title: 'Can I preview templates before buying?',
        description: 'Yes, the templates allow you to preview them before making a purchase. There is a "Demo" button associated with each template.',
      },
      {
        title: 'Do I need technical skills to use a template?',
        description: 'Advanced technical skills are not required to use a template, but having a basic understanding of web navigation and familiarity with using online tools can still be beneficial. If you have more specific customization needs, you might need to consult guides or reach out to customer support for assistance.',
      },
      {
        title: 'Can I use the template on multiple websites?',
        description: 'No, the template comes with a single-use license, meaning you can use the template on one website or project only. Using the template on additional websites would require purchasing additional licenses.',
      },
      {
        title: 'What if I need help with customization?',
        description: "The templates provides a comprehensive step-by-step guide that walk you through the customization process. If you still have doubts, you can reach out to our customer support team. They can answer your questions, provide guidance on customization, and address any issues you're facing.",
      },
    ],
  },

  cta: {
    title: 'Astro + <br class="block sm:hidden" /><span class="sm:whitespace-nowrap"> Tailwind CSS</span>',
    subtitle: 'Be very surprised by these huge fake numbers you are seeing on this page. <br class="hidden md:inline" />Don\'t waste more time! :P',
    buttonText: 'Get template',
  },

  contact: {
    title: 'Let us know how we can help',
    subtitle: "We're here to help and answer any question you might have.",
    items: [
      { title: 'Phone', icon: 'tabler:phone', ctaText: 'Call us' },
      { title: 'Email', icon: 'tabler:mail', ctaText: 'Write to us' },
      { title: 'Chat with sales', icon: 'tabler:message-circle', ctaText: 'Start chatting' },
      { title: 'Chat with support', icon: 'tabler:message-circle', ctaText: 'Start chatting' },
    ],
  },
};

export default startup;
