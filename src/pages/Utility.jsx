import Locations from 'src/containers/Locations.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import phone from 'src/assets/images/icons/phone.svg'
import poster from 'src/assets/images/poster.png'

const Utility = () => {
  return (
    <main className={'bg-gray-50 pt-10 flex flex-col items-center'}>
      <section className={'w-2/3 bg-white rounded-xl mb-10 p-10'}>
        <h2
          className={'text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
          Vuse -<br/>
          первый глобальный углеродно-нейтральный<br/>
          вейпинг бренд*
        </h2>

        <p className={'mt-5'}>
          Мы прошли независимую сертификацию Vertis, после реализации плана
          по декарбонизации что включал в себя:
        </p>

        <ul className={'list-disc px-5 mt-3'}>
          <li>
            Продолжающаяся компенсация выбросов углерода за счет проектов по
            восстановлению лесов в Южной Америке**
          </li>
        </ul>

        <p className={'mt-4'}>
          Во Vuse мы верим что каждый из нас играет важную роль в защите окружающей среды.
          Поэтому мы поддерживаем экологичный подход, отправляя использованные устройства
          Vuse на переработку, тем самым поддерживая сохранение природы.
        </p>

        <h3 className={'font-bold text-3xl mt-6'}>
          Вместе мы можем стать ответственнее
          по отношению к экологии
        </h3>

        <p className={'mt-4'}>
          Каждый желающий может сдать использованные устройства Vuse в одну из сервисных
          точек для дальнейшей переработки.
        </p>

        <div className={'flex justify-center mt-6'}>
          <img src={poster} alt="poster"/>
        </div>

        <p className={'mt-6 text-gray-500'}>
          *На основе внутреннего прогноза продаж Vuse Go, Vuse Go Max, VuseePod, ePen, eTank mini, устройств и расходных
          материалов Alto (рассчитано на март 2022 г.) на 12 месяцев, начиная с апреля 2022 г.
        </p>

        <p className={'mt-6 text-gray-500'}>
          **Нейтральность Vuse была достигнута за счет сокращения выбросов углерода, а оставшийся углерод был
          компенсирован за счет проектов лесовосстановления, включая проект в Уругвае по посадке деревьев на территории
          площадью 21 298 га, где интенсивный выпас скота привел к эрозии почвы и деградации земель. Помимо удаления
          углекислого газа и улучшения качества почвы и биоразнообразия, проект также приведет к увеличению доступности
          и качества рабочих мест.
        </p>
      </section>

      <section className={'w-full border-b border-t py-3 lg:py-10 px-3 lg:px-0'}>
        <Locations className={'container mx-auto'}/>

        <div className={'container mx-auto flex items-center justify-end uppercase text-xl font-bold mt-10'}>
          <p className={''}>
            Call centre
          </p>
          <img src={phone} className={'ms-5 me-1'} alt="phone"/>
          <p className={''}>
            1252
          </p>
        </div>
      </section>

      <section className={'px-10 py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Utility
