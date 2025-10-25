import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@src/translations/en.json';
import ko from '@src/translations/ko.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  lng: 'ko',
  fallbackLng: 'en',
  compatibilityJSON: 'v3' as 'v4',

  interpolation: {
    escapeValue: false,
  },
});
