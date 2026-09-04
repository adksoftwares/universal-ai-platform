/**
 * Localization Foundation
 * 
 * This creates the architecture for translation string management.
 * In production, this would integrate with next-intl or i18next.
 */

export const defaultLocale = 'en';
export const locales = ['en', 'es', 'fr', 'ar', 'zh', 'ta', 'si', 'hi', 'ja', 'de', 'pt'] as const;
export type Locale = typeof locales[number];

// Placeholder for translation dictionaries
const dictionaries: Record<Locale, any> = {
  en: () => import('./locales/en.json').then(module => module.default),
  // other locales would be dynamically imported here
  es: () => Promise.resolve({}),
  fr: () => Promise.resolve({}),
  ar: () => Promise.resolve({}),
  zh: () => Promise.resolve({}),
  ta: () => Promise.resolve({}),
  si: () => Promise.resolve({}),
  hi: () => Promise.resolve({}),
  ja: () => Promise.resolve({}),
  de: () => Promise.resolve({}),
  pt: () => Promise.resolve({}),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries[defaultLocale]();
};

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  const rtlLocales: Locale[] = ['ar'];
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}
