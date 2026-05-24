import fs from 'fs';
import path from 'path';

const srcJson = 'm:/Web/Turborepo/awsf/apps/portfolio-master/src/data/projects.json';
const destJson = 'm:/Web/Turborepo/awsf/apps/astrowind-i18n/src/components/blocks/gallery/gallery.json';

const projects = JSON.parse(fs.readFileSync(srcJson, 'utf-8'));

const getCategory = (id) => {
  if (['hack4tools', 'midupass'].includes(id)) return 'Tools';
  if (['avocadoo', 'nananames'].includes(id)) return 'Web';
  return 'Other';
};

const mapProject = (p, langDesc, langSlogan) => ({
    ...p,
    title: p.projectTitle,
    description: langDesc,
    slogan: langSlogan,
    category: getCategory(p.id),
    images: p.carouselImages.map(img => `/projects/${p.id}/${img}`),
    technologies: p.projectTechnologies || []
});

const translationsSet = {
  "hack4tools": {
    ru: "Веб-сайт, объединяющий обширную коллекцию инструментов и утилит для пентестеров: от инструментов OSINT и перечисления до словарей и фреймворков.",
    uk: "Веб-сайт, що об'єднує велику колекцію інструментів та утиліт для пентестерів: від інструментів OSINT та перерахування до словників та фреймворків.",
    it: "Un sito web che concentra una vasta collezione di strumenti e utilità per i pentesters, dagli strumenti di osint ed enumerazione ai dizionari e ai framework."
  },
  "nananames": {
    ru: "Веб-сайт для генерации смешных и запоминающихся имен для домашних животных с использованием сервисов искусственного интеллекта Co:here. Разработан для участия в хакатоне Midudev.",
    uk: "Веб-сайт для генерації смішних та пам'ятних імен для домашніх тварин з використанням сервісів штучного інтелекту Co:here. Розроблено для участі в хакатоні Midudev.",
    it: "Un sito web per generare nomi di animali domestici divertenti e accattivanti utilizzando i servizi di intelligenza artificiale di Co:here."
  },
  "midupass": {
    ru: "Генератор паролей, созданный на React.js для участия в хакатоне Hacktoberfest 2022.",
    uk: "Генератор паролів, створений на React.js для участі в хакатоні Hacktoberfest 2022.",
    it: "Un generatore di password realizzato con React.js sviluppato per partecipare all'Hacktoberfest 2022."
  },
  "avocadoo": {
    ru: "Магазин авокадо, созданный на Next.js и развернутый на Vercel.",
    uk: "Магазин авокадо, створений на Next.js та розгорнутий на Vercel.",
    it: "Un negozio di avocado realizzato con Next.js e distribuito su Vercel."
  },
  "giboo": {
    ru: "Сайт для поиска сотен смешных гифок. Разработан на React.js с использованием Giphy API.",
    uk: "Сайт для пошуку сотень смішних гіфок. Розроблено на React.js з використанням Giphy API.",
    it: "Giboo è un sito web per scoprire centinaia di gif divertenti. È sviluppato in React.js e utilizza l'API di Giphy."
  },
  "firefly-components": {
    ru: "Набор минималистичных и переиспользуемых компонентов на React и Styled Components.",
    uk: "Набір мінімалістичних компонентів на React та Styled Components, що можна використовувати повторно.",
    it: "Un set di componenti minimalisti e riutilizzabili realizzati in React e stilizzati con Styled Components."
  }
};

const getTranslation = (id, lang, fallback) => {
  return (translationsSet[id] && translationsSet[id][lang]) || fallback;
};

const translations = {
  en: projects.map(p => mapProject(p, p.projectDescription.replace('en español', 'in English'), p.projectSlogan)),
  ru: projects.map((p) => mapProject(p, getTranslation(p.id, 'ru', p.projectDescription), p.projectTitle)),
  uk: projects.map((p) => mapProject(p, getTranslation(p.id, 'uk', p.projectDescription), p.projectTitle)),
  it: projects.map((p) => mapProject(p, getTranslation(p.id, 'it', p.projectDescription), p.projectTitle)),
  fr: projects.map((p) => mapProject(p, p.projectDescription, p.projectTitle)),
  de: projects.map((p) => mapProject(p, p.projectDescription, p.projectTitle))
};

fs.mkdirSync(path.dirname(destJson), { recursive: true });
fs.writeFileSync(destJson, JSON.stringify(translations, null, 2), 'utf-8');
console.log('JSON generated successfully with real translations.');
