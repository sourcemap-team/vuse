import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import DeviceBanner from 'src/containers/DeviceBanner.jsx';
import FAQ from 'src/containers/FAQ.jsx';
import DeviceCard from 'src/components/modules/deviceCard';
import GradientText from 'src/components/common/gradientText';
import AnimatedBanner from 'src/components/modules/banner700';
import GradientHeader from 'src/components/common/gradientHeader';

import deviceCreamyTobacco from 'src/assets/images/devices/700/device-creamy-tobacco.png';
import deviceSpearmintIce from 'src/assets/images/devices/700/device-spearmint-ice.png';
import deviceBerryWatermelon from 'src/assets/images/devices/700/device-berry-watermelon.png';
import deviceBlueberryIce from 'src/assets/images/devices/700/device-blueberry-ice.png';
import deviceMangoIce from 'src/assets/images/devices/700/device-mango-ice.png';
import deviceStrawberryIce from 'src/assets/images/devices/700/device-strawberry-ice.png';

import creamyTobacco from 'src/assets/images/tastes/creamy-tobacco.png';
import spearmintIce from 'src/assets/images/tastes/spearmint-ice.png';
import berryWatermelonTaste from 'src/assets/images/tastes/compressed/watermelon-ice.png';
import blueberryIceTaste from 'src/assets/images/tastes/compressed/berry-ice.png';
import mangoIceTaste from 'src/assets/images/tastes/compressed/mango-ice.png';
import strawberryIceTaste from 'src/assets/images/tastes/compressed/strawberry-kiwi.png';

import icon from 'src/assets/images/icons/device700.svg';
import banner from 'src/assets/images/devices/700/device-banner.png';

const Device700 = () => {
  const { t } = useTranslation();

  return (
    <main className={'flex flex-col items-center overflow-x-hidden'}>
      <section className={'lg:h-screen'}>
        <DeviceBanner
          className={'container mx-auto'}
          name={t(`devices.device-4.name`)}
          text1={
            <Trans
              i18nKey='devices.device-4.text1'
              components={{ br: <br /> }}
            />
          }
          text2={
            <Trans
              i18nKey='devices.device-4.text2'
              components={{ br: <br /> }}
            />
          }
          tastes={6}
          icon={icon}
        >
          <AnimatedBanner />
        </DeviceBanner>
      </section>

      <section className={'w-full'}>
        <GradientText
          topText={
            <Trans
              i18nKey={`devices.device-4.topText`}
              components={{ br: <br /> }}
            />
          }
          bottomText={
            <Trans
              i18nKey={`devices.device-4.bottomText`}
              components={{ br: <br /> }}
            />
          }
          topGradient={'from-[#FFA471] to-[#000000]'}
          bottomGradient={'from-[#2B9CAB] to-[#000000]'}
          image={banner}
        />
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`devices.tastesTitle`)}
          </GradientHeader>

          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 pt-2'
            }
          >
            <DeviceCard
              className='max-w-full'
              image={deviceCreamyTobacco}
              bg={creamyTobacco}
              specs={[3, 1]}
              taste={'creamy-tobacco'}
            />
            <DeviceCard
              className='max-w-full'
              image={deviceSpearmintIce}
              bg={spearmintIce}
              specs={[3, 1]}
              taste={'spearmint-ice'}
            />
            <DeviceCard
              className='max-w-full'
              image={deviceBerryWatermelon}
              bg={berryWatermelonTaste}
              specs={[3, 1]}
              taste={'watermelon-ice'}
            />
            <DeviceCard
              className='max-w-full'
              image={deviceBlueberryIce}
              bg={blueberryIceTaste}
              specs={[3, 1]}
              taste={'berry-ice'}
            />
            <DeviceCard
              className='max-w-full'
              image={deviceMangoIce}
              bg={mangoIceTaste}
              specs={[3, 1]}
              taste={'mango-ice'}
            />
            <DeviceCard
              className='max-w-full'
              image={deviceStrawberryIce}
              bg={strawberryIceTaste}
              specs={[3, 1]}
              taste={'strawberry-kiwi'}
            />
          </div>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'} />
      </section>
    </main>
  );
};

export default Device700;
