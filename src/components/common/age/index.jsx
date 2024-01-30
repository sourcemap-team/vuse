import { useTranslation } from 'react-i18next';

// import age from 'src/assets/images/icons/age.svg';
import ageAm from 'src/assets/images/icons/ageAm.svg';

const Age = () => {
  const { t } = useTranslation();
  //   const currentLanguage = i18n.language;

  //   let ageToDisplay;
  //   if (currentLanguage === 'am') {
  //     ageToDisplay = ageAm;
  //   } else {
  //     ageToDisplay = age;
  //   }

  return (
    <div className={'sticky bottom-0 z-30'}>
      <div className={'flex items-center justify-center bg-primary py-1 px-3'}>
        <img src={ageAm} className={'me-3'} alt='age' />
        <p className={'text-white text-xs lg:text-base uppercase'}>
          {t(`restriction.age`)}
        </p>
      </div>
    </div>
  );
};
export default Age;
