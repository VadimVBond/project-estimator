// Copilot English translations
// This file contains all translations for the English language
// Sections are divided by comments for better navigation and Copilot hints
import { partners } from './pages/partners.en';
import saas from './lp/saas.en';
import startup from './lp/startup.en';
import mobileApp from './lp/mobile-app.en';
import landings from './lp/landings.en';

export default {
  nav: {
    partners: 'Partners'
  },

  partners,

  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};

export const en = {
  header: {
    homes: { title: 'Home', saas: 'Saas', startup: 'Startup', app: 'Download the application', personal: 'Private' },
    pages: { title: 'Pages', features: 'Functions (anchor link)', services: 'Services', pricing: 'Prices', aboutUs: 'About Us', contactUs: 'Contacts', terms: 'Terms', privacyPolicy: 'Privacy Policy' },
    landing: {
      title: 'Landing', leadGeneration: 'Lead generation', sales: 'Long sales', clickThrough: 'Clickable page', squeeze: 'Squeeze', product: 'Product (or service) information', comingSoon: 'Coming soon', gallery: 'Gallery',
      galleryHero: { tagline: 'Portfolio', title: 'Our projects', subtitle: 'Find out about our recent projects and success stories.', goBack: 'Back' },
    },
    blog: { title: 'Blog', blogList: 'List of articles', article: 'Article', mkdocs: 'MkDocs article', ai: 'AI in development', multi: 'Multi-architecture', twbs: 'Tailwind vs Bootstrap', autonav: 'Markdown navigation', articleMdx: 'Article (with MDX)', category: 'Category page', tag: 'Tag page' },
    brand: { firstName: 'Vadim', lastName: 'Bondarenko', stack: { ai: 'AI', web: 'Web', docs: 'Docs' } },
    widgets: 'Widgets', contact: 'Contacts', download: 'View CV',
  },
  footer: {
    product: { title: 'Product', features: 'Functions', security: 'Safety', team: 'Team', enterprise: 'Corporate', customerStories: 'Customer Stories', pricing: 'Prices', resources: 'Resources' },
    platform: { title: 'Platform', developerAPIs: 'API for developers', partners: 'Partners', atom: 'Atom', electron: 'Electron', astrowindDesktop: 'AstroWind Desktop' },
    support: { title: 'Support', docs: 'Documentation', communityForum: 'Community forum', professionalServices: 'Professional Services', skills: 'Skills', status: 'Status' },
    company: { title: 'Company', about: 'About the company', blog: 'Blog', careers: 'Career', press: 'Press', inclusion: 'Inclusivity', socialImpact: 'Social influence', shop: 'Shop' },
    legal: { terms: 'Terms', privacy: 'Confidentiality' },
  },
  index: {
    metadata: {
      title: 'Astrowind is a free template for creating websites with Astro + Tailwind CSS',
    },
    hero: {
      cta: 'View projects',
      cta2: 'Contact me',
      imageAlt: 'AstroWind Hero image',
      title: {
        part1: "AI in your projects -",
        part2: 'I create fast and modern web projects'
      },
      subtitle: 'Your ideas are turned into working websites with interactive features and multi-language support', description:
        'Suitable for startups, small businesses, portfolios, marketing sites and landing pages. I use Python, Astro, Next.js, Tailwind, Bootstrap and i18n to create modern web solutions.',
    },
    philosophy: {
      title: 'Philosophy',
      items: [
        {
          title: 'Simplicity',
          description: 'Clear, maintainable code with intuitive UX',
          icon: 'tabler:adjustments',
        },
        {
          title: 'Best Practices',
          description: 'Modular architecture, i18n-ready, modern frameworks',
          icon: 'tabler:circle-check',
        },
        {
          title: 'High Performance',
          description: 'Fast loading, optimized assets, SEO-friendly',
          icon: 'tabler:rocket',
        },
      ],
    },
    technologies: {
      title: 'My Technologies',
    },
    features: {
      tagline: 'What do you get',
      title: 'Stages of website development',
      subtitle:
        'I turn ideas into working websites: portfolios, landing pages, SaaS projects and blogs with modern technologies and high performance.',

      items: [
        {
          title: 'Planning and Analysis',
          description:
            'We discuss the goals of your project, functionality and target audience so that every detail works for the result.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Design and prototype',
          description:
            "I create visual mockups and prototypes of interfaces using Tailwind and Bootstrap, focusing on UX/UI and the client's brand.",
          icon: 'tabler:devices',
        },
        {
          title: 'Development and integration',
          description:
            'I program frontend and backend in Astro, Next.js and Python, connect databases, APIs and multilingual (i18n).',
          icon: 'tabler:code',
        },
        {
          title: 'Testing and optimization',
          description:
            'I check the site on all devices, optimize loading speed and correct errors for stable operation and high conversion.',
          icon: 'tabler:rocket',
        },
        {
          title: 'Launch and support',
          description:
            'I host the project, connect analytics and SEO, and also provide support and the possibility of further scaling.',
          icon: 'tabler:settings',
        },
        {
          title: 'Individual approach',
          description:
            "Each project is customized to the customer's unique needs, with a flexible architecture and a willingness to add new features.",
          icon: 'tabler:bulb',
        },
      ],
    },
    content: {
      tagline: 'Inside the project',
      title: "The structure and capabilities of your web projects",
      imageAlt: 'Project Illustration',
      additionalTitle: 'We use modern technologies',
      additionalDescription: 'We create websites with high performance, convenience and scalability.',
      items: [
        {
          title: 'Built on Astro and Next.js',
          description:
            'We use modern static site generators and React frameworks for a fast, efficient and interactive frontend.',
        },
        {
          title: 'Backend in Python/Django',
          description:
            'We provide a reliable and scalable server, API and databases for any project: from portfolio to SaaS.',
        },
        {
          title: 'Styling with Tailwind and Bootstrap',
          description:
            'We create adaptive and modern design with flexible layout, convenient customization and a consistent visual system.',
        },
        {
          title: 'Cross-browser compatibility',
          description:
            'Sites display correctly in all popular browsers and devices, providing a stable UX for all users.',
        },
      ],
    },
    content2: {
      additionalDescription: 'Flexibility and adaptation to your needs',
      items: [
        {
          title: 'High level of customization',
          description:
            'We customize the project architecture to individual requirements so that the site fully complies with the brand and business goals.',
        },
        {
          title: 'Multilingual support (i18n)',
          description:
            'We implement websites with support for several languages: Russian, English, Ukrainian - easily expandable language versions.',
        },
        {
          title: 'Fully responsive design',
          description:
            'Optimized for mobile, tablet and desktop with a consistent and seamless user experience.',
        },
        {
          title: 'Media and content integration',
          description:
            'We connect images, videos, slides and interactive blocks to increase user engagement and ease of content management.',
        },
      ],
    },
    content3: {
      additionalDescription: 'Development and scaling of the project',
      items: [
        {
          title: 'Increased user engagement',
          description:
            'Interactive elements, easy navigation, and visually appealing layouts help keep your audience engaged longer.',
        },
        {
          title: 'Regular improvements',
          description:
            'Maintaining the relevance of the project with new technologies, updates and optimization of functionality.',
        },
        {
          title: 'Efficient use of resources',
          description:
            'We save the client’s time and effort by using ready-made technologies and integrated solutions instead of developing from scratch.',
        },
        {
          title: 'Support and support',
          description:
            'We help the client with website administration, scaling and additional functions so that the project grows along with the business.',
        },
      ],
    },
    steps: {
      title: 'Stages of ordering your website',
      imageAlt: 'Workflow illustration',
      items: [
        {
          title: 'Step 1: <span class="font-medium">Project discussion</span>',
          description:
            'We clarify the goals, functionality and requirements for the site so that the development plan fully meets your goals.',
          icon: 'tabler:users',
        },
        {
          title: 'Step 2: <span class="font-medium">Prototype and design</span>',
          description:
            'We create interface layouts and visual concepts using Tailwind and Bootstrap, and coordinate the style and UX with you.',
          icon: 'tabler:device-desktop',
        },
        {
          title: 'Step 3: <span class="font-medium">Development and integration</span>',
          description:
            'We program frontend and backend (Astro, Next.js, Python/Django), connect databases, APIs and multilingual (i18n).',
          icon: 'tabler:code',
        },
        {
          title: 'Step 4: <span class="font-medium">Testing and launch</span>',
          description:
            'We check the site on all devices, optimize speed, connect SEO and analytical tools so that the site is ready for use.',
          icon: 'tabler:rocket',
        },
        {
          title: 'Step 5: <span class="font-medium">Support and development</span>',
          description:
            'We provide project support, adding new features and scaling the site as your business grows.',
          icon: 'tabler:settings',
        },
      ],
    },
    features2: {
      title: 'Core technologies and tools',
      subtitle: 'Frequently used components and frameworks for developing modern websites',
      tagline: 'Technologies',
      items: [
        {
          title: 'Frontend frameworks',
          description: 'Astro and Next.js for fast and interactive front-end development with support for static and dynamic pages.',
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Stylization',
          description: 'Tailwind CSS and Bootstrap for responsive, modern and cross-browser design with flexible customization.',
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Backend',
          description: 'Python and Django/Flask for creating robust servers, APIs, database integration and business logic.',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Content Management',
          description: 'Markdown, JSON and CMS solutions for easy management of text, images and multimedia on the site.',
          icon: 'flat-color-icons:document',
        },
        {
          title: 'SEO and analytics',
          description: 'SEO tools, Google Analytics and performance metrics to improve visibility and track performance.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'E-commerce and payments',
          description: 'Integration of payment systems and construction of pages with tariffs and products for sites with commercial functionality.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Feedback and communication',
          description: 'Built-in feedback forms, comments and review blocks for interaction with clients and users.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Contacts and forms',
          description: 'Contact forms, subscriptions and interactive widgets for quick communication with site visitors.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Data storage',
          description: 'SQL/NoSQL databases, cloud solutions and APIs for reliable storage and processing of information.',
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blogLatestPosts: {
      title: 'Useful materials and cases',
      information: `I publish project reviews, technologies, and approaches that help create fast and efficient websites.

      These aren't just articles—they're practical experiences applied to real projects.`,
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle:
        'Answers to popular questions about website development, technologies and work process.',
      tagline: 'FAQs',
      items: [
        {
          title: 'How much does website development cost?',
          description:
            'The cost depends on the complexity of the project: number of pages, functionality, integrations and design. After discussing the problem, I offer the optimal solution to suit your budget.',
        },
        {
          title: 'What do I need to get started?',
          description:
            'Basic knowledge of HTML, CSS and Node.js installed on your computer, and a desire to create something cool.',
        },
        {
          title: 'How long does it take to create a website?',
          description:
            'On average from several days to several weeks. Simple landing pages are done quickly, more complex projects (with API, databases, i18n) require more time.',
        },
        {
          title: 'What technologies do you use?',
          description:
            'In my work I use Astro, Next.js, Python (Django/Flask), Tailwind, Bootstrap, as well as solutions for multilingualism (i18n) and performance optimization.',
        },
        {
          title: 'Is it possible to make a multilingual website?',
          description:
            'Yes, I implement full support for several languages ​​with convenient switching and the ability to scale to new markets.',
        },
        {
          title: 'Will the site be adapted for mobile devices?',
          description:
            'Yes, all projects are developed with a responsive design and work correctly on phones, tablets and desktops.',
        },
        {
          title: 'Do you help after the site is launched?',
          description:
            'Yes, it is possible to support, improve functionality, update and scale the project as your business grows.',
        },
      ],
    },
    stats: {
      stats: [
        { title: 'Downloads', amount: '132 K' },
        { title: 'Stars', amount: '24.8 K' },
        { title: 'Forks', amount: '10.3 K' },
        { title: 'Users', amount: '48.4 K' },
      ],
    },
    callToAction: {
      cta: {
        text: 'Order a website',
      },
      subtitle: {
        part1: 'Ready to launch your website? I will help you create a fast, modern and fully customized project for your needs.',
        part2: "Write to me right now and let's discuss your project.",
      },
    },
  },
  blog: {
    title: 'Blog',
    subtitle:
      'Statically generated example blog with news, tutorials, resources and other interesting content related to AstroWind',
    backToBlog: 'Back to blog',
    tags: 'Tags:',
    olderPosts: 'Old articles',
    newerPosts: 'New articles',
    readingTime: 'min reading',
  },

  personal_p: {
    cta: {
      title: "Let's work together",
      subtitle: "Ready to realize your project: from idea to production",
      cta: {
        text: "Contact",
        href: "/contact",
      },
    },

    metadata: {
      title: "Personal developer portfolio",
    },

    links: [
      { text: "Home", href: "#" },
      { text: "About me", href: "#about" },
      { text: "Resume", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "GitHub", href: "https://github.com/VadimVBond" },
    ],

    actions: [
      { text: "Contact", href: "#contact" },
    ],

    hero: {
      title: "Vadim",
      tagline: "Fullstack developer",
      cta: {
        text: "Contact",
        href: "/contact",
      },
      subtitle: "Developing fast multilingual sites, documentation and web applications. Specializing in Astro, Python (Flask, Django Ninja) and MkDocs.",
    },

    about: {
      title: "About me",
      paragraph1: "I'm a fullstack developer specializing in creating fast static sites, documentation and multilingual web applications.",
      paragraph2: "Working with Astro, MkDocs, Flask and Django Ninja. Main focus is performance, simplicity of architecture and convenient i18n support.",
      paragraph3: "Developing projects that are easily scalable and adjustable to different languages and tasks.",
      items: [
        { title: "GitHub", icon: 'tabler:brand-github', href: "https://github.com/VadimVBond" },
        { title: "Documentation", icon: 'tabler:book', href: "/docs" },
        { title: "Portfolio", icon: 'tabler:briefcase', href: "#portfolio" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt: "Developer workspace",
      },
    },

    content: {
      portfolio: {
        title: "My projects",
        subtitle: "Real-world projects with focus on performance, i18n and maintainability.",
        items: [
          {
            title: "MkDocs multilingual site",
            description: "Documentation with support for multiple languages, dynamic navigation and custom theme.",
            role: "Setup structure, i18n, theme customization, component integration.",
          },
          {
            title: "Astro portfolio with i18n",
            description: "Fast static site with multilingual support and optimized structure.",
            role: "Architecture development, i18n setup, performance optimization.",
          },
          {
            title: "Flask site with localization",
            description: "Site on Flask with support for multiple languages and Markdown content.",
            role: "Backend, i18n, content structure, deployment.",
          },
          {
            title: "Interactive checklist",
            description: "App with calculations, filtering and export (JSON, Excel, PDF).",
            role: "Frontend logic, data work, file export.",
          },
        ],
        image: "",
      },
    },

    steps: {
      workExperience: [
        {
          title: "Freelance and pet-projects (present time)",
          description: "Development of sites, documentation and web applications using modern technologies.",
          icon: 'tabler:briefcase',
        },
      ],
      education: [
        {
          title: "Self-study and practice",
          icon: 'tabler:school',
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies and tools that I use in my work.",
      items: [
        {
          title: 'Python (Flask, Django Ninja)',
          description: 'Development of backend logic and API.',
        },
        {
          title: 'Astro/Next.js',
          description: 'Creation of fast front-end applications and static sites.',
        },
        {
          title: 'MkDocs (Material)',
          description: 'Creation of documentation with i18n support.',
        },
        {
          title: 'i18n/localization',
          description: 'Implementation of multilingual interfaces.',
        },
        {
          title: 'Tailwind/Bootstrap',
          description: 'Adaptive and modern layout.',
        },
        {
          title: 'JSON/Markdown',
          description: 'Content-centric architecture.',
        },
      ],
    },

    testimonials: {
      title: "Projects",
      subtitle: "Practical development experience",
      items: [],
    },

    portfolio: {
      callToAction: {
        title: "Ready to discuss the project",
        subtitle: "Contact me for cooperation",
        action: "Contact",
        button: "Contact",
        href: "/contact",
      },
    },

    blog: {
      title: "Blog",
      information: "Articles about development, i18n, documentation and project architecture.",
    },
  },
};


