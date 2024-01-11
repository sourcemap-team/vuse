import { useTranslation } from 'react-i18next'
import Device from 'src/components/modules/device'

import device5000 from 'src/assets/images/devices/5000/device-5000.png'
import device5000Mobile from 'src/assets/images/devices/5000/device-5000-mobile.png'
import device3000 from 'src/assets/images/devices/3000/device-3000.png'
import device1500 from 'src/assets/images/devices/1500/device-1500.png'
import device700 from 'src/assets/images/devices/700/device-700.png'
import device500 from 'src/assets/images/devices/500/device-500.png'
import device5000icon from 'src/assets/images/icons/device5000-white.svg'
import device3000icon from 'src/assets/images/icons/device3000-white.svg'
import device1500icon from 'src/assets/images/icons/device1500-white.svg'
import device700icon from 'src/assets/images/icons/device700-white.svg'
import device500icon from 'src/assets/images/icons/device500-white.svg'
import GradientHeader from '../components/common/gradientHeader'

const Devices = ({className}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <GradientHeader className={'text-xl lg:text-6xl py-2'}>
        {t(`devices.title`)}
      </GradientHeader>

      <div>
        <Device
          className={'pt-8'}
          image={device5000}
          imageMobile={device5000Mobile}
          icon={device5000icon}
          link={'device-5000'}
          device={t('devices.device-1.name')}
          description={t('devices.device-1.description')}
          tastes={5}
          hasIndicator
          rechargeable
        />
      </div>

      <div className={'columns-1 lg:columns-2 gap-8'}>
        <Device
          className={'pt-8'}
          image={device3000}
          icon={device3000icon}
          link={'device-3000'}
          device={t('devices.device-2.name')}
          description={t('devices.device-2.description')}
          tastes={5}
          hasIndicator
          rechargeable
        />

        <Device
          className={'pt-8'}
          image={device1500}
          icon={device1500icon}
          link={'device-1500'}
          device={t('devices.device-3.name')}
          description={t('devices.device-3.description')}
          tastes={11}
        />
      </div>

      <div className={'columns-1 lg:columns-2 gap-8'}>
        <Device
          className={'pt-8'}
          image={device700}
          icon={device700icon}
          link={'device-700'}
          device={t('devices.device-4.name')}
          description={t('devices.device-4.description')}
          tastes={2}
          airProof
        />

        <Device
          className={'pt-8'}
          image={device500}
          icon={device500icon}
          link={'device-500'}
          device={t('devices.device-5.name')}
          description={t('devices.device-5.description')}
          tastes={4}
        />
      </div>
    </div>
  )
}

export default Devices
