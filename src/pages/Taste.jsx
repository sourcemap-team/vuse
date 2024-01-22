import Tastes from 'src/containers/Tastes.jsx'
import Locations from '../containers/Locations.jsx'
import FAQ from '../containers/FAQ.jsx'

const Home = () => {

  return (
    <main className={'lg:flex flex-col items-center'}>
      <section className={'border-b px-3 px:lg-0 py-10'}>
        <Tastes className={'container mx-auto'} filterEnabled/>
      </section>

      <section className={'px-3 lg:px-10 py-5 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>

      <section className={'px-3 w-full border-b py-10'}>
        <Locations className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Home
