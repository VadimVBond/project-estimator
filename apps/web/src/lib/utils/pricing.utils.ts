// Утилиты для форматирования цены на фронтенде.

/**
 * Форматирует число как валюту.
 */
export function formatCurrency(amount: number | null, currencyCode: string = 'USD', locale: string = 'en-US'): string {
  if (amount === null || isNaN(amount)) return '';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
