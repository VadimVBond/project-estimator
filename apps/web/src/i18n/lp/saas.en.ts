// ─── SaaS Landing Page — EN ────────────────────────────────────────
// All text content extracted from /homes/saas.astro

import type { LandingSaas } from './types';

const saas: LandingSaas = {
  metadata: {
    title: 'Saas Landing Page',
  },

  header: {
    loginButton: 'Login',
    signupButton: 'Sign Up',
  },

  hero: {
    tagline: 'SaaS Web Demo',
    title: 'Simplify web design with Astrowind: <br /> your ultimate <span class="text-accent dark:text-white highlight">SaaS</span> companion<br />',
    subtitle: '<span class="hidden sm:inline">Elevate your website creation process with <span class="font-semibold">AstroWind</span>\'s SaaS solutions.</span> Seamlessly blend the power of Astro 3.0 and Tailwind CSS to craft websites that resonate with your brand and audience.',
    cta: 'Get Started',
    cta2: 'Learn more',
    imageAlt: 'AstroWind Hero Image',
  },

  features: {
    title: 'Why choose AstroWind?',
    subtitle: "Each of the following features enhances AstroWind's value proposition.",
    items: [
      {
        title: 'Integration of Astro 3.0 and Tailwind CSS',
        description: 'Offers a powerful combination that enhances both the development process and the end-user experience. Also, allows to build dynamic and visually stunning websites with optimized performance.',
        icon: 'tabler:layers-union',
      },
      {
        title: 'Versatile design for startups, small businesses, and more',
        description: "Easily customize AstroWind to harmonize with the unique branding and identity of your venture. AstroWind's versatile design adapts to suit your needs.",
        icon: 'tabler:artboard',
      },
      {
        title: 'Effortless customization for portfolios and marketing sites',
        description: 'With intuitive customization, easily showcase portfolio pieces, case studies, project highlights, and relevant content. Ideal for creative professionals and businesses looking to highlight their expertise.',
        icon: 'tabler:writing',
      },
      {
        title: 'Optimized landing pages and engaging blogs',
        description: "Landing pages are strategically designed to captivate visitors and prompt specific actions. Additionally, the blog creation feature empowers sharing insights, engaging the audience.",
        icon: 'tabler:podium',
      },
      {
        title: 'Fast loading times and production-ready code',
        description: "Using Astro 3.0 ensures fast loading and seamless rendering, enhancing browsing. The code follows best practices, improving user experience, SEO, and reducing bounce rates.",
        icon: 'tabler:rocket',
      },
      {
        title: 'SEO-optimized structure for enhanced visibility',
        description: "Follows SEO best practices with clean code, semantic HTML markup, and fast loading, enhancing search engine rankings. AstroWind's SEO structure ensures visibility to potential customers and clients.",
        icon: 'tabler:eyeglass',
      },
    ],
  },

  useCases: {
    title: 'Use cases',
    subtitle: "Discover how AstroWind's versatile template serves as the ideal solution for various use cases, providing tailored solutions to drive success.",
    items: [
      {
        contentTitle: 'Startup success stories: <br /><span class="text-2xl">Launching with AstroWind</span>',
        descriptionLabel: 'Description:',
        description: "Are you a startup with big dreams? AstroWind propels your success. Our template forges a seamless online presence, attracting investors and customers from day one. Astro 3.0 and Tailwind CSS ensure striking, responsive sites, leaving lasting impressions. Countless startups leverage AstroWind to kickstart their journey and resonate with audiences.",
        benefitsLabel: 'Benefits:',
        benefits: "Allow startups to quickly create professional websites without investing extensive time and resources. <br /> Make a memorable first impression with visually appealing design elements that highlight your startup's unique value proposition. <br /> Ensures your website looks stunning and works well on all devices. <br /> Engage potential investors and customers with engaging content, clear messaging, and intuitive navigation.",
        imageAlt: 'Startup Image',
      },
      {
        contentTitle: 'SaaS showcase: <br /><span class="text-2xl">Streamlining user experience</span>',
        descriptionLabel: 'Description:',
        description: "For SaaS businesses, user experience is key. AstroWind enhances showcasing SaaS solutions intuitively. The template's Astro 3.0 and Tailwind CSS integration guarantees user-friendly experience, mirroring your software's efficiency. Customize pages to communicate SaaS value and solutions for your audience.",
        benefitsLabel: 'Benefits:',
        benefits: "Ensuring a cohesive and user-centric design for your SaaS website. <br /> Effectively communicate complex SaaS features through visual aids, animations, and interactive elements. <br /> Prioritize user needs and pain points through well-structured layouts and clear navigation. <br /> Encourage visitors to take action with strategically placed CTAs. <br /> Ensures your SaaS website works seamlessly across all devices.",
        imageAlt: 'SaaS Businesses Image',
      },
      {
        contentTitle: 'Creative portfolios: <br /><span class="text-2xl">Highlighting your work</span>',
        descriptionLabel: 'Description:',
        description: "Your portfolio is your masterpiece, and AstroWind is your canvas. Whether you're a designer, photographer, artist, or any other creative professional, AstroWind empowers you to showcase your work with elegance and sophistication. Tailored to highlight your creative projects, AstroWind's templates offer a visually immersive experience that lets your portfolio shine.",
        benefitsLabel: 'Benefits:',
        benefits: "Serve as a captivating backdrop to showcase your creative work, capturing attention and leaving a lasting impression. <br /> Tailor your portfolio to reflect your unique style and artistic vision. <br /> Prioritizes visuals, allowing you to present your work in high-resolution detail that draws viewers into your creations. <br /> Enables seamless navigation for effortless portfolio exploration.",
        imageAlt: 'Portfolio Image',
      },
      {
        contentTitle: 'Small business growth: <br /><span class="text-2xl">Converting visitors into customers</span>',
        descriptionLabel: 'Description:',
        description: "For small businesses, a well-crafted website can be a game-changer. AstroWind empowers small businesses to not only establish a credible online presence but also convert visitors into loyal customers. The template's thoughtful design and optimization features ensure that your website doesn't just attract attention but also guides visitors through a seamless journey, ultimately leading to conversions.",
        benefitsLabel: 'Benefits:',
        benefits: "Present your small business with a professional and polished website that instills confidence and trust among visitors. <br /> Strategically placed CTAs, user-friendly forms, and optimized layouts work together to drive user engagement and conversions. <br /> Ensure a smooth browsing experience, reducing bounce rates and encouraging interaction.",
        imageAlt: 'Small Business Image',
      },
    ],
  },

  pricing: {
    title: 'Flexible pricing plans for AstroWind',
    plans: [
      {
        title: 'free',
        subtitle: 'Access to core features and a wide range of templates',
        price: '0',
        period: '/ month',
        ctaText: 'Get Started for Free',
      },
      {
        title: 'pro',
        subtitle: 'Premium templates and advanced customization',
        price: '15',
        period: '/ Month',
        ctaText: 'Upgrade to Pro',
        ribbonTitle: 'popular',
      },
      {
        title: 'Enterprise',
        subtitle: 'Tailored solutions for large-scale projects',
        price: '45',
        period: '/ Month',
        ctaText: 'Unlock Enterprise Features',
      },
    ],
  },

  faqs: {
    title: 'Frequently Asked Questions',
    items: [
      {
        title: 'Is AstroWind compatible with the latest versions of Astro and Tailwind CSS?',
        description: 'Yes, AstroWind is designed to be compatible with the latest versions of both Astro and Tailwind CSS. This ensures that you can harness the full capabilities of these technologies while benefiting from the features offered by AstroWind.',
      },
      {
        title: 'Can I use AstroWind for both personal and commercial projects?',
        description: "Certainly! AstroWind is versatile and can be used for a wide range of projects, including both personal and commercial endeavors. Whether you're building a professional portfolio, launching a startup, or creating a marketing website, AstroWind has you covered.",
      },
      {
        title: 'What level of coding knowledge is required to use AstroWind?',
        description: 'While some familiarity with HTML, CSS, and web development concepts is helpful, the user-friendly interface and customization options allow those with limited coding experience to create impressive websites. For more advanced users, AstroWind offers extensive customization capabilities.',
      },
      {
        title: 'Is customer support available for AstroWind users seeking guidance?',
        description: "Absolutely, our dedicated customer support team is here to assist you with any questions or challenges you may encounter. Feel free to reach out to us through our support channels, and we'll be happy to provide the help you need.",
      },
    ],
  },

  contact: {
    title: 'Reach out to us',
    subtitle: "Have questions? Feel free to contact us using the form below. We're here to help!",
    ctaText: 'Contact us',
    items: [
      {
        title: 'Email us',
        description: 'contact@support.com',
        icon: 'tabler:mail',
      },
      {
        title: 'Call us',
        description: '+1 (234) 567-890',
        icon: 'tabler:headset',
      },
      {
        title: 'Follow us',
        description: '@example',
        icon: 'tabler:brand-twitter',
      },
    ],
  },

  blog: {
    title: "Stay informed with AstroWind's blog",
    information: 'Explore our collection of articles, guides, and tutorials on web development, design trends, and using AstroWind effectively for your projects.',
  },
};

export default saas;
