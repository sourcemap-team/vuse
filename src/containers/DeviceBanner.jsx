import { IconDevice1500, IconLogoBig, IconTaste } from 'src/assets/icons/index.jsx'
import devices1500 from 'src/assets/images/devices/1500/device-banner.png'

const DeviceBanner = ({className, name, tastes}) => {

  return (
    <div className={className}>
      <div className={'flex p-10'}>
        <div className={'flex flex-1 flex-col justify-between'}>
          <div>
            <IconLogoBig color={'#1E1E1E'}/>
            <h1 className={'text-7xl mt-5'}>
              {name}
            </h1>
            <p className={'mt-8'}>
              При лабораторных испытаниях подтверждено, что устройство может<br/>
              обеспечивать 1500 затяжек продолжительностью 1 секунда с паузами в<br/>
              29 секунд между затяжками.
            </p>
          </div>
          <div>
            <p className={'text-xl'}>
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
                  <p className={'font-bold'}>
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

        <div className={'flex-1'}>
          <img src={devices1500} alt="devices"/>
        </div>
      </div>
    </div>
  )
}

export default DeviceBanner
