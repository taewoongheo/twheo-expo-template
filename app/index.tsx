import { Env } from '@env';
import { useTheme } from '@src/lib/hooks';
import { useLanguage } from '@src/lib/i18n/utils';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

function Index() {
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
        title='Change Language'
        onPress={() => setLanguage(language === 'en' ? 'ko' : 'en')}
      />
      <Text
        className='text-blue-900 dark:text-blue-100'
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        Theme: {theme}
      </Text>
      <Button title='Change Theme' onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    </View>
  );
}

export default Index;
