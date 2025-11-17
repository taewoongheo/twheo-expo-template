import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Pressable>
      <Text style={{ color: 'red' }}>{children}</Text>
    </Pressable>
  );
}
