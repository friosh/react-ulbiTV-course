import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button = ({ className, theme, children, ...otherProps }: IButtonProps) => {
    return <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </button>
}