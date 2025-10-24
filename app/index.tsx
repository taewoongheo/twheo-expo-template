import { Env } from '@env';
import { Text, View } from 'react-native';

function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Env.APP_ENV}</Text>
    </View>
  );
}

export default Index;
