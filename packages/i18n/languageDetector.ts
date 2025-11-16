export const getInitialLanguage = (): string => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }
  return navigator.language.split('-')[0] || 'en';
};
