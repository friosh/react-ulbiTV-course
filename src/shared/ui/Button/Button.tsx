import { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = ({
  className = '', theme = ThemeButton.CLEAR, children, ...otherProps
}: IButtonProps) => (
  <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </button>
);
