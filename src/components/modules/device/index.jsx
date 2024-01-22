import { NavLink } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

import logo from 'src/assets/images/icons/logo.svg'
import taste from 'src/assets/images/icons/taste.svg'
import liquid from 'src/assets/images/icons/liquid.svg'
import recharge from 'src/assets/images/icons/recharge.svg'
import air from 'src/assets/images/icons/air.svg'

import m from './device.module.scss'

const Device = ({
                  className,
                  image,
                  imageMobile,
                  icon,
                  device,
                  link,
                  description,
                  tastes,
                  hasIndicator,
                  rechargeable,
                  airProof,
                }) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <NavLink to={link} className={'cursor-default'}>
        <div className={m.device}>

          <div className={'absolute h-full'}>
            <div className={'h-full flex flex-col justify-between p-4 pb-7 lg:py-10 lg:ps-10'}>
              <div>
                <div className={'flex items-center text-white'}>
                  <img src={icon} alt="icon"/>
                  <p className={'uppercase line-height-1 ms-2 lg:ms-4 pt-2'}>
                    VUSE<br/>
                    <span className={'font-bold'}>{device}</span>
                  </p>
                </div>

                <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                  <img src={taste} alt="icon"/>
                  <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                    {tastes} {tastes < 5 ? t(`devices.taste`) : t(`devices.tastes`)}
                  </p>
                </div>

                {hasIndicator &&
                  <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                    <img src={liquid} alt="icon"/>
                    <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                      <Trans i18nKey="devices.liquid" components={{br: <br/>}}/>
                    </p>
                  </div>
                }

                {rechargeable &&
                  <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                    <img src={recharge} alt="icon"/>
                    <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                      <Trans i18nKey="devices.recharge" components={{br: <br/>}}/>
                    </p>
                  </div>
                }

                {airProof &&
                  <div className={'flex items-center text-white pt-3 lg:pt-8'}>
                    <img src={air} alt="icon"/>
                    <p className={'font-bold line-height-1 ms-2 lg:ms-4 pt-1'}>
                      <Trans i18nKey="devices.air" components={{br: <br/>}}/>
                    </p>
                  </div>
                }
              </div>

              <div>
                <div className={m.bottom}>
                  <img src={logo} className={'w-1/2 lg:w-auto'} alt="logo"/>
                  <p className={'lg:text-4xl font-bold text-white uppercase mt-2 lg:mt-3'}>
                    {device}
                  </p>
                  <p className={'text-white mt-5 hidden lg:block'}>
                    {description}
                  </p>
                </div>

                <div className={m.more}>
                  <button
                    className={'bg-yellow-500 rounded-full px-5 py-2 transition-colors duration-300 ease-in-out hover:bg-yellow-600'}>
                    {t(`home.more`)}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <img src={image} className={imageMobile ? 'hidden lg:block' : ''} alt="device"/>
          {imageMobile &&
            <img src={imageMobile} className={'lg:hidden'} alt="device"/>
          }
        </div>
      </NavLink>
    </div>
  )
}

export default Device
