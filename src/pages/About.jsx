import Banner from 'src/containers/Banner.jsx'

import numberOneBig from 'src/assets/images/number-one.png'
import countries from 'src/assets/images/countries.png'
import bigBanner from 'src/assets/images/big-banner.png'
import imgMidBanner1 from 'src/assets/images/img-mid-banner-3.png'
import imgMidBanner2 from 'src/assets/images/img-mid-banner-4.png'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <main>
      <section className={'border-b py-10'}>
        <div className={'container mx-auto flex flex-col lg:flex-row px-3 lg:p-10'}>
          <div className={'flex flex-1 flex-col justify-between'}>
            <div>
              <h1
                className={'uppercase text-xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-black to-white mt-5'}>
                о vuse
              </h1>
              <p className={'mt-8'}>
                Запустившись в 2013 году, сегодня Vuse является одним из ведущих<br/>
                мировых брендов на рынке устройств для употребления никотина.
              </p>
              <p className={'mt-4'}>
                Продукты Vuse проходят 1000 часов тестирования 50 учеными, прежде<br/>
                чем попасть к потребителю. Только когда мы полностью уверены, что<br/>
                продукт соответствует стандартам качества, продукт допускается на<br/>
                рынок.
              </p>
              <p className={'mt-4'}>
                Бренд Vuse стремится предоставить продукт удовлетворяющий<br/>
                потребности потребителя. В линейке устройств для употребления<br/>
                никотина Vuse GO и Vuse GO Max представлены различные вкусы,<br/>
                включающие в себя фруктовые и ягодные оттенки.
              </p>
            </div>
            <div>
              <h1
                className={'font-bold text-2xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#44E7FC] to-[#4C36E6] mt-2 lg:mt-5'}>
                10 лет
              </h1>
              <p className={'mt-4 lg:mt-8'}>
                Бренд Vuse появился в США в 2013 году. И вот уже многие годы он<br/>
                предлагает высококачественный продукт во всем мире.
              </p>
              <p className={'mt-4'}>
                Vuse не останавливается на достигнутом, в продолжая искать новые<br/>
                возможности сделать свой продукт еще лучше.
              </p>
            </div>
          </div>

          <div className={'flex-1 flex flex-col justify-between items-center'}>
            <img src={numberOneBig} alt="number-one"/>
            <img src={countries} alt="countries" className={'mt-10'}/>

            <p className={'mt-4 text-xs'}>
              *На основе данных о доле в обороте в категории Total Vapour, полученных независимой организацией по<br/>
              исследованию рынка – Марлин, в измеряемой рознице (февраль 2022 - апрель 2022)
            </p>
          </div>
        </div>
      </section>

      <section className={'px-3 lg:px-0 mt-10'}>
        <div className={'container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'}>
          <Banner
            className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-3 bg-no-repeat bg-cover px-5 lg:px-10 py-5'}
            image={imgMidBanner1}
            title={'Проверенно учеными'}
            text={'1000 часов тестирования 50 учеными прежде чем Vuse Go появился на рынке'}
          />
          <Banner
            className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-4 bg-no-repeat bg-cover px-5 lg:px-10 py-5'}
            image={imgMidBanner2}
            title={'В VUSE НА 99% МЕНЬШЕ ТОКСИЧНЫХ ВЕЩЕСТВ, ЧЕМ В СИГАРЕТАХ'}
          />
        </div>
      </section>

      <section className={'flex justify-center px-3 lg:px-0 pb-10 lg:pb-32 mt-10'}>
        <div className={'container mx-auto relative'}>
          <div className={'absolute h-full lg:w-1/3 flex flex-col items-start justify-between py-3 lg:py-10 ps-2 lg:ps-5'}>
            <div className={'hidden lg:flex border-4 rounded-lg'}>
              <p className={'text-white text-xs lg:text-md font-bold uppercase px-2 py-1 lg:px-5 lg:py-3'}>
                take<br/>
                back
              </p>
            </div>
            <div>
              <h3 className={'text-white font-bold text-sm lg:text-4xl'}>
                Вместе мы можем
                стать ответственнее
                по отношению
                к экологии
              </h3>
              <p className={'text-white text-xs lg:text-md mt-2 lg:mt-5'}>
                Каждый желающий может сдать использованные
                устройства Vuse в одну из сервисных точек для
                дальнейшей переработки.
              </p>
            </div>
            <NavLink to={'/utility'}>
            <button className={'bg-yellow-500 px-5 py-1 lg:px-16 lg:py-2 text-xs rounded-full'}>
              Подробнее
            </button>
            </NavLink>
          </div>
          <img src={bigBanner} className={'rounded-xl'} alt="banner"/>
        </div>
      </section>
    </main>
  )
}

export default About
