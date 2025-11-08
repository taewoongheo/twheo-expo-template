import en from '@src/translations/en.json';
import ko from '@src/translations/ko.json';

export const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

export type Language = keyof typeof resources;
