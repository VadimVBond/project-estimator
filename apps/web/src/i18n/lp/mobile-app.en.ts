// ─── Mobile App Landing Page — EN ──────────────────────────────────

import type { LandingMobileApp } from './types';

const mobileApp: LandingMobileApp = {
  metadata: {
    title: 'Mobile App Homepage',
  },

  hero: {
    tagline: 'Mobile App Web Demo',
    title: 'AstroWind <span class="text-accent dark:text-white highlight">App</span>: <br /> building professional websites made easy',
    subtitle: '<span class="hidden sm:inline">Unlock boundless creativity at your fingertips: your gateway to innovative design.</span> Download now and embark on a journey to elevate your projects like never before.',
    cta: 'Download App',
    cta2: 'Learn more',
    imageAlt: 'AstroWind Hero Image',
  },

  guide: {
    title: 'How to use our app?',
    subtitle: 'Tired of spending hours crafting documents from scratch? Our app offers an innovative solution. With a wide array of professionally designed templates, you can now create stunning documents in minutes. Explore our templates now and experience the difference.',
    tagline: 'Step-by-step guide',
    steps: [
      {
        title: 'Download and install the app',
        description: "Begin your journey by downloading our user-friendly app from your device's app store or our official website.",
        icon: 'tabler:square-number-1',
      },
      {
        title: 'Sign up',
        description: 'Create your account by providing the necessary information, enabling you to access our full range of features.',
        icon: 'tabler:square-number-2',
      },
      {
        title: 'Browse templates',
        description: 'Explore our diverse collection of website templates, categorized for easy navigation.',
        icon: 'tabler:square-number-3',
      },
      {
        title: 'Preview and select a template',
        description: "Visualize the potential of each template through previews, then choose the one that aligns best with your project's needs.",
        icon: 'tabler:square-number-4',
      },
    ],
  },

  mainFeatures: {
    sectionTitle: 'Main Features',
    items: [
      { title: 'User-friendly interface', description: 'An intuitive and easy-to-navigate interface that allows users to quickly browse and find the templates they need.', icon: 'tabler:wand' },
      { title: 'Personalization options', description: 'Include basic customization tools that let users modify text, colors, images, and other elements within the templates.', icon: 'tabler:settings' },
      { title: 'Ready-to-use components', description: 'Enhance your designs with ready-to-use elements like graphics, icons, and layouts, saving you time and boosting visual appeal.', icon: 'tabler:template' },
      { title: 'Preview Mode', description: 'Provide a preview of each template, allowing users to see how it looks before making a purchase.', icon: 'tabler:carousel-horizontal' },
    ],
  },

  otherFeatures: {
    sectionTitle: 'Other features',
    items: [
      { title: 'Offline Access', description: 'Offer the option for users to download purchased templates for offline use.', icon: 'tabler:wifi-off' },
      { title: 'Secure Cloud Storage', description: 'Provide cloud storage for purchased templates, ensuring users can access and back up their templates from anywhere securely.', icon: 'tabler:file-download' },
      { title: 'Regular Updates', description: 'Continuously add new templates and features to keep the app fresh and engaging for users.', icon: 'tabler:refresh' },
      { title: 'Wishlist', description: "Allow users to create a wishlist of templates they're interested in, making it easier for them to revisit and potentially purchase later.", icon: 'tabler:heart' },
    ],
  },

  stats: {
    title: 'Statistics of our app',
  },

  testimonials: {
    title: 'What our users say?',
    items: [
      {
        testimonial: "It's made exploring and downloading website templates a breeze. The interface is intuitive, and I had no trouble finding the perfect template for my project. It's an app that truly empowers users.",
        name: 'Cary Kennedy',
        job: 'Film director',
      },
      {
        testimonial: "The app's seamless download process and intuitive layout have made selecting templates an enjoyable experience. Being able to preview and experiment with different designs before committing has saved me time and ensured I get the perfect look for my website.",
        name: 'Josh Wilkinson',
        job: 'Product Manager',
      },
      {
        testimonial: 'I was able to download and use a professional website template within minutes. The step-by-step process and user-friendly interface made it easy for me to create a website that looks as if it was designed by a pro.',
        name: 'Sidney Hansen',
        job: 'Decorator',
      },
    ],
    ctaText: 'Read more testimonials',
  },

  faqs: {
    title: 'Still have some doubts?',
    items: [
      { title: 'What does this app do?', description: 'This app provides a platform for you to easily browse, purchase, download, and use a wide range of website templates for your projects.' },
      { title: 'How can this app solve my problem?', description: 'This app streamlines the process of finding and implementing professional website designs, saving you time and effort in creating visually appealing and functional websites.' },
      { title: 'Is it available for my device?', description: "Our app is designed for compatibility across various devices and platforms, ensuring accessibility whether you're using a smartphone, tablet, or computer." },
      { title: 'What makes this app different from others?', description: 'Our app stands out for its user-friendly interface, extensive template collection, and seamless integration of the purchasing and downloading process, making it highly efficient.' },
      { title: 'Are there any costs involved?', description: 'While the app itself may be free to download, there may be costs associated with purchasing specific templates based on your preferences and project requirements.' },
    ],
  },

  finalCta: {
    title: 'Instant access to beautiful templates',
    subtitle: 'Access a variety of stunning templates, simplify your creative process, and elevate your online presence.',
    buttonText: 'Download App',
  },
};

export default mobileApp;
