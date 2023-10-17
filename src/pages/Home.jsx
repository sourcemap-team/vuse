import topBanner from 'src/assets/images/top-banner.jpg'
import Devices from 'src/containers/Devices.jsx'
import Banners from 'src/containers/Banners.jsx'
import Tastes from 'src/containers/Tastes.jsx'
import Social from 'src/containers/Socials.jsx'
import Locations from '../containers/Locations.jsx'

import banner1 from 'src/assets/images/mid-banner-1.jpg'
import banner2 from 'src/assets/images/mid-banner-2.jpg'

const Home = () => {

  return (
    <main>
      <section>
        <img src={topBanner} className={'w-full'} alt="banner"/>
      </section>

      <section className={'pt-10'}>
        <Banners className={'container mx-auto'} banner1={banner1} banner2={banner2}/>
      </section>

      <section className={'border-b py-10'}>
        <Devices className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-10'}>
        <Tastes className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-10'}>
        <Locations className={'container mx-auto'}/>
      </section>

      <section className={'py-10'}>
        <Social className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Home
