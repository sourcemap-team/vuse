import { Trans, useTranslation } from 'react-i18next'

import m from './taste.module.scss'
import {GetRatingCircles, GetPuffsInfo} from 'src/components/common/puffs'

const Taste = ({image, taste}) => {

  const {t} = useTranslation()

  return (
    <div className={`${m[taste]} ${m.card}`}>
      <div className={m.specs}>
        <p> {t(`tastes.sweet`)} </p>
        {GetRatingCircles(t(`tastes.${taste}.sweet`))}
        <p> {t(`tastes.cold`)} </p>
        {GetRatingCircles(t(`tastes.${taste}.cold`))}
      </div>

      <img src={image} className={m.taste} alt="taste"/>
      <h3 className={m.title}>
        <Trans i18nKey={`tastes.${taste}.title`} components={{br: <br/>}}/>
      </h3>
      <p className={m.text}>
        <Trans i18nKey={`tastes.${taste}.text`} components={{br: <br/>}}/>
      </p>

      <div className={m.puffs}>
        {GetPuffsInfo(t(`tastes.${taste}.puffs`, { returnObjects: true }))}
      </div>
    </div>
  )
}

export default Taste
