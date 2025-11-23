import { Button } from '@src/components/ui';
import ControlledInput from '@src/components/ui/input';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function Form() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <View className='flex-1 flex-col items-center gap-6 bg-blue-100 px-4 py-6 dark:bg-blue-900'>
      <Text className='text-2xl font-bold'>Form</Text>
      <View className='w-full gap-2'>
        <ControlledInput control={control} name='name' label='Name' placeholder='Enter your name' />
        <ControlledInput
          control={control}
          name='email'
          label='Email'
          placeholder='Enter your email'
        />
        <ControlledInput
          control={control}
          name='password'
          label='Password'
          placeholder='Enter your name'
        />
      </View>
      <Button
        text='Submit'
        onPress={handleSubmit(onSubmit)}
        isLoading={false}
        color='primary'
        size='default'
        fullWidth={true}
        disabled={false}
      />
    </View>
  );
}
