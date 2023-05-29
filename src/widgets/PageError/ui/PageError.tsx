import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{ t('Something Went Wrong') }</p>
      <Button onClick={reloadPage}>
        { t('Refresh Page') }
      </Button>
    </div>
  );
};
