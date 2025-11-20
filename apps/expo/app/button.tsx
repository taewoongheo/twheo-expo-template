import Button from '@src/components/ui/button';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 gap-5 bg-blue-100 p-5 dark:bg-blue-900'>
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
      <Button
        isLoading={false}
        color='primary'
        size='default'
        fullWidth={false}
        disabled={false}
        text='Common Button Expo'
      />
    </View>
  );
}
