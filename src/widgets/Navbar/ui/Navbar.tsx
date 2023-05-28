import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: INavbarProps) => {
  const { t } = useTranslation()

  return <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('Home link')}</AppLink>
      <AppLink to="/about">{t('About link')}</AppLink>
    </div>
  </div>
}
