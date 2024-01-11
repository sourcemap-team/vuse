import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'
import AnimatedBanner from 'src/components/modules/banner500'
import GradientHeader from 'src/components/common/gradientHeader'
import DeviceCard from 'src/components/modules/deviceCard'

import device1 from 'src/assets/images/devices/500/device-taste-1.png'
import device2 from 'src/assets/images/devices/500/device-taste-2.png'
import device8 from 'src/assets/images/devices/500/device-taste-8.png'
import device12 from 'src/assets/images/devices/500/device-taste-12.png'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'
import icon from 'src/assets/images/icons/device500.svg'
import GradientText from 'src/components/common/gradientText/index.jsx'
import banner from 'src/assets/images/devices/500/device-banner.png'

const Device500 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center overflow-x-hidden'}>
      <section className={'lg:h-screen'}>
        <DeviceBanner
          className={'container mx-auto'}
          name={t(`devices.device-5.name`)}
          text1={<Trans i18nKey="devices.device-5.text1" components={{br: <br/>}}/>}
          text2={<Trans i18nKey="devices.device-5.text2" components={{br: <br/>}}/>}
          tastes={4}
          icon={icon}
        >
          <AnimatedBanner/>
        </DeviceBanner>
      </section>

      <section className={'w-full'}>
        <GradientText
          topText={<Trans i18nKey={`devices.device-5.topText`} components={{br: <br/>}}/>}
          bottomText={<Trans i18nKey={`devices.device-5.bottomText`} components={{br: <br/>}}/>}
          topGradient={'from-[#4B6EBD] to-[#000000]'}
          bottomGradient={'from-[#2B9CAB] to-[#000000]'}
          image={banner}/>
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`devices.tastesTitle`)}
          </GradientHeader>

          <div className={'grid grid-cols-1 lg:grid-cols-4 gap-10 pt-10'}>
            <DeviceCard image={device1} bg={taste1} specs={[3, 1]} taste={'taste-1'}/>
            <DeviceCard image={device2} bg={taste2} specs={[3, 1]} taste={'taste-2'}/>
            <DeviceCard image={device8} bg={taste8} specs={[3, 1]} taste={'taste-8'}/>
            <DeviceCard image={device12} bg={taste12} specs={[3, 1]} taste={'taste-12'}/>
          </div>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Device500
