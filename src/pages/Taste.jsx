import Tastes from 'src/containers/Tastes.jsx'
import Locations from '../containers/Locations.jsx'
import FAQ from '../containers/FAQ.jsx'

const Home = () => {

  return (
    <main>
      <section className={'border-b py-10'}>
        <Tastes className={'container mx-auto'} filterEnabled/>
      </section>

      <section className={'px-10 py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-10'}>
        <Locations className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Home
