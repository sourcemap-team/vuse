
const Home = () => {

  return (
    <main>
      <section>
        <img src={topBanner} className={'w-full'} alt="banner"/>
      </section>

      <section className={'pt-10'}>
        <Banners className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-10'}>
        <Devices className={'container mx-auto'}/>
      </section>

      <section className={'border-b py-10'}>
        <Tastes className={'container mx-auto'}/>
      </section>

      <section className={'py-10'}>
        <Social className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Home
