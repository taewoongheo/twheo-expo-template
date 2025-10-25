import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const setStorage = <T>(key: string, value: T): void => {
  storage.set(key, JSON.stringify(value));
};

export const getStorage = <T>(key: string): T | null => {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
};

export const removeStorage = (key: string): void => {
  storage.remove(key);
};
