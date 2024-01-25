import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'
import GradientText from 'src/components/common/gradientText'
import AnimatedBanner from 'src/components/modules/banner3000'
import GradientHeader from 'src/components/common/gradientHeader'
import DeviceCard from 'src/components/modules/deviceCard'

import device2 from 'src/assets/images/devices/3000/device-taste-2.png'
import device7 from 'src/assets/images/devices/3000/device-taste-7.png'
import device8 from 'src/assets/images/devices/3000/device-taste-8.png'
import device10 from 'src/assets/images/devices/3000/device-taste-10.png'
import device12 from 'src/assets/images/devices/3000/device-taste-12.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import mangoIce from 'src/assets/images/tastes/mango-ice.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'
import icon from 'src/assets/images/icons/device3000.svg'
import banner from 'src/assets/images/devices/3000/device-banner.png'

const Device3000 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center overflow-x-hidden'}>
      <section className={'lg:h-screen'}>
        <DeviceBanner
          className={'container mx-auto'}
          name={t(`devices.device-2.name`)}
          text1={<Trans i18nKey="devices.device-2.text1" components={{br: <br/>}}/>}
          text2={<Trans i18nKey="devices.device-2.text2" components={{br: <br/>}}/>}
          tastes={5}
          icon={icon}
        >
          <AnimatedBanner/>
        </DeviceBanner>
      </section>

      <section className={'w-full'}>
        <GradientText
          topText={<Trans i18nKey={`devices.device-2.topText`} components={{br: <br/>}}/>}
          bottomText={<Trans i18nKey={`devices.device-2.bottomText`} components={{br: <br/>}}/>}
          topGradient={'from-[#FF3778] to-[#000000]'}
          bottomGradient={'from-[#B5CD60] to-[#000000]'}
          image={banner}/>
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`devices.tastesTitle`)}
          </GradientHeader>

          <div className={'grid grid-cols-1 lg:grid-cols-4 gap-10 pt-10'}>
            <DeviceCard image={device2} bg={taste2} specs={[3, 1]} taste={'taste-2'}/>
            <DeviceCard image={device7} bg={taste7} specs={[3, 1]} taste={'taste-7'}/>
            <DeviceCard image={device8} bg={mangoIce} specs={[3, 1]} taste={'mango-ice'}/>
            <DeviceCard image={device10} bg={taste10} specs={[3, 1]} taste={'taste-10'}/>
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

export default Device3000
