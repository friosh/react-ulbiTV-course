import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      asdawa
      {t('About page')}
    </div>
  );
};

export default AboutPage;
