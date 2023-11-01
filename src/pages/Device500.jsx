import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import DeviceCard from 'src/components/modules/deviceCard'
import device1 from 'src/assets/images/devices/500/device-taste-1.png'
import device2 from 'src/assets/images/devices/500/device-taste-2.png'
import device8 from 'src/assets/images/devices/500/device-taste-8.png'
import device12 from 'src/assets/images/devices/500/device-taste-12.png'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'

const Device500 = () => {

  const colors = [
    '#BE80EB',
    '#F28C8C',
    '#FFE768',
    '#DF484F',
    '#4BB1D0',
    '#DBB942',
    '#C84A3B',
    '#4B56AF',
  ]

  return (
    <main className={'flex flex-col items-center'}>
      <section>
        <DeviceBanner className={'container mx-auto'} name={'GO 500'} tastes={4}/>
      </section>

      <section className={'w-full'}>
        <div className={'flex items-center justify-center bg-primary h-screen'}>
          <div
            className={'text-xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#7E3CFF] via-[#AE64E4] to-[#FF8BA0]'}>
            <p>
              Его выбирают<br/>
              за айдентику,<br/>
              насыщенность
            </p>
            <div className={'flex items-center justify-center gap-3'}>
              <p className={'me-3'}>вкусов</p>
              <div className={'hidden lg:flex gap-3'}>
              {colors.map((color, i) =>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" key={i}>
                  <circle cx="22.4044" cy="22.4044" r="22.4044" fill={color}/>
                </svg>,
              )}
              </div>
            </div>
            <p>
              и удобство<br/>
              использования
            </p>
          </div>
        </div>
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col lg:flex-row justify-between'}>
            <h2
              className={'text-xl lg:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
              вкусы
            </h2>
            <p className={'text-xs'}>
              В рамках спецификации современных стандартов, интерактивные<br/>
              прототипы, которые представляют собой яркий пример<br/>
              континентально-европейского типа политической культуры,
            </p>
          </div>

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
