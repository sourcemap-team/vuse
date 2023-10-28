import logo from 'src/assets/images/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import { IconInstagram, IconRobot, IconTelegram } from 'src/assets/icons/index.jsx'

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
            <NavLink to="/">
              <IconRobot color={'white'}/>
            </NavLink>
            <NavLink to="/">
              <IconTelegram color={'white'}/>
            </NavLink>
            <NavLink to="/">
              <IconInstagram color={'white'}/>
            </NavLink>
          </div>
          <div className={'mt-5'}>
            <a href="https://vuse.com" className={'text-gray-500'} target={'_blank'}>vuse.com</a>
          </div>
        </div>
      </div>
      <div>
        <div className={'mt-3'}>
          <a href={'#'} className={'text-2xl'}>
            Полезные ссылки
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Часто задаваемые вопросы
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Контакты
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Где купить
          </a>
        </div>
      </div>

      <div>
        <div className={'mt-3'}>
          <a href={'#'} className={'text-2xl'}>
            Юридическая информация
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Политика в отношении обработки<br/>персональных
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Согласие на обработку<br/>персональных данных
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Политика cookies
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Пользовательское соглашение
          </a>
        </div>
      </div>

      <div>
        <div className={'mt-3'}>
          <a href={'#'} className={'text-2xl'}>
            Наши устройства
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'/device-500'} className={''}>
            Vuse Go 500
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'/device-700'} className={''}>
            Vuse Go 700
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'/device-1500'} className={''}>
            Vuse Go Max 1500
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'/device-3000'} className={''}>
            Vuse 3000
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'/device-5000'} className={''}>
            Vuse 5000
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
