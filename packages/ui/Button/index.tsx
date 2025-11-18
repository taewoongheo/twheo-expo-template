import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Pressable onPress={() => console.log('클릭')} className='rounded-lg bg-blue-500 p-4'>
      <Text className='text-center font-bold text-red-500'>{children}</Text>
    </Pressable>
  );
}
