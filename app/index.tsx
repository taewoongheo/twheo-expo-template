import { Env } from '@env';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

function Index() {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>env: {Env.APP_ENV}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>lang: {t('hello')}</Text>
    </View>
  );
}

export default Index;
