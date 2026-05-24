// ─── LP Index — re-exports for all landing page translations ──────
// Usage: import { saas, startup, mobileApp, landings } from '~/i18n/lp';

// ── SaaS ──
export { default as saasEn } from './saas.en';
export { default as saasRu } from './saas.ru';
export { default as saasUk } from './saas.uk';

// ── Startup ──
export { default as startupEn } from './startup.en';
export { default as startupRu } from './startup.ru';
export { default as startupUk } from './startup.uk';

// ── Mobile App ──
export { default as mobileAppEn } from './mobile-app.en';
export { default as mobileAppRu } from './mobile-app.ru';
export { default as mobileAppUk } from './mobile-app.uk';

// ── Simple Landings ──
export { default as landingsEn } from './landings.en';
export { default as landingsRu } from './landings.ru';
export { default as landingsUk } from './landings.uk';

// ── Types ──
export type * from './types';

// ── Convenience maps by locale ──
import saasEn from './saas.en';
import saasRu from './saas.ru';
import saasUk from './saas.uk';
import startupEn from './startup.en';
import startupRu from './startup.ru';
import startupUk from './startup.uk';
import mobileAppEn from './mobile-app.en';
import mobileAppRu from './mobile-app.ru';
import mobileAppUk from './mobile-app.uk';
import landingsEn from './landings.en';
import landingsRu from './landings.ru';
import landingsUk from './landings.uk';

export const lpByLocale = {
  en: { saas: saasEn, startup: startupEn, mobileApp: mobileAppEn, landings: landingsEn },
  ru: { saas: saasRu, startup: startupRu, mobileApp: mobileAppRu, landings: landingsRu },
  uk: { saas: saasUk, startup: startupUk, mobileApp: mobileAppUk, landings: landingsUk },
} as const;
