import logo from 'src/assets/images/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import robot from 'src/assets/images/icons/robot-white.svg';
import telegram from 'src/assets/images/icons/telegram-white.svg';
import instagram from 'src/assets/images/icons/instagram-white.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'grid grid-cols-1 lg:grid-cols-4 bg-black text-white p-10 lg:gap-40'
      }
    >
      <div className={'flex flex-col justify-between'}>
        <div>
          <img src={logo} alt='logo' />
          <p className={'text-gray-500 mt-3'}>© 2024</p>
        </div>
        <div>
          <div className={'flex gap-8 mt-5'}>
            {/* <a
              href='https://t.me/vuse_uz_bot'
              target={'_blank'}
              rel='noreferrer'
            >
              <img src={robot} alt='social' />
            </a>
            <a
              href='https://t.me/+n_xP7bHGuf9iZGM6'
              target={'_blank'}
              rel='noreferrer'
            >
              <img src={telegram} alt='social' />
            </a> */}
            <a
              href='https://www.instagram.com/vuse.arm?igsh=MzRlODBiNWFlZA=='
              target={'_blank'}
              rel='noreferrer'
            >
              <img src={instagram} alt='social' />
            </a>
          </div>
          <div className={'mt-5'}>
            <a
              href='https://vuse.com'
              className={'text-gray-500'}
              target={'_blank'}
              rel='noreferrer'
            >
              vuse.com
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className={'mt-3'}>
          <p className={'text-xl whitespace-nowrap'}>
            {t(`footer.block1Title`)}
          </p>
        </div>
        <div
          className={
            'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'
          }
        >
          <NavLink to={'/contacts#faq'}>{t(`footer.block1Link1`)}</NavLink>
        </div>
        <div
          className={
            'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'
          }
        >
          <NavLink to={'/contacts'}>{t(`footer.block1Link2`)}</NavLink>
        </div>
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/service'}>*/}
        {/*    {t(`footer.block1Link3`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/health'}>*/}
        {/*    {t(`footer.block1Link4`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
      </div>

      <div>
        <div className={'mt-3'}>
          <p className={'text-xl whitespace-nowrap'}>
            {t(`footer.block2Title`)}
          </p>
        </div>
        <div
          className={
            'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'
          }
        >
          <NavLink to={'/cookies'}>{t(`footer.block2Link1`)}</NavLink>
        </div>
        {/* <div
          className={
            'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'
          }
        >
          <NavLink to={'/privacy'}>{t(`footer.block2Link2`)}</NavLink>
        </div> */}
      </div>

      <div>
        <div className={'mt-3'}>
          <p className={'text-xl whitespace-nowrap'}>
            {t(`footer.block3Title`)}
          </p>
        </div>
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/device-500'}>*/}
        {/*    {t(`footer.block3Link1`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        <div
          className={
            'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'
          }
        >
          <NavLink to={'/device-700'}>{t(`footer.block3Link2`)}</NavLink>
        </div>
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/device-1500'}>*/}
        {/*    {t(`footer.block3Link3`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/device-3000'}>*/}
        {/*    {t(`footer.block3Link4`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        {/*<div className={'text-gray-400 hover:text-white transition-colors duration-200 ease-in-out text-sm mt-3'}>*/}
        {/*  <NavLink to={'/device-5000'}>*/}
        {/*    {t(`footer.block3Link5`)}*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Footer;
