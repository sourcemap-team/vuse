import Devices from 'src/containers/Devices.jsx'
import Banner from 'src/containers/Banner.jsx'
import Tastes from 'src/containers/Tastes.jsx'
import Social from 'src/containers/Socials.jsx'
import Locations from '../containers/Locations.jsx'

import homeBanner from 'src/assets/videos/home-banner.mp4'
import imgMidBanner1 from 'src/assets/images/img-mid-banner-1.png'
import imgMidBanner2 from 'src/assets/images/img-mid-banner-2.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const {t} = useTranslation()

  return (
    <main>
      <section className={'flex justify-center'}>
        <video autoPlay playsInline muted loop>
          <source src={homeBanner} type="video/mp4"/>
        </video>
      </section>

      <section className={'pt-3 lg:pt-10 px-3 lg:px-0'}>
        <div className={'container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'}>
          <Banner
            className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-1 bg-no-repeat bg-cover px-5 lg:px-10 py-4'}
            image={imgMidBanner1}
            title={t(`home.banner1Title`)}
            text={t(`home.banner1Text`)}
          >
            <NavLink to={'/about'}>
              <button
                className={'bg-yellow-500 text-xs lg:text-base rounded-full px-5 py-2 mt-4 transition-colors duration-300 ease-in-out hover:bg-yellow-600'}>
                {t(`home.more`)}
              </button>
            </NavLink>
          </Banner>
          <Banner
            className={'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-2 bg-no-repeat bg-cover p-5 lg:py-0 lg:ps-0 lg:pe-10'}
            image={imgMidBanner2}
            title={t(`home.banner2Title`)}
            text={t(`home.banner2Text`)}
          >
            <NavLink to={'/utility'}>
              <button
                className={'bg-yellow-500 text-xs lg:text-base rounded-full px-5 py-2 mt-4 transition-colors duration-300 ease-in-out hover:bg-yellow-600'}>
                {t(`home.more`)}
              </button>
            </NavLink>
          </Banner>
        </div>
      </section>

      <section className={'border-b py-3 lg:py-10 px-3 lg:px-0'}>
        <Devices className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-3 lg:py-10 px-3 lg:px-0'}>
        <Tastes className={'container mx-auto'}/>
      </section>

      <section id={'locations'} className={'border-b py-3 lg:py-10 px-3 lg:px-0'}>
        <Locations className={'container mx-auto'}/>
      </section>

      <section className={'py-3 lg:py-10 px-3 lg:px-0'}>
        <Social className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Home
