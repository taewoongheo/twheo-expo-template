import type { PressableProps } from 'react-native';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { tv } from 'tailwind-variants';

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
        container: 'h-10 px-4',
        label: 'text-base',
      },
      sm: {
        container: 'h-8 px-3',
        label: 'text-sm',
      },
      lg: {
        container: 'h-12 px-8',
        label: 'text-lg',
      },
      icon: {
        container: 'size-9',
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

export default function Button({
  text,
  isLoading,
  color,
  size,
  disabled,
  fullWidth,
  children,
  ...props
}: {
  text: string;
  isLoading: boolean;
  color: 'primary' | 'secondary' | 'destructive' | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  disabled: boolean;
  fullWidth: boolean;
  children?: React.ReactNode;
} & PressableProps) {
  const { container, label, indicator } = button({ color, size, disabled, fullWidth });

  console.log(text);
  return (
    <Pressable {...props} className={container()}>
      {children ? (
        children
      ) : (
        <>
          {isLoading ? (
            <ActivityIndicator className={indicator()} />
          ) : (
            <Text className={label()}>{text}</Text>
          )}
        </>
      )}
    </Pressable>
  );
}
