import { useCallback, useMemo, useState } from 'react';
import { Control, FieldValues, Path, RegisterOptions, useController } from 'react-hook-form';
import type { BlurEvent, TextInput } from 'react-native';
import { TextInput as NTextInput, Text, TextInputProps, View } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

const input = tv({
  slots: {
    container: 'mb-2 self-stretch ',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'self-stretch mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 font-inter text-base  font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400 dark:border-neutral-300',
      },
    },
    error: {
      true: {
        input: 'border-border-destructive-light dark:border-border-destructive-dark',
        label: 'text-text-destructive-light dark:text-text-destructive-dark',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

type InputVariants = VariantProps<typeof input>;

interface InputProps extends Omit<InputVariants, 'error'>, TextInputProps {
  label?: string;
  error?: string;
  ref?: React.Ref<TextInput>;
}

function Input({ label, error, disabled, onBlur, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const styles = useMemo(
    () => input({ focused: isFocused, error: Boolean(error), disabled }),
    [isFocused, error, disabled]
  );

  const handleBlur = useCallback(
    (e: BlurEvent) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

  return (
    <View className={styles.container()}>
      {label && <Text className={styles.label()}>{label}</Text>}
      <NTextInput {...props} className={styles.input()} onFocus={handleFocus} onBlur={handleBlur} />
      {error && (
        <Text className='text-text-destructive-light dark:text-text-destructive-dark'>{error}</Text>
      )}
    </View>
  );
}

type TRule<T extends FieldValues> =
  | Omit<RegisterOptions<T>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
  | undefined;

interface ControlledInputProps<T extends FieldValues> extends InputProps {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule<T>;
}

export default function ControlledInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: ControlledInputProps<T>) {
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Input
      ref={field.ref}
      autoCapitalize='none'
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={(field.value as string) || ''}
      error={fieldState.error?.message}
      {...props}
    />
  );
}
