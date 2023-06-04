import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => { setCollapsed((state) => !state); };
  const { t } = useTranslation();

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        { collapsed ? '>>>' : '<<<'}
      </Button>

      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
            <HomeIcon className={cls.icon} />
            <span className={cls.link}>{t('Home link')}</span>
          </AppLink>
        </div>

        <div className={cls.item}>
          <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t('About link')}</span>
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
