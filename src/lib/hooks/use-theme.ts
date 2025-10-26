import { colorScheme, useColorScheme } from 'nativewind';
import { useCallback, useEffect } from 'react';
import { useMMKVString } from 'react-native-mmkv';
import { storage } from '../storage';

type Theme = 'light' | 'dark' | 'system';

const DEFAULT_THEME: Theme = 'system';

export const useTheme = () => {
  const { colorScheme: _, setColorScheme } = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useMMKVString('theme', storage);

  // This effect synchronizes the MMKV state (selectedTheme) with the NativeWind state (colorScheme)
  useEffect(() => {
    setColorScheme((selectedTheme as Theme) ?? DEFAULT_THEME);
  }, [selectedTheme, setColorScheme]);

  const setTheme = useCallback(
    (theme: Theme) => {
      setColorScheme(theme);
      setSelectedTheme(theme);
    },
    [setColorScheme, setSelectedTheme]
  );

  const currentTheme = (selectedTheme ?? DEFAULT_THEME) as Theme;

  return {
    theme: currentTheme,
    setTheme,
  };
};

export const setInitialTheme = () => {
  const theme = storage.getString('theme') as Theme | undefined;
  colorScheme.set(theme ?? DEFAULT_THEME);
};
