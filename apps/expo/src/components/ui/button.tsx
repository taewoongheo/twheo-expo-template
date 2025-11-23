import { useMemo } from 'react';
import type { PressableProps, View } from 'react-native';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  slots: {
    container: 'flex flex-row items-center justify-center rounded-md px-4 py-2',
    label: 'font-semibold',
    indicator: 'h-6 text-white',
  },
  variants: {
    color: {
      primary: {
        container: 'bg-background-primary-light dark:bg-background-primary-dark',
        label: 'text-text-primary-light dark:text-text-primary-dark',
        indicator: 'text-text-primary-light dark:text-text-primary-dark',
      },
      secondary: {
        container: 'bg-background-secondary-light dark:bg-background-secondary-dark',
        label: 'text-text-secondary-light dark:text-text-secondary-dark',
        indicator: 'text-text-secondary-light dark:text-text-secondary-dark',
      },
      destructive: {
        container: 'bg-background-destructive-light dark:bg-background-destructive-dark',
        label: 'text-text-primary-light dark:text-text-primary-dark',
        indicator: 'text-text-primary-light dark:text-text-primary-dark',
      },
      link: {
        container: 'bg-transparent',
        label: 'text-text-primary-light dark:text-text-primary-dark underline',
        indicator: 'text-text-primary-light dark:text-text-primary-dark',
      },
    },
    size: {
      default: {
        container: 'h-12 px-4',
        label: 'text-lg',
      },
      sm: {
        container: 'h-10 px-3',
        label: 'text-base',
      },
      lg: {
        container: 'h-14 px-8',
        label: 'text-xl',
      },
    },
    disabled: {
      true: {
        container: 'opacity-40',
      },
    },
    fullWidth: {
      true: {
        container: 'self-stretch',
      },
      false: {
        container: 'self-center',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'default',
    disabled: false,
    fullWidth: true,
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props extends ButtonVariants, Omit<PressableProps, 'disabled'> {
  text?: string;
  isLoading?: boolean;
  className?: string;
  textClassName?: string;
  ref?: React.Ref<View>;
}

export default function Button({
  text = '',
  isLoading = false,
  className = '',
  textClassName = '',
  color = 'primary',
  size = 'default',
  disabled = false,
  fullWidth = true,
  testID,
  ref,
  ...props
}: Props) {
  const styles = useMemo(
    () => button({ color, size, disabled, fullWidth }),
    [color, size, disabled, fullWidth]
  );

  return (
    <Pressable
      {...props}
      disabled={isLoading || disabled}
      ref={ref}
      testID={testID}
      className={styles.container({ className })}
    >
      {props.children ? (
        props.children
      ) : (
        <>
          {isLoading ? (
            <ActivityIndicator
              size='small'
              testID={`${testID}-activity-indicator`}
              className={styles.indicator()}
            />
          ) : (
            <Text testID={`${testID}-text`} className={styles.label({ className: textClassName })}>
              {text}
            </Text>
          )}
        </>
      )}
    </Pressable>
  );
}
