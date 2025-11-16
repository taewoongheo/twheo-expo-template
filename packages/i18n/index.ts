import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getInitialLanguage } from './languageDetector';
import { resources } from './resources';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  compatibilityJSON: 'v3' as 'v4',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export type { Language } from './resources';
