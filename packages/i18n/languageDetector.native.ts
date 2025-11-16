import { getLocales } from 'expo-localization';

export const getInitialLanguage = () => getLocales()[0].languageCode || 'en';
