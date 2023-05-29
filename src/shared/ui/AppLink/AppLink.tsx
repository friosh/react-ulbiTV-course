import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = ({
  className = '', children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
}) => (
  <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </Link>
);
