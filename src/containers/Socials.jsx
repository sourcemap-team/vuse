import { useTranslation } from 'react-i18next'

import robot from 'src/assets/images/icons/robot.svg'
import telegram from 'src/assets/images/icons/telegram.svg'
import instagram from 'src/assets/images/icons/instagram.svg'
import social1 from 'src/assets/images/social-1.png'
import social2 from 'src/assets/images/social-2.png'
import social3 from 'src/assets/images/social-3.png'
import SocialsPost from '../components/common/socialsPost/index.jsx'

const Tastes = ({className}) => {

  const {t} = useTranslation()

  return (
    <div className={className}>
      <div className={'flex flex-col lg:flex-row justify-between items-center'}>
        <h2 className={'lg:text-6xl uppercase py-2'}>
          {t('social.title')}
        </h2>
        <div className={'flex gap-5'}>
          <p className={'text-xl uppercase'}>
            {t('social.text')}
          </p>
          <a href="https://t.me/vuse_uz_bot" target={'_blank'}>
            <img src={robot} alt="social"/>
          </a>
          <a href="https://t.me/+n_xP7bHGuf9iZGM6" target={'_blank'}>
            <img src={telegram} alt="social"/>
          </a>
          <a href="https://www.instagram.com/vuse.uz/?igshid=MzRlODBiNWFlZA%3D%3D" target={'_blank'}>
            <img src={instagram} alt="social"/>
          </a>
        </div>
      </div>

      <div className={'flex flex-col lg:flex-row gap-5 pt-10'}>
        <div>
          <SocialsPost image={social1} text={'Еще больше эмоций! Уже скоро… 🚀'} link={'https://www.instagram.com/p/CyVV1rgMmvj/'}/>
        </div>
        <div>
          <SocialsPost image={social2} text={'Скоро! Самая крутая вечеринка We use party'} link={'https://www.instagram.com/p/CzEL2JkoVZu/'}/>
        </div>
        <div>
          <SocialsPost image={social3} text={'Новости, которые вы ждали 😍'} link={'https://www.instagram.com/p/Cy_LzQSIa1M/'}/>
        </div>
      </div>
    </div>
  )
}

export default Tastes
