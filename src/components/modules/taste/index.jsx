import { Trans, useTranslation } from 'react-i18next'

import m from './taste.module.scss'
import {GetRatingCircles, GetPuffsInfo} from 'src/components/common/puffs'

const Taste = ({image, specs, puffs, taste}) => {

  const {t} = useTranslation()

  return (
    <div className={`${m[taste]} ${m.card}`}>
      <div className={m.specs}>
        <p> {t(`tastes.sweet`)} </p>
        {GetRatingCircles(specs[0])}
        <p> {t(`tastes.cold`)} </p>
        {GetRatingCircles(specs[1])}
      </div>

      <img src={image} className={m.taste} alt="taste"/>
      <h3 className={m.title}>
        <Trans i18nKey={`tastes.${taste}.title`} components={{br: <br/>}}/>
      </h3>
      <p className={m.text}>
        {t(`tastes.${taste}.text`)}
      </p>

      <div className={m.puffs}>
        {GetPuffsInfo(puffs)}
      </div>
    </div>
  )
}

export default Taste
