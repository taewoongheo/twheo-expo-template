import { Env } from '@env';
import { useLanguage } from '@src/lib/i18n/utils';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

function Index() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>env: {Env.APP_ENV}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Env.NAME}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Env.VERSION}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>lang: {t('hello')}</Text>
      <Button
        title='Change Language'
        onPress={() => setLanguage(language === 'en' ? 'ko' : 'en')}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Array.from({ length: 11 }).map((_, index) => {
          const colorClass = [
            'bg-primary-50',
            'bg-primary-100',
            'bg-primary-200',
            'bg-primary-300',
            'bg-primary-400',
            'bg-primary-500',
            'bg-primary-600',
            'bg-primary-700',
            'bg-primary-800',
            'bg-primary-900',
          ][index];

          return <View className={colorClass} key={index} style={{ width: 50, height: 50 }} />;
        })}
      </View>
    </View>
  );
}

export default Index;
