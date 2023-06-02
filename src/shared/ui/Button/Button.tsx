import { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = (props: IButtonProps) => {
  const {
    className, theme, children, ...otherProps
  } = props;

  return (
    <button type="button" className={classNames(cls.Button, { [cls[theme ?? '']]: true }, [className])} {...otherProps}>
      {children}
    </button>
  );
};
