import { Env } from '@env';
import { useLanguage } from '@src/lib/i18n/utils';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

function Index() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>env: {Env.APP_ENV}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Env.NAME}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Env.VERSION}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>lang: {t('hello')}</Text>
      <Button
        title='Change Language'
        onPress={() => setLanguage(language === 'en' ? 'ko' : 'en')}
      />
    </View>
  );
}

export default Index;
