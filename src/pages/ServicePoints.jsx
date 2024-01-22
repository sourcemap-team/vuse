import Locations from 'src/containers/Locations.jsx'
import FAQ from 'src/containers/FAQ.jsx'

import phone from 'src/assets/images/icons/phone.svg'

const ServicePoints = () => {
  return (
    <main className={'flex flex-col items-center'}>
      <section className={'w-full border-b py-3 lg:py-10 px-3 lg:px-0'}>
        <Locations className={'container mx-auto'}/>

        <div className={'container mx-auto flex items-center justify-end uppercase text-xl font-bold mt-10'}>
          <a href="tel:1252" className={'flex items-center'}>
            <p className={''}>
              Call centre
            </p>
            <img src={phone} className={'ms-5 me-1'} alt="phone"/>
            <p className={''}>
              1252
            </p>
          </a>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default ServicePoints
