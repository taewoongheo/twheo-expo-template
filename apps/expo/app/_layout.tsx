import '@twheo/i18n';
import { Stack } from 'expo-router';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  return (
    <KeyboardAvoidingView
      className='flex-1 bg-blue-100 dark:bg-blue-900'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='button' />
          <Stack.Screen name='image' />
          <Stack.Screen name='form' />
        </Stack>
      </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
}
