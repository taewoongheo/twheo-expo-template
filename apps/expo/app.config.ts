import { ConfigContext, ExpoConfig } from 'expo/config';
import { ClientEnv } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: ClientEnv.NAME,
  slug: 'template-expo',
  version: ClientEnv.VERSION,
  scheme: ClientEnv.SCHEME,
  plugins: ['expo-localization'],
  ios: {
    ...config.ios,
    bundleIdentifier: 'com.taewoongheo.template-expo',
    supportsTablet: true,
  },
  android: {
    ...config.android,
    package: 'com.taewoongheo.template-expo',
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: {
    ...config.web,
    output: 'static',
    favicon: './assets/images/favicon.png',
    bundler: 'metro',
  },
  extra: {
    ...ClientEnv,
  },
});
