import React from 'react'
import { useTranslation } from 'react-i18next'
import Locations from 'src/containers/Locations.jsx'
import FAQ from 'src/containers/FAQ.jsx'
import GradientHeader from 'src/components/common/gradientHeader'

import phone from 'src/assets/images/icons/phone.svg'
import poster from 'src/assets/images/poster.png'
import reel1 from 'src/assets/images/reel-1.png'
import reel2 from 'src/assets/images/reel-2.png'
import reel3 from 'src/assets/images/reel-3.png'

const Utility = () => {

  const {t} = useTranslation()

  return (
    <main className={'bg-gray-50 pt-10 flex flex-col items-center px-3 lg:px-0'}>
      <section className={'lg:w-2/3 bg-white rounded-xl mb-10 p-10'}>
        <GradientHeader className={'text-xl lg:text-6xl py-2'}>
          {t(`utility.title`)}
        </GradientHeader>

        <p className={'mt-5'}>
          {t(`utility.text1`)}
        </p>

        <div className={'flex justify-between g-5 mt-4'}>
          <a href="https://www.instagram.com/reel/Cxdext-ISJo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <img src={reel1} alt="reel"/>
          </a>
          <a href="https://www.instagram.com/reel/Cy04aELIIec/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <img src={reel2} alt="reel"/>
          </a>
          <a href="https://www.instagram.com/reel/CyDqXkBqSCl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
            <img src={reel3} alt="reel"/>
          </a>
        </div>

        <p className={'mt-4'}>
          {t(`utility.text5`)}
        </p>

        <div className={'flex justify-center mt-6'}>
          <img src={poster} className={'w-full'} alt="poster"/>
        </div>

        <p className={'mt-6 text-gray-500'}>
          {t(`utility.text6`)}
        </p>

        <p className={'mt-6 text-gray-500'}>
          {t(`utility.text7`)}
        </p>
      </section>

      <section className={'w-full border-b border-t py-3 lg:py-10 px-3 lg:px-0'}>
        <Locations className={'container mx-auto'}/>

        <div className={'container mx-auto flex items-center justify-end uppercase text-xl font-bold mt-10'}>
          <p className={''}>
            {t(`utility.callCentre`)}
          </p>
          <img src={phone} className={'ms-5 me-1'} alt="phone"/>
          <p className={''}>
            {t(`utility.phone`)}
          </p>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Utility
