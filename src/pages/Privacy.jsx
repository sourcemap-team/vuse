import FAQ from 'src/containers/FAQ.jsx'
import { Trans, useTranslation } from 'react-i18next'
import React from 'react'
import GradientHeader from 'src/components/common/gradientHeader'
import Locations from 'src/containers/Locations.jsx'

const Privacy = () => {
  const {t} = useTranslation()

  return (
    <main className={'pt-10'}>
      <div className={'flex flex-col items-center'}>
        <section className={'lg:w-2/3 px-3 lg:p-10'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`privacy.title`)}
          </GradientHeader>

          <p className={'mt-5'}>
            <Trans i18nKey={`privacy.text`} components={{br: <><br/><br/></>}}/>
          </p>
        </section>
      </div>

      <section className={'border-b py-3 lg:py-10 px-3 lg:px-0'}>
        <Locations className={'container mx-auto'}/>
      </section>

      <div className={'flex flex-col items-center'}>
        <section className={'lg:w-2/3 lg:px-10 py-10 lg:py-60'}>
          <FAQ className={'container mx-auto'}/>
        </section>
      </div>
    </main>
  )
}

export default Privacy
