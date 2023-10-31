import logo from 'src/assets/images/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import robot from 'src/assets/images/icons/robot-white.svg'
import telegram from 'src/assets/images/icons/telegram-white.svg'
import instagram from 'src/assets/images/icons/instagram-white.svg'

const Footer = () => {
  return (
    <div className={'flex flex-col lg:flex-row bg-black text-white p-10 lg:gap-56'}>
      <div className={'flex flex-col justify-between'}>
        <div>
          <img src={logo} alt="logo"/>
          <p className={'text-gray-500 mt-3'}>© 2023</p>
        </div>
        <div>
          <div className={'flex gap-8 mt-5'}>
            <a href='https://t.me/vuse_uz_bot' target={'_blank'}>
              <img src={robot} alt="social"/>
            </a>
            <a href='https://t.me/+n_xP7bHGuf9iZGM6' target={'_blank'}>
              <img src={telegram} alt="social"/>
            </a>
            <a href='https://www.instagram.com/vuse.uz/?igshid=MzRlODBiNWFlZA%3D%3D' target={'_blank'}>
              <img src={instagram} alt="social"/>
            </a>
          </div>
          <div className={'mt-5'}>
            <a href="https://vuse.com" className={'text-gray-500'} target={'_blank'}>vuse.com</a>
          </div>
        </div>
      </div>
      <div>
        <div className={'mt-3'}>
          <p className={'text-2xl'}>
            Полезные ссылки
          </p>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/service'}>
            Часто задаваемые вопросы
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/contacts'}>
            Контакты
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/service'}>
            Где купить
          </NavLink>
        </div>
      </div>

      <div>
        <div className={'mt-3'}>
          <p className={'text-2xl'}>
            Юридическая информация
          </p>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/health'}>
            Политика в отношении обработки<br/>персональных
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/differences'}>
            Согласие на обработку<br/>персональных данных
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/'}>
            Политика cookies
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/'}>
            Пользовательское соглашение
          </NavLink>
        </div>
      </div>

      <div>
        <div className={'mt-3'}>
          <p className={'text-2xl'}>
            Наши устройства
          </p>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/device-500'}>
            Vuse Go 500
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/device-700'}>
            Vuse Go 700
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/device-1500'}>
            Vuse Go Max 1500
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/device-3000'}>
            Vuse 3000
          </NavLink>
        </div>
        <div className={'mt-3'}>
          <NavLink to={'/device-5000'}>
            Vuse 5000
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
