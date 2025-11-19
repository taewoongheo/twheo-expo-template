import { Env } from '@env';
import { useTheme } from '@src/lib/hooks';
import { useLanguage } from '@src/lib/i18n/utils';
import { Button } from '@twheo/ui';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

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
        isLoading={false}
        color='primary'
        size='default'
        fullWidth={false}
        disabled={false}
        text='Common Button'
      />
      <Button
        isLoading={false}
        color='primary'
        size='sm'
        fullWidth={false}
        disabled={false}
        text='Small Button'
      />
      <Button
        isLoading={false}
        color='primary'
        size='lg'
        fullWidth={false}
        disabled={false}
        text='Large Button'
      />
      <Button
        isLoading={false}
        color='secondary'
        size='default'
        fullWidth={false}
        disabled={false}
        text='Secondary Button'
      />
      <Button
        isLoading={false}
        color='destructive'
        size='default'
        fullWidth={false}
        disabled={false}
        text='Destructive Button'
      />
      <Button
        isLoading={false}
        color='link'
        size='default'
        fullWidth={true}
        disabled={false}
        text='Link Button'
      />
      <Button
        isLoading={false}
        color='primary'
        size='icon'
        fullWidth={false}
        disabled={false}
        text='ICON'
      />
    </View>
  );
}

export default Index;
