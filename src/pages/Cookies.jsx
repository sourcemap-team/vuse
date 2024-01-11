import FAQ from 'src/containers/FAQ.jsx'
import { Trans, useTranslation } from 'react-i18next'
import React from 'react'
import GradientHeader from 'src/components/common/gradientHeader'
import Locations from 'src/containers/Locations.jsx'

const Cookies = () => {
  const {t} = useTranslation()

  return (
    <main className={'pt-10'}>
      <div className={'flex flex-col items-center'}>
        <section className={'lg:w-2/3 px-3 lg:p-10'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`cookies.title1`)}
          </GradientHeader>

          <h3 className={'font-bold text-3xl mt-6'}>
            {t(`cookies.title2`)}
          </h3>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text1`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              <a href={t(`cookies.link1`)}>
                {t(`cookies.link1text`)}
              </a>
            </li>
            <li>
              <a href={t(`cookies.link2`)}>
                {t(`cookies.link2text`)}
              </a>
            </li>
            <li>
              <a href={t(`cookies.link3`)}>
                {t(`cookies.link3text`)}
              </a>
            </li>
            <li>
              <a href={t(`cookies.link4`)}>
                {t(`cookies.link4text`)}
              </a>
            </li>
            <li>
              <a href={t(`cookies.link5`)}>
                {t(`cookies.link5text`)}
              </a>
            </li>
          </ul>

          <h3 className={'font-bold text-3xl mt-6'}>
            {t(`cookies.title3`)}
          </h3>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text2`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              {t(`cookies.text3`)}
            </li>
          </ul>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text4`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              {t(`cookies.text5`)}
            </li>
          </ul>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text6`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              {t(`cookies.text7`)}
            </li>
          </ul>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text8`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              {t(`cookies.text9`)}
            </li>
          </ul>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text10`} components={{br: <><br/><br/></>}}/>
          </p>

          <ul className={'list-disc px-5 mt-3'}>
            <li>
              {t(`cookies.text11`)}
            </li>
          </ul>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text12`} components={{br: <><br/><br/></>}}/>
          </p>

          <h3 className={'font-bold text-3xl mt-6'}>
            {t(`cookies.title4`)}
          </h3>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text13`} components={{br: <><br/><br/></>}}/>
          </p>

          <h3 className={'font-bold text-3xl mt-6'}>
            {t(`cookies.title5`)}
          </h3>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text14`} components={{br: <><br/><br/></>}}/>
          </p>

          <h3 className={'font-bold text-3xl mt-6'}>
            {t(`cookies.title6`)}
          </h3>

          <p className={'mt-5'}>
            <Trans i18nKey={`cookies.text15`} components={{br: <><br/><br/></>}}/>
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

export default Cookies
