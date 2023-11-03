import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import DeviceCard from 'src/components/modules/deviceCard'
import device2 from 'src/assets/images/devices/3000/device-taste-2.png'
import device7 from 'src/assets/images/devices/3000/device-taste-7.png'
import device8 from 'src/assets/images/devices/3000/device-taste-8.png'
import device10 from 'src/assets/images/devices/3000/device-taste-10.png'
import device12 from 'src/assets/images/devices/3000/device-taste-12.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'
import { useTranslation } from 'react-i18next'
import GradientText from 'src/components/common/gradientText/index.jsx'
import AnimatedBanner from 'src/components/modules/banner3000/index.jsx'

const Device3000 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center'}>
      <section>
        <DeviceBanner className={'container mx-auto'} name={t(`devices.device-2.name`)} tastes={4}>
          <AnimatedBanner/>
        </DeviceBanner>
      </section>

      <section className={'w-full'}>
        <GradientText/>
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col lg:flex-row justify-between'}>
            <h2
              className={'text-xl lg:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
              вкусы
            </h2>
            <p className={'lg:hidden text-xs'}>
              В рамках спецификации современных стандартов, интерактивные
              прототипы, которые представляют собой яркий пример
              континентально-европейского типа политической культуры,
            </p>
            <p className={'hidden lg:block text-xs'}>
              В рамках спецификации современных стандартов, интерактивные<br/>
              прототипы, которые представляют собой яркий пример<br/>
              континентально-европейского типа политической культуры,
            </p>
          </div>

          <div className={'grid grid-cols-1 lg:grid-cols-4 gap-10 pt-10'}>
            <DeviceCard image={device2} bg={taste2} specs={[3, 1]} taste={'taste-2'}/>
            <DeviceCard image={device7} bg={taste7} specs={[3, 1]} taste={'taste-7'}/>
            <DeviceCard image={device8} bg={taste8} specs={[3, 1]} taste={'taste-8'}/>
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
