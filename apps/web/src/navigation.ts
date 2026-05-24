import { getLocalizedPermalink, getLocalizedBlogPermalink, getAsset } from './utils/permalinks';
import { useTranslations } from './i18n/translator';

// ─── Navigation Mode ──────────────────────────────────────────────
// Режимы: 'prod' | 'dev' | 'debug'
// Управление: PUBLIC_NAV_MODE в .env или import.meta.env
const NAV_MODE = (() => {
  try {
    return import.meta.env.PUBLIC_NAV_MODE || 'prod';
  } catch {
    return 'prod';
  }
})();

const isDev = NAV_MODE === 'dev' || NAV_MODE === 'debug';
const isDebug = NAV_MODE === 'debug';

// ─── Helper ────────────────────────────────────────────────────────
/**
 * Расширяет базовый массив навигации дополнительными элементами.
 * Не мутирует оригинальный массив.
 *
 * @param {Array} base  — базовые элементы (всегда отображаются)
 * @param {Array} extra — дополнительные элементы (dev/debug)
 * @returns {Array} объединённый массив
 */
function extendNavigation(base, extra = []) {
  if (!extra.length) return base;
  return [...base, ...extra];
}

// ─── Header ────────────────────────────────────────────────────────
export const getHeaderData = (locale) => {
  const { t } = useTranslations(locale);

  // ── base links (prod — всегда видны) ──
  const baseLinks = [
    {
      text: t('header.homes.title'),
      links: [
        { text: t('header.homes.saas'), href: getLocalizedPermalink(locale, '/homes/saas') },
        { text: t('header.homes.startup'), href: getLocalizedPermalink(locale, '/homes/startup') },
        { text: t('header.homes.app'), href: getLocalizedPermalink(locale, '/homes/mobile-app') },
        { text: t('header.homes.personal'), href: getLocalizedPermalink(locale, '/homes/personal/') },
      ],
    },
    {
      text: t('header.pages.title'),
      links: [
        { text: t('header.pages.features'), href: getLocalizedPermalink(locale, '/#features') },
        { text: t('header.pages.services'), href: getLocalizedPermalink(locale, '/services') },
        { text: t('header.pages.pricing'), href: getLocalizedPermalink(locale, '/pricing') },
        { text: t('header.pages.aboutUs'), href: getLocalizedPermalink(locale, '/about') },
        { text: t('header.pages.contactUs'), href: getLocalizedPermalink(locale, '/contact') },
        { text: t('header.pages.terms'), href: getLocalizedPermalink(locale, '/terms') },
        { text: t('header.pages.privacyPolicy'), href: getLocalizedPermalink(locale, '/privacy') },
      ],
    },
    {
      text: t('header.landing.title'),
      links: [
        { text: t('header.landing.leadGeneration'), href: getLocalizedPermalink(locale, '/landing/lead-generation') },
        { text: t('header.landing.sales'), href: getLocalizedPermalink(locale, '/landing/sales') },
        { text: t('header.landing.clickThrough'), href: getLocalizedPermalink(locale, '/landing/click-through') },
        { text: t('header.landing.product'), href: getLocalizedPermalink(locale, '/landing/product') },
        { text: t('header.landing.comingSoon'), href: getLocalizedPermalink(locale, '/landing/pre-launch') },
        { text: t('header.landing.gallery'), href: getLocalizedPermalink(locale, '/landing/gallery') },
      ],
    },
    {
      text: t('header.blog.title'),
      links: [
        { text: t('header.blog.blogList'), href: getLocalizedBlogPermalink(locale) },
        { text: t('header.blog.article'), href: getLocalizedPermalink(locale, 'get-started-website-with-astro-tailwind-css', 'post') },
        { text: t('header.blog.mkdocs'), href: getLocalizedPermalink(locale, 'mkdocs_extended_article', 'post') },
        { text: t('header.blog.ai'), href: getLocalizedPermalink(locale, 'astrowind_pf_blog_ai_controlled_development', 'post') },
        { text: t('header.blog.multi'), href: getLocalizedPermalink(locale, 'multilingual_site_architecture', 'post') },
        { text: t('header.blog.twbs'), href: getLocalizedPermalink(locale, 'astrowind_pf_blog_tailwind_vs_bootstrap', 'post') },
        { text: t('header.blog.autonav'), href: getLocalizedPermalink(locale, 'astrowind_pf_blog_auto_navigation_markdown', 'post') },
        { text: t('header.blog.articleMdx'), href: getLocalizedPermalink(locale, 'markdown-elements-demo-post', 'post') },
        { text: t('header.blog.category'), href: getLocalizedPermalink(locale, 'tutorials', 'category') },
        { text: t('header.blog.tag'), href: getLocalizedPermalink(locale, 'astro', 'tag') },
      ],
    },
  ];

  // ── devOnly links (видны в dev и debug) ──
  const devLinks = isDev
    ? [
      {
        text: '🛠 Dev Tools',
        links: [
          { text: 'Component Playground', href: '#dev:playground' },
          { text: 'Style Guide', href: '#dev:style-guide' },
        ],
      },
    ]
    : [];

  // ── debugOnly links (видны только в debug) ──
  const debugLinks = isDebug
    ? [
      {
        text: '🐛 Debug',
        links: [
          { text: 'i18n Inspector', href: '#dev:i18n' },
          { text: 'Route Map', href: '#dev:routes' },
        ],
      },
    ]
    : [];

  // ── сборка ──
  const links = extendNavigation(extendNavigation(baseLinks, devLinks), debugLinks);

  return {
    links,
    actions: [
      { type: 'button', text: t('header.download'), href: 'https://cv-res.vercel.app/index.html', target: '_blank' },
    ],
  };
};


// ─── Footer ────────────────────────────────────────────────────────
export const getFooterData = (locale) => {
  const { t } = useTranslations(locale);

  return {
    links: [
      {
        title: t('footer.product.title'),
        links: [
          { text: t('footer.product.features'), href: '#' },
          { text: t('footer.product.security'), href: '#' },
          { text: t('footer.product.team'), href: '#' },
          { text: t('footer.product.enterprise'), href: '#' },
          { text: t('footer.product.customerStories'), href: '#' },
          { text: t('footer.product.pricing'), href: '#' },
          { text: t('footer.product.resources'), href: '#' },
        ],
      },
      {
        title: t('footer.platform.title'),
        links: [
          { text: t('footer.platform.developerAPIs'), href: '#' },
          { text: t('footer.platform.partners'), href: '#' },
          { text: t('footer.platform.atom'), href: '#' },
          { text: t('footer.platform.electron'), href: '#' },
          { text: t('footer.platform.astrowindDesktop'), href: '#' },
        ],
      },
      {
        title: t('footer.support.title'),
        links: [
          { text: t('footer.support.docs'), href: '#' },
          { text: t('footer.support.communityForum'), href: '#' },
          { text: t('footer.support.professionalServices'), href: '#' },
          { text: t('footer.support.skills'), href: '#' },
          { text: t('footer.support.status'), href: '#' },
        ],
      },
      {
        title: t('footer.company.title'),
        links: [
          { text: t('footer.company.about'), href: '#' },
          { text: t('footer.company.blog'), href: '#' },
          { text: t('footer.company.careers'), href: '#' },
          { text: t('footer.company.press'), href: '#' },
          { text: t('footer.company.inclusion'), href: '#' },
          { text: t('footer.company.socialImpact'), href: '#' },
          { text: t('footer.company.shop'), href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.legal.terms'), href: getLocalizedPermalink(locale, '/terms') },
      { text: t('footer.legal.privacy'), href: getLocalizedPermalink(locale, '/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.`,
  };
};


