import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames('lds-facebook', {}, [className])}>
    <div className="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  </div>
);
