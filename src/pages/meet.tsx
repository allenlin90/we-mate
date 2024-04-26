import { useTranslation } from 'react-i18next';

const Meet = () => {
  const { t } = useTranslation();
  return <div>{t('meet.title')}</div>;
};

export default Meet;
