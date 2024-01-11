import { useTranslation } from 'react-i18next'

import logo from 'src/assets/images/icons/logo-black.svg'
import taste from 'src/assets/images/icons/taste-black.svg'

const DeviceBanner = ({className, icon, name, text1, text2, tastes, children}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <div className={'grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-0 py-10'}>
        <div className={'flex order-2 lg:order-1 flex-col justify-between'}>
          <div>
            <div className={'w-1/3 lg:w-auto'}>
              <img src={logo} alt="logo"/>
            </div>
            <h1 className={'text-2xl uppercase lg:text-7xl mt-2 lg:mt-5'}>
              {name}
            </h1>
            <p className={'text-sm mt-8'}>
              {text1}
            </p>
          </div>
          <div className={'mt-8 lg:mt-0'}>
            <p>
              {text2}
            </p>
            <div className={'flex items-center gap-10 mt-10'}>
              <div className={'flex items-center gap-3'}>
                <img src={icon} alt="icon"/>
                <div className={'pt-1'}>
                  <p>
                    {t(`devices.brand`)}
                  </p>
                  <p className={'font-bold uppercase'}>
                    {name}
                  </p>
                </div>
              </div>
              <div className={'flex items-center gap-3'}>
                <img src={taste} alt="taste"/>
                <p className={'font-bold'}>
                  {tastes} {tastes < 5 ? t(`devices.taste`) : t(`devices.tastes`)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'h-full hidden lg:block order-1 lg:order-2 mb-10 lg:mb-0'}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DeviceBanner
