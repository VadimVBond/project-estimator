import { getLocaleFromUrl } from '~/i18n/translator';

/**
 * Возвращает текущую локаль на основе URL страницы.
 * Выполняется только в браузере (на клиенте) или в рамках Astro-контекста.
 */
export function useLocale(): string {
  if (typeof window !== 'undefined') {
    return getLocaleFromUrl(new URL(window.location.href));
  }
  return 'en'; // фоллбэк
}
