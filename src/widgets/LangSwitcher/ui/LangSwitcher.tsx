import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const switchLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={switchLang} theme={ThemeButton.CLEAR}>
    {t('Lang')}
  </Button>
}
