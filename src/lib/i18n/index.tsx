import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '@src/lib/i18n/resources';
import { getCurrentLanguage } from '@src/lib/i18n/utils';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: getCurrentLanguage() || getLocales()[0].languageCode || 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3' as 'v4',

  interpolation: {
    escapeValue: false,
  },
});
