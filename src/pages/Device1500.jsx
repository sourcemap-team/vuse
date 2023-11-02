import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import DeviceCard from 'src/components/modules/deviceCard'
import device1 from 'src/assets/images/devices/1500/device-taste-1.png'
import device2 from 'src/assets/images/devices/1500/device-taste-2.png'
import device3 from 'src/assets/images/devices/1500/device-taste-3.png'
import device4 from 'src/assets/images/devices/1500/device-taste-4.png'
import device5 from 'src/assets/images/devices/1500/device-taste-5.png'
import device6 from 'src/assets/images/devices/1500/device-taste-6.png'
import device7 from 'src/assets/images/devices/1500/device-taste-7.png'
import device8 from 'src/assets/images/devices/1500/device-taste-8.png'
import device9 from 'src/assets/images/devices/1500/device-taste-9.png'
import device10 from 'src/assets/images/devices/1500/device-taste-10.png'
import device11 from 'src/assets/images/devices/1500/device-taste-11.png'
import device12 from 'src/assets/images/devices/1500/device-taste-12.png'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste3 from 'src/assets/images/tastes/taste-3.png'
import taste4 from 'src/assets/images/tastes/taste-4.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste9 from 'src/assets/images/tastes/taste-9.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste11 from 'src/assets/images/tastes/taste-11.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'
import { useTranslation } from 'react-i18next'
import GradientText from 'src/components/common/gradientText/index.jsx'

const Device1500 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center'}>
      <section>
        <DeviceBanner className={'container mx-auto'} name={t(`devices.device-3.name`)} tastes={4}/>
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
            <DeviceCard image={device1} bg={taste1} specs={[3, 1]} taste={'taste-1'}/>
            <DeviceCard image={device2} bg={taste2} specs={[3, 1]} taste={'taste-2'}/>
            <DeviceCard image={device3} bg={taste3} specs={[3, 1]} taste={'taste-3'}/>
            <DeviceCard image={device4} bg={taste4} specs={[3, 1]} taste={'taste-4'}/>
            <DeviceCard image={device5} bg={taste5} specs={[3, 1]} taste={'taste-5'}/>
            <DeviceCard image={device6} bg={taste6} specs={[3, 1]} taste={'taste-6'}/>
            <DeviceCard image={device7} bg={taste7} specs={[3, 1]} taste={'taste-7'}/>
            <DeviceCard image={device8} bg={taste8} specs={[3, 1]} taste={'taste-8'}/>
            <DeviceCard image={device9} bg={taste9} specs={[3, 1]} taste={'taste-9'}/>
            <DeviceCard image={device10} bg={taste10} specs={[3, 1]} taste={'taste-10'}/>
            <DeviceCard image={device11} bg={taste11} specs={[3, 1]} taste={'taste-11'}/>
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

export default Device1500
