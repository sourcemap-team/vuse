import { useTranslation } from 'react-i18next'
import Device from 'src/components/modules/device/index.jsx'

import device5000 from 'src/assets/images/devices/5000/device-5000.png'
import device5000Mobile from 'src/assets/images/devices/5000/device-5000-mobile.png'
import device3000 from 'src/assets/images/devices/3000/device-3000.png'
import device1500 from 'src/assets/images/devices/1500/device-1500.png'
import device700 from 'src/assets/images/devices/700/device-700.png'
import device500 from 'src/assets/images/devices/500/device-500.png'

const Devices = ({className}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <h2
        className={'text-xl lg:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        {t('devices.title')}
      </h2>

      <div className={'lg:pt-10'}>
        <Device
          className={'pt-8'}
          image={device5000}
          imageMobile={device5000Mobile}
          link={'device-5000'}
          device={t('devices.device-1')}
          description={t('devices.description')}
          tastes={5}
          hasIndicator
          rechargeable
        />
      </div>

      <div className={'columns-1 lg:columns-2 gap-8'}>
        <Device
          className={'pt-8'}
          image={device3000}
          link={'device-3000'}
          device={t('devices.device-2')}
          description={t('devices.description')}
          tastes={5}
          hasIndicator
          rechargeable
        />

        <Device
          className={'pt-8'}
          image={device1500}
          link={'device-1500'}
          device={t('devices.device-3')}
          description={t('devices.description')}
          tastes={11}
        />
      </div>

      <div className={'columns-1 lg:columns-2 gap-8'}>
        <Device
          className={'pt-8'}
          image={device700}
          link={'device-700'}
          device={t('devices.device-4')}
          description={t('devices.description')}
          tastes={2}
          airProof
        />

        <Device
          className={'pt-8'}
          image={device500}
          link={'device-500'}
          device={t('devices.device-5')}
          description={t('devices.description')}
          tastes={4}
        />
      </div>
    </div>
  )
}

export default Devices
