import { useTranslation } from 'react-i18next'
import Device5000 from 'src/components/modules/device-5000/index.jsx'
import Device3000 from "../components/modules/device-3000/index.jsx";
import Device1500 from "../components/modules/device-1500/index.jsx";
import Device700 from "../components/modules/device-700/index.jsx";
import Device500 from "../components/modules/device-500/index.jsx";

const Devices = ({className}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <h2 className={'text-xl lg:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        {t('devices.title')}
      </h2>

      <div className={'lg:pt-10'}>
        <Device5000/>
      </div>

      <div className={'columns-1 lg:columns-2 gap-8 pt-8'}>
        <Device3000/>
        <Device1500/>
      </div>

      <div className={'columns-1 lg:columns-2 gap-8 pt-8'}>
        <Device700/>
        <Device500/>
      </div>
    </div>
  )
}

export default Devices
