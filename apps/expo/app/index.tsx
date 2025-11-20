import { Env } from '@env';
import Button from '@src/components/ui/button';
import { useTheme } from '@src/lib/hooks';
import { useLanguage } from '@src/lib/i18n/utils';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { PixelRatio, Text, View } from 'react-native';

const DebugNativeDPI = () => {
  const scale = PixelRatio.get();

  return (
    <View style={{ padding: 20 }}>
      <Text>Current Scale: {scale}x</Text>
    </View>
  );
};

function Index() {
  const router = useRouter();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <View
      className='bg-blue-100 dark:bg-blue-900'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}
    >
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        env: {Env.APP_ENV}
      </Text>
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        {Env.NAME}
      </Text>
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        {Env.VERSION}
      </Text>
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        lang: {t('hello')}
      </Text>
      <Button
        text='Change Language'
        onPress={() => setLanguage(language === 'en' ? 'ko' : 'en')}
        isLoading={false}
        color='primary'
        size='default'
        fullWidth={false}
        disabled={false}
      />
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        Theme: {theme}
      </Text>
      <Button
        text='Change Theme'
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        isLoading={false}
        color='primary'
        size='default'
        fullWidth={false}
        disabled={false}
      />
      <Text className='text-warning-500 dark:text-warning-500'>Warning Message</Text>
      <Text className='text-brand-primary-light dark:text-brand-primary-dark'>Brand Color</Text>
      <Button
        onPress={() => router.push('/button')}
        text='Go to Button'
        isLoading={false}
        color='link'
        size='default'
        fullWidth={false}
        disabled={false}
      />
      <DebugNativeDPI />
    </View>
  );
}

export default Index;
