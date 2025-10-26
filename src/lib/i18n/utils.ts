import i18n from 'i18next';
import { useEffect } from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { Language } from '@src/lib/i18n/resources';
import { storage, STORAGE_KEYS } from '@src/lib/storage';

export const getCurrentLanguage = () => {
  return storage.getString(STORAGE_KEYS.LANGUAGE);
};

export const useLanguage = () => {
  const [language, setLanguage] = useMMKVString(STORAGE_KEYS.LANGUAGE, storage);

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
