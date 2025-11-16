import en from './translations/en.json';
import ko from './translations/ko.json';

export const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

export type Language = keyof typeof resources;
