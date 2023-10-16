import logo from 'src/assets/images/icons/logo.svg'

const Footer = () => {
  return (
    <div className={'bg-black flex text-white p-10 gap-56'}>
      <div>
        <img src={logo} alt="logo"/>
        <p className={'text-gray-500 mt-5'}>© 2023</p>
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
            Карта сайта
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Где купить
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Cертификаты
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
            Политика в отношении обработкиM<br/>персональных
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Согласие на обработку<br/>персональных данных
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            Политика Cookie
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
          <a href={'#'} className={''}>
            VUSE PRO  5000
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            VUSE GO 1500
          </a>
        </div>
        <div className={'mt-3'}>
          <a href={'#'} className={''}>
            VUSE GO 600
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
