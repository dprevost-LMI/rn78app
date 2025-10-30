/**
 * FBTee LocaleContext setup for React Native
 */
import { createLocaleContext } from 'fbtee';

// Define available languages
const availableLanguages = new Map([
  ['en_US', 'English'],
  ['ja_JP', '日本語 (Japanese)'],
  ['es_ES', 'Español'],
]);

// For React Native, we'll simulate client locales (in a real app you'd get this from device settings)
const clientLocales = ['en_US'];

// Load translations for a locale
const loadLocale = async (locale) => {
  if (locale === 'ja_JP') {
    return (await import('../translations/ja_JP.json')).default.translations;
  }
  if (locale === 'es_ES') {
    return (await import('../translations/es_ES.json')).default.translations;
  }
  if (locale === 'en_US') {
    return (await import('../translations/en_US.json')).default.translations;
  }
  return {}; // Default fallback
};

export const LocaleContextProvider = createLocaleContext({
  availableLanguages,
  clientLocales,
  loadLocale,
});
