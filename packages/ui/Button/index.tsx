import colors from '@twheo/tailwind-design-tokens/colors';
import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Pressable
      onPress={() => console.log('클릭')}
      style={{ backgroundColor: colors.primary[200] }}
      className='bg-primary-500 mx-4 my-2 rounded-lg p-6'
    >
      <Text className='text-center font-bold text-white'>{children}</Text>
    </Pressable>
  );
}
