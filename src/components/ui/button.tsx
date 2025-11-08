import { Pressable, PressableProps, Text } from 'react-native';
import { tv } from 'tailwind-variants';

export const button = tv({
  slots: {
    container: 'my-2 flex flex-row items-center justify-center rounded-md px-4',
    label: 'font-inter text-base font-semibold',
    indicator: 'h-6 text-white',
  },

  variants: {
    variant: {
      default: {
        container: 'bg-black dark:bg-white',
        label: 'text-white dark:text-black',
        indicator: 'text-white dark:text-black',
      },
      secondary: {},
      outline: {},
      destructive: {},
      ghost: {},
      link: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
      icon: {},
    },
    disabled: {
      true: {},
    },
    fullWidth: {
      true: {},
      false: {},
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
    disabled: false,
    fullWidth: true,
  },
});

// 이러면 tv 를 못쓰긴함
// 1. variant 를 props 로 전부 전달
//  - button 컴포넌트가 tv 와 결합도가 생김, props 를 자동으로 생성한다면 모를까?
//    - tv 에서 변수가 추가될 떄마다 Button 컴포넌트도 생성해야 됨. 응집도가 떨어짐
const Button = ({
  text,
  variant,
  size,
  disabled,
  fullWidth,
  ...props
}: {
  text: string;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  fullWidth?: boolean;
} & PressableProps) => {
  const { container, label } = button({ variant, size, disabled, fullWidth });

  return (
    <Pressable className={container()} {...props}>
      <Text className={label()}>{text}</Text>
    </Pressable>
  );
};

export default Button;
