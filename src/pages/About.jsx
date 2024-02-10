import Banner from 'src/containers/Banner.jsx';

import numberOneRu from 'src/assets/images/numberOneRu.png';
import numberOneAm from 'src/assets/images/numberOneAm.png';
import numberOneEn from 'src/assets/images/numberOneEn.png';

import countriesRu from 'src/assets/images/countries.png';
import countriesAm from 'src/assets/images/countriesAm.png';
import countriesEn from 'src/assets/images/countriesEn.png';

import bigBanner from 'src/assets/images/big-banner.png';
import imgMidBanner1 from 'src/assets/images/img-mid-banner-3.png';
import imgMidBanner2 from 'src/assets/images/img-mid-banner-4.png';
import { NavLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import GradientHeader from '../components/common/gradientHeader';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const imagesNumberOne = {
    am: numberOneAm,
    en: numberOneEn,
    ru: numberOneRu,
  };

  const imagesCountries = {
    am: countriesAm,
    en: countriesEn,
    ru: countriesRu,
  };

  const imageNumberOneToDisplay = imagesNumberOne[currentLanguage];
  const imageCountriesToDisplay = imagesCountries[currentLanguage];

  return (
    <main>
      <section className={'border-b py-10'}>
        <div
          className={'container mx-auto flex flex-col lg:flex-row px-3 lg:p-10'}
        >
          <div className={'flex flex-1 flex-col justify-between'}>
            <div>
              <GradientHeader className={'text-xl lg:text-7xl mt-5'}>
                {t(`about.title`)}
              </GradientHeader>
              <p className={'mt-8 lg:text-base'}>{t(`about.text1`)}</p>
              <p className={'mt-4 lg:text-base'}>{t(`about.text2`)}</p>
              <p className={'mt-4 lg:text-base'}>{t(`about.text3`)}</p>
            </div>
            <div>
              <h1
                className={
                  'font-bold text-2xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#44E7FC] to-[#4C36E6] mt-2 lg:mt-5'
                }
              >
                {t(`about.years`)}
              </h1>
              <p className={'mt-4 lg:mt-8'}>{t(`about.text4`)}</p>
              <p className={'mt-4'}>{t(`about.text5`)}</p>
            </div>
          </div>

          <div className={'flex-1 flex flex-col justify-between items-center'}>
            <img
              src={imageNumberOneToDisplay}
              className={'order-2 lg:order-1 w-1/2 lg:w-auto mt-10 lg:mt-0'}
              alt='number-one'
            />
            <img
              src={imageCountriesToDisplay}
              alt='countries'
              className={'order-1 lg:order-2 mt-10'}
            />

            <p className={'order-3 mt-4 text-xs'}>{t(`about.text6`)}</p>
          </div>
        </div>
      </section>

      {/*<section className={'px-3 lg:px-0 mt-10'}>*/}
      {/*  <div className={'container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'}>*/}
      {/*    <Banner*/}
      {/*      className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-3 bg-no-repeat bg-cover px-5 py-5'}*/}
      {/*      image={imgMidBanner1}*/}
      {/*      title={t(`about.banner1Title`)}*/}
      {/*      text={t(`about.banner1Text`)}*/}
      {/*    />*/}
      {/*    <Banner*/}
      {/*      className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-4 bg-no-repeat bg-cover px-5 py-5'}*/}
      {/*      image={imgMidBanner2}*/}
      {/*      title={t(`about.banner2Title`)}*/}
      {/*      text={t(`about.banner2Text`)}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<section className={'flex justify-center px-3 lg:px-0 pb-10 lg:pb-32 mt-10'}>*/}
      {/*  <div className={'container mx-auto bg-mid-banner-2 lg:bg-none rounded-xl relative p-3 lg:p-0'}>*/}
      {/*    <div*/}
      {/*      className={'lg:absolute h-full lg:w-1/3 flex flex-col items-start justify-between py-3 lg:py-10 ps-2 lg:ps-10'}>*/}
      {/*      <div className={'hidden lg:flex border-4 rounded-lg'}>*/}
      {/*        <p className={'text-white font-bold uppercase px-2 py-1 text-xl lg:px-5 lg:py-3'}>*/}
      {/*          <Trans i18nKey="about.takeBack" components={{br: <br/>}}/>*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <h3 className={'text-white font-bold text-sm lg:text-4xl'}>*/}
      {/*          {t(`about.banner3Title`)}*/}
      {/*        </h3>*/}
      {/*        <p className={'text-white text-xs lg:text-base mt-2 lg:mt-5'}>*/}
      {/*          {t(`about.banner3Text`)}*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <NavLink to={'/utility'}>*/}
      {/*        <button*/}
      {/*          className={'bg-yellow-500 px-5 py-1 lg:px-16 lg:py-2 text-xs lg:text-base rounded-full mt-3 lg:mt-0'}>*/}
      {/*          {t(`about.more`)}*/}
      {/*        </button>*/}
      {/*      </NavLink>*/}
      {/*    </div>*/}
      {/*    <img src={bigBanner} className={'rounded-xl hidden lg:block'} alt="banner"/>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </main>
  );
};

export default About;
