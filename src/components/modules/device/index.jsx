import { NavLink } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

import { IconAir, IconDevice5000, IconLiquid, IconRecharge, IconTaste } from 'src/assets/icons/index.jsx'
import logo from 'src/assets/images/icons/logo.svg'
import m from './device.module.scss'

const Device = ({className, image, imageMobile, device, link, description, tastes, hasIndicator, rechargeable, airProof}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <div className={m.device}>

        <div className={'absolute h-full'}>
          <div className={'h-full flex flex-col justify-between p-4 pb-7 lg:py-10 lg:ps-10'}>
            <div>
              <div className={'flex items-center text-white'}>
                <IconDevice5000 color={'#fff'}/>
                <p className={'uppercase line-height-1 ms-2 lg:ms-4 pt-2'}>
                  VUSE<br/>
                  <span className={'font-bold'}>{device}</span>
                </p>
              </div>

              <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                <IconTaste color={'#fff'}/>
                <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                  {tastes} {t('devices.tastes')}
                </p>
              </div>

              {hasIndicator &&
                <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                  <IconLiquid color={'#fff'}/>
                  <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                    <Trans i18nKey="devices.liquid" components={{br: <br/>}}/>
                  </p>
                </div>
              }

              {rechargeable &&
                <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                  <IconRecharge color={'#fff'}/>
                  <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                    <Trans i18nKey="devices.recharge" components={{br: <br/>}}/>
                  </p>
                </div>
              }

              {airProof &&
                <div className={'flex items-center text-white pt-8'}>
                  <IconAir color={'#fff'}/>
                  <p className={'font-bold line-height-1 ms-4 pt-1'}>
                    <Trans i18nKey="devices.air" components={{br: <br/>}}/>
                  </p>
                </div>
              }
            </div>

            <div>
              <div className={m.bottom}>
                <img src={logo} className={'w-1/2 lg:w-auto'} alt="logo"/>
                <p className={'lg:text-4xl text-white uppercase mt-2 lg:mt-3'}>
                  {device}
                </p>
                <p className={'text-white mt-5 hidden lg:block'}>
                  {description}
                </p>
              </div>

              <div className={m.more}>
                <NavLink to={link}>
                  <button className={'bg-yellow-500 rounded-full px-5 py-2'}>
                    Подробнее
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <img src={image} className={imageMobile ? 'hidden lg:block' : ''} alt="device"/>
        {imageMobile &&
          <img src={imageMobile} className={'lg:hidden'} alt="device"/>
        }
      </div>
    </div>
  )
}

export default Device
