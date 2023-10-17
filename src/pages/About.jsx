import numberOne from 'src/assets/images/number-one.png'
import countries from 'src/assets/images/countries.png'
import banner1 from 'src/assets/images/mid-banner-3.png'
import banner2 from 'src/assets/images/mid-banner-4.png'
import Banners from 'src/containers/Banners.jsx'
import bigBanner from 'src/assets/images/big-banner.png'

const About = () => {
  return (
    <main>
      <section className={'border-b py-10'}>
        <div className={'flex p-10'}>
          <div className={'flex flex-1 flex-col justify-between'}>
            <div>
              <h1
                className={'uppercase text-7xl bg-clip-text text-transparent bg-gradient-to-b from-black to-white mt-5'}>
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
                className={'font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#44E7FC] to-[#4C36E6] mt-5'}>
                10 лет
              </h1>
              <p className={'mt-8'}>
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
            <img src={numberOne} alt="number-one"/>
            <img src={countries} alt="countries" className={'mt-10'}/>

            <p className={'mt-4 text-xs'}>
              *На основе данных о доле в обороте в категории Total Vapour, полученных независимой организацией по<br/>
              исследованию рынка – Марлин, в измеряемой рознице (февраль 2022 - апрель 2022)
            </p>
          </div>
        </div>
      </section>

      <section className={'py-10'}>
        <Banners className={'container mx-auto'} banner1={banner1} banner2={banner2}/>
      </section>

      <section className={'flex justify-center pb-32'}>
        <img src={bigBanner} alt="banner"/>
      </section>
    </main>
  )
}

export default About
