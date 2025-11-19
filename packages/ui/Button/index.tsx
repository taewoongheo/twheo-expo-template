import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Pressable onPress={() => console.log('클릭')} className='rounded-lg bg-blue-500 p-4'>
      <Text className='text-brand-primary-light text-center font-bold'>{children}</Text>
    </Pressable>
  );
}
