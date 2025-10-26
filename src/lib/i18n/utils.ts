import { storage } from '@src/lib/storage';
import i18n from 'i18next';
import { useEffect } from 'react';
import { useMMKVString } from 'react-native-mmkv';
import { Language } from './resources';

export const getCurrentLanguage = () => {
  return storage.getString('lang');
};

export const useLanguage = () => {
  const [language, setLanguage] = useMMKVString('lang', storage);

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return {
    language: language as Language,
    setLanguage,
  };
};

// TODO: add memoize for translation
