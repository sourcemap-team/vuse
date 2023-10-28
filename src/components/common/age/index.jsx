import { useTranslation } from "react-i18next";

import age from 'src/assets/images/icons/age.svg'

const Age = () => {

  const {t} = useTranslation()

  return (
    <div className={'sticky bottom-0 z-50'}>
      <div className={'flex items-center justify-center bg-primary py-1 px-3'}>
        <img src={age} className={'me-3'} alt="age"/>
        <p className={'text-white text-xs lg:text-md uppercase'}>
          {t(`age`)}
        </p>
      </div>
    </div>
  )
}
export default Age
