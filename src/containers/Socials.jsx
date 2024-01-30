import { useTranslation } from 'react-i18next';

import robot from 'src/assets/images/icons/robot.svg';
import telegram from 'src/assets/images/icons/telegram.svg';
import instagram from 'src/assets/images/icons/instagram.svg';
import social1 from 'src/assets/images/social-1.png';
import social2 from 'src/assets/images/social-2.png';
import social3 from 'src/assets/images/social-3.png';
import SocialsPost from '../components/common/socialsPost';

const Tastes = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className={'flex flex-col lg:flex-row justify-between items-center'}>
        <h2 className={'lg:text-6xl uppercase py-2'}>{t('social.title')}</h2>
        <div className={'flex gap-5'}>
          <p className={'text-xl uppercase'}>{t('social.text')}</p>
          {/* <a href="https://t.me/vuse_uz_bot" target={'_blank'}>
            <img src={robot} alt="social"/>
          </a>
          <a href="https://t.me/+n_xP7bHGuf9iZGM6" target={'_blank'}>
            <img src={telegram} alt="social"/>
          </a> */}
          <a
            href='https://www.instagram.com/vuse.uz/?igshid=MzRlODBiNWFlZA%3D%3D'
            target={'_blank'}
          >
            <img src={instagram} alt='social' />
          </a>
        </div>
      </div>

      {/* <div className={'flex flex-col lg:flex-row gap-5 pt-10'}>
        <div>
          <SocialsPost
            image={social1}
            text={t('social.post1')}
            link={t('social.link1')}
          />
        </div>
        <div>
          <SocialsPost
            image={social2}
            text={t('social.post2')}
            link={t('social.link2')}
          />
        </div>
        <div>
          <SocialsPost
            image={social3}
            text={t('social.post3')}
            link={t('social.link3')}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Tastes;
