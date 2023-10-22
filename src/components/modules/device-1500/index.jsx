import { useTranslation } from 'react-i18next'

import { IconDevice1500, IconLogo, IconTaste } from 'src/assets/icons/index.jsx'
import device from 'src/assets/images/devices/1500/device-main.png'
import m from "../device-1500/device.module.scss";
import { NavLink } from 'react-router-dom'

const Device1500 = () => {

  const {t} = useTranslation()

  return (
    <div className={m.device}>

      <div className={'absolute h-full'}>
        <div className={'h-full flex flex-col justify-between py-10 ps-10'}>
          <div>
            <div className={'flex items-center text-white'}>
              <IconDevice1500 color={'#fff'}/>
              <p className={'uppercase line-height-1 ms-4 pt-2'}>
                VUSE<br/>
                <span className={'font-bold'}>{t('devices.device-3')}</span>
              </p>
            </div>

            <div className={'flex items-center text-white pt-8'}>
              <IconTaste color={'#fff'}/>
              <p className={'font-bold line-height-1 ms-4 pt-1'}>
                12 {t('devices.tastes')}
              </p>
            </div>
          </div>

          <div>
            <div className={m.bottom}>
              <IconLogo color={'white'}/>
              <p className={'text-4xl text-white uppercase mt-3'}>
                {t('devices.device-3')}
              </p>
              <p className={'text-white mt-5'}>
                {t('devices.description')}
              </p>
            </div>
            <div className={m.more}>
              <NavLink to="/device-1500">
                <button className={'bg-yellow-500 rounded-full px-5 py-2'}>
                  Подробнее
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <img src={device} alt="device"/>
    </div>
  )
}

export default Device1500
