import { IconDevice1500, IconTaste } from 'src/assets/icons/index.jsx'

import logo from 'src/assets/images/icons/logo-black.svg'

const DeviceBanner = ({className, name, tastes, children}) => {

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
              При лабораторных испытаниях подтверждено, что устройство может<br/>
              обеспечивать 1500 затяжек продолжительностью 1 секунда с паузами в<br/>
              29 секунд между затяжками.
            </p>
          </div>
          <div className={'mt-8 lg:mt-0'}>
            <p>
              Значимость этих проблем настолько очевидна, что выбранный<br/>
              нами инновационный путь предполагает независимые способы<br/>
              реализации модели развития. Таким образом, высококачественный<br/>
              прототип будущего проекта предполагает независимые способы<br/>
              реализации укрепления моральных ценностей.
            </p>
            <div className={'flex items-center gap-10 mt-10'}>
              <div className={'flex items-center gap-3'}>
                <IconDevice1500 color={'#1E1E1E'}/>
                <div className={'pt-1'}>
                  <p>
                    VUSE
                  </p>
                  <p className={'font-bold uppercase'}>
                    {name}
                  </p>
                </div>
              </div>
              <div className={'flex items-center gap-3'}>
                <IconTaste color={'#1E1E1E'}/>
                <p className={'font-bold'}>
                  {tastes} {tastes > 4 ? 'вкусов' : 'вкуса'}
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
