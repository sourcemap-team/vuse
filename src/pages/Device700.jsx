import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import DeviceCard from 'src/components/modules/deviceCard'
import device5 from 'src/assets/images/devices/700/device-taste-5.png'
import device6 from 'src/assets/images/devices/700/device-taste-6.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import { useTranslation } from 'react-i18next'
import GradientText from 'src/components/common/gradientText/index.jsx'

const Device700 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center'}>
      <section>
        <DeviceBanner className={'container mx-auto'} name={t(`devices.device-4.name`)} tastes={4}/>
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
            <DeviceCard image={device5} bg={taste5} specs={[3, 1]} taste={'taste-5'}/>
            <DeviceCard image={device6} bg={taste6} specs={[3, 1]} taste={'taste-6'}/>
          </div>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Device700
