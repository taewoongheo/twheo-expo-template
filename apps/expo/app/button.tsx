import { Button } from '@src/components/ui';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <ScrollView className='bg-blue-100 p-5 dark:bg-blue-900' contentContainerClassName='gap-4'>
      {/* primary */}
      <Button
        color='primary'
        size='default'
        disabled={false}
        fullWidth
        text='primary default full'
      />
      <Button
        color='primary'
        size='default'
        disabled={false}
        fullWidth={false}
        text='primary default inline'
      />
      <Button
        color='primary'
        size='default'
        disabled
        fullWidth
        text='primary default disabled full'
      />
      <Button
        color='primary'
        size='default'
        disabled
        fullWidth={false}
        text='primary default disabled inline'
      />

      <Button color='primary' size='sm' disabled={false} fullWidth text='primary sm full' />
      <Button
        color='primary'
        size='sm'
        disabled={false}
        fullWidth={false}
        text='primary sm inline'
      />
      <Button color='primary' size='sm' disabled fullWidth text='primary sm disabled full' />
      <Button
        color='primary'
        size='sm'
        disabled
        fullWidth={false}
        text='primary sm disabled inline'
      />

      <Button color='primary' size='lg' disabled={false} fullWidth text='primary lg full' />
      <Button
        color='primary'
        size='lg'
        disabled={false}
        fullWidth={false}
        text='primary lg inline'
      />
      <Button color='primary' size='lg' disabled fullWidth text='primary lg disabled full' />
      <Button
        color='primary'
        size='lg'
        disabled
        fullWidth={false}
        text='primary lg disabled inline'
      />

      {/* secondary */}
      <Button
        color='secondary'
        size='default'
        disabled={false}
        fullWidth
        text='secondary default full'
      />
      <Button
        color='secondary'
        size='default'
        disabled={false}
        fullWidth={false}
        text='secondary default inline'
      />
      <Button
        color='secondary'
        size='default'
        disabled
        fullWidth
        text='secondary default disabled full'
      />
      <Button
        color='secondary'
        size='default'
        disabled
        fullWidth={false}
        text='secondary default disabled inline'
      />

      <Button color='secondary' size='sm' disabled={false} fullWidth text='secondary sm full' />
      <Button
        color='secondary'
        size='sm'
        disabled={false}
        fullWidth={false}
        text='secondary sm inline'
      />
      <Button color='secondary' size='sm' disabled fullWidth text='secondary sm disabled full' />
      <Button
        color='secondary'
        size='sm'
        disabled
        fullWidth={false}
        text='secondary sm disabled inline'
      />

      <Button color='secondary' size='lg' disabled={false} fullWidth text='secondary lg full' />
      <Button
        color='secondary'
        size='lg'
        disabled={false}
        fullWidth={false}
        text='secondary lg inline'
      />
      <Button color='secondary' size='lg' disabled fullWidth text='secondary lg disabled full' />
      <Button
        color='secondary'
        size='lg'
        disabled
        fullWidth={false}
        text='secondary lg disabled inline'
      />

      {/* destructive */}
      <Button
        color='destructive'
        size='default'
        disabled={false}
        fullWidth
        text='destructive default full'
      />
      <Button
        color='destructive'
        size='default'
        disabled={false}
        fullWidth={false}
        text='destructive default inline'
      />
      <Button
        color='destructive'
        size='default'
        disabled
        fullWidth
        text='destructive default disabled full'
      />
      <Button
        color='destructive'
        size='default'
        disabled
        fullWidth={false}
        text='destructive default disabled inline'
      />

      <Button color='destructive' size='sm' disabled={false} fullWidth text='destructive sm full' />
      <Button
        color='destructive'
        size='sm'
        disabled={false}
        fullWidth={false}
        text='destructive sm inline'
      />
      <Button
        color='destructive'
        size='sm'
        disabled
        fullWidth
        text='destructive sm disabled full'
      />
      <Button
        color='destructive'
        size='sm'
        disabled
        fullWidth={false}
        text='destructive sm disabled inline'
      />

      <Button color='destructive' size='lg' disabled={false} fullWidth text='destructive lg full' />
      <Button
        color='destructive'
        size='lg'
        disabled={false}
        fullWidth={false}
        text='destructive lg inline'
      />
      <Button
        color='destructive'
        size='lg'
        disabled
        fullWidth
        text='destructive lg disabled full'
      />
      <Button
        color='destructive'
        size='lg'
        disabled
        fullWidth={false}
        text='destructive lg disabled inline'
      />

      {/* link */}
      <Button color='link' size='default' disabled={false} fullWidth text='link default full' />
      <Button
        color='link'
        size='default'
        disabled={false}
        fullWidth={false}
        text='link default inline'
      />
      <Button color='link' size='default' disabled fullWidth text='link default disabled full' />
      <Button
        color='link'
        size='default'
        disabled
        fullWidth={false}
        text='link default disabled inline'
      />

      <Button color='link' size='sm' disabled={false} fullWidth text='link sm full' />
      <Button color='link' size='sm' disabled={false} fullWidth={false} text='link sm inline' />
      <Button color='link' size='sm' disabled fullWidth text='link sm disabled full' />
      <Button color='link' size='sm' disabled fullWidth={false} text='link sm disabled inline' />

      <Button color='link' size='lg' disabled={false} fullWidth text='link lg full' />
      <Button color='link' size='lg' disabled={false} fullWidth={false} text='link lg inline' />
      <Button color='link' size='lg' disabled fullWidth text='link lg disabled full' />
      <Button color='link' size='lg' disabled fullWidth={false} text='link lg disabled inline' />

      {/* loading and children sample */}
      <Button color='primary' size='default' isLoading text='primary loading' />
      <Button color='secondary' size='lg' fullWidth={false}>
        <Text className='text-text-primary-light dark:text-text-primary-dark text-base font-semibold'>
          Custom child content
        </Text>
      </Button>
    </ScrollView>
  );
}
