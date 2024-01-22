import { Trans, useTranslation } from 'react-i18next'

import m from './deviceCard.module.scss'
import { GetRatingCircles } from 'src/components/common/puffs'

const DeviceCard = ({image, bg, taste}) => {

  const {t} = useTranslation()

  return (
    <div className={m.card}>
      <div className={m.device}>
        <img src={image} alt="taste"/>
      </div>

      <div className={m.background}>
        <img src={bg} alt="taste"/>
      </div>

      <div className={m.info}>
        <h3>
          <Trans i18nKey={`tastes.${taste}.title`} components={{br: <br/>}}/>
        </h3>
        <p className={m.text}>
          <Trans i18nKey={`tastes.${taste}.text`} components={{br: <br/>}}/>
        </p>
        <div className={m.specs}>
          <div>
            <p className={'text-sm text-center mb-2'}>
              {t(`tastes.sweet`)}
            </p>
            {GetRatingCircles(t(`tastes.${taste}.sweet`), 'black')}
          </div>
          <div>
            <p className={'text-sm text-center mb-2'}>
              {t(`tastes.cold`)}
            </p>
            {GetRatingCircles(t(`tastes.${taste}.cold`), 'black')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceCard
