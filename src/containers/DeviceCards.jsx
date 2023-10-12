import DeviceCard from 'src/components/modules/deviceCard'
import device1 from 'src/assets/images/devices//1500/device-taste-1.png'
import device2 from 'src/assets/images/devices//1500/device-taste-2.png'
import device3 from 'src/assets/images/devices//1500/device-taste-3.png'
import device4 from 'src/assets/images/devices//1500/device-taste-4.png'
import device5 from 'src/assets/images/devices//1500/device-taste-5.png'
import device6 from 'src/assets/images/devices//1500/device-taste-6.png'
import device7 from 'src/assets/images/devices//1500/device-taste-7.png'
import device8 from 'src/assets/images/devices//1500/device-taste-8.png'
import device9 from 'src/assets/images/devices//1500/device-taste-9.png'
import device10 from 'src/assets/images/devices//1500/device-taste-10.png'
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

const Tastes = ({className}) => {

  return (
    <div className={className}>
      <div className={'flex justify-between'}>
        <h2 className={'text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
          вкусы
        </h2>
        <p className={'text-xs'}>
          В рамках спецификации современных стандартов, интерактивные<br/>
          прототипы, которые представляют собой яркий пример<br/>
          континентально-европейского типа политической культуры,
        </p>
      </div>

      <div className={'columns-4 gap-10 pt-10'}>
        <DeviceCard image={device1} bg={taste1} specs={[3, 1]} taste={'taste-1'}/>
        <DeviceCard image={device2} bg={taste2} specs={[3, 1]} taste={'taste-2'}/>
        <DeviceCard image={device3} bg={taste3} specs={[3, 1]} taste={'taste-3'}/>
        <DeviceCard image={device4} bg={taste4} specs={[3, 1]} taste={'taste-4'}/>
      </div>
      <div className={'columns-4 gap-10 pt-10'}>
        <DeviceCard image={device5} bg={taste5} specs={[3, 1]} taste={'taste-5'}/>
        <DeviceCard image={device6} bg={taste6} specs={[3, 1]} taste={'taste-6'}/>
        <DeviceCard image={device7} bg={taste7} specs={[3, 1]} taste={'taste-7'}/>
        <DeviceCard image={device8} bg={taste8} specs={[3, 1]} taste={'taste-8'}/>
      </div>
      <div className={'columns-4 gap-10 pt-10'}>
        <DeviceCard image={device9} bg={taste9} specs={[3, 1]} taste={'taste-9'}/>
        <DeviceCard image={device10} bg={taste10} specs={[3, 1]} taste={'taste-10'}/>
      </div>
    </div>
  )
}

export default Tastes
