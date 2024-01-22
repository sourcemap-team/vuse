import FAQ from 'src/containers/FAQ.jsx'

import health from 'src/assets/images/icons/public-health-england.svg'
import agency from 'src/assets/images/cancer-agency.png'
import differenceIcon1 from 'src/assets/images/icons/differences-1.svg'
import differenceIcon2 from 'src/assets/images/icons/differences-2.svg'
import differenceIcon3 from 'src/assets/images/icons/differences-3.svg'
import differenceIcon4 from 'src/assets/images/icons/differences-4.svg'
import cigarette from 'src/assets/images/icons/cigarette.svg'
import vape from 'src/assets/images/icons/vape.svg'
import differenceIcon5 from 'src/assets/images/icons/differences-5.svg'
import differenceIcon6 from 'src/assets/images/icons/differences-6.svg'
import differenceIcon7 from 'src/assets/images/icons/differences-7.svg'
import differenceIcon8 from 'src/assets/images/icons/differences-8.svg'
import research from 'src/assets/images/research.png'
import researchUK from 'src/assets/images/icons/research-uk.svg'
import researchGroup from 'src/assets/images/icons/research-group.svg'
import { Trans, useTranslation } from 'react-i18next'
import React from 'react'
import GradientHeader from '../components/common/gradientHeader'

const Health = () => {
  const {t} = useTranslation()

  return (
    <main className={'pt-10 flex flex-col items-center'}>
      <section className={'lg:w-2/3 px-3 lg:p-10'}>
        <GradientHeader className={'text-xl lg:text-6xl py-2'}>
          {t(`health.title1`)}
        </GradientHeader>

        <div className={'mt-6'}>
          <img src={health} alt="health"/>
        </div>

        <h3 className={'font-bold text-3xl mt-6'}>
          {t(`health.text1`)}
        </h3>

        <p className={'mt-5 italic'}>
          <Trans i18nKey={`health.text2`} components={{b: <b/>}}/>
        </p>

        <div className={'mt-6'}>
          <img src={agency} alt="agency"/>
        </div>

        <h3 className={'font-bold text-3xl mt-6'}>
          {t(`health.text3`)}
        </h3>

        <p className={'mt-5 italic'}>
          <Trans i18nKey={`health.text4`} components={{b: <b/>}}/>
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          {t(`health.text5`)}
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          {t(`health.text6`)}
        </p>
      </section>

      <section className={'w-full lg:w-2/3 flex flex-col items-center px-3 lg:p-10'}>
        <GradientHeader className={'text-xl lg:text-6xl py-2'}>
          {t(`health.title2`)}
        </GradientHeader>

        <h3 className={'font-bold text-center text-lg lg:text-3xl mt-2 lg:mt-6'}>
          {t(`health.text7`)}
        </h3>

        <div className={'flex flex-col lg:flex-row items-center justify-between mt-6'}>
          <div className={'w-full lg:w-1/2 flex items-center justify-between lg:border-e'}>
            <div>
              <div className={'flex items-center'}>
                <img src={differenceIcon1} alt="icon"/>
                <p className={'px-5'}>
                  <Trans i18nKey={`health.text8`} components={{br: <br/>}}/>
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon2} alt="icon"/>
                <p className={'px-5'}>
                  <Trans i18nKey={`health.text9`} components={{br: <br/>}}/>
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon3} alt="icon"/>
                <p className={'px-5'}>
                  <Trans i18nKey={`health.text10`} components={{br: <br/>}}/>
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon4} alt="icon"/>
                <p className={'px-5'}>
                  <Trans i18nKey={`health.text11`} components={{br: <br/>}}/>
                </p>
              </div>
            </div>
            <div className={'lg:px-10'}>
              <img src={cigarette} alt="cigarette"/>
            </div>
          </div>

          <div className={'w-full lg:w-1/2 flex items-center justify-between mt-5 lg:mt-0'}>
            <div className={'lg:px-10'}>
              <img src={vape} alt="cigarette"/>
            </div>
            <div>
              <div className={'flex items-center justify-end'}>
                <p className={'px-5 text-end'}>
                  <Trans i18nKey={`health.text12`} components={{br: <br/>}}/>
                </p>
                <img src={differenceIcon5} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  <Trans i18nKey={`health.text13`} components={{br: <br/>}}/>
                </p>
                <img src={differenceIcon6} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  <Trans i18nKey={`health.text14`} components={{br: <br/>}}/>
                </p>
                <img src={differenceIcon7} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  <Trans i18nKey={`health.text15`} components={{br: <br/>}}/>
                </p>
                <img src={differenceIcon8} alt="icon"/>
              </div>
            </div>
          </div>
        </div>

        <h3 className={'font-bold text-center text-3xl mt-10'}>
          {t(`health.text16`)}
        </h3>

        <div className={'flex justify-center mt-6'}>
          <img src={research} alt="research"/>
        </div>

        <p className={'mt-5'}>
          <Trans i18nKey={`health.text17`} components={{br: <br/>, b: <b/>}}/>
        </p>

        <div className={'w-full lg:w-auto flex justify-evenly mt-6'}>
          <div className={'flex flex-col lg:flex-row items-center'}>
            <img src={researchUK} alt="icon"/>
            <p className={'lg:px-5'}>
              <Trans i18nKey={`health.text18`} components={{br: <br/>}}/>
            </p>
          </div>
          <div className={'flex flex-col lg:flex-row items-center'}>
            <img src={researchGroup} alt="icon"/>
            <p className={'lg:px-5'}>
              <Trans i18nKey={`health.text19`} components={{br: <br/>}}/>
            </p>
          </div>
        </div>

        <p className={'mt-6 text-gray-500 text-xs'}>
          <Trans i18nKey={`health.text20`} components={{br: <br/>}}/>
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          <Trans i18nKey={`health.text21`} components={{br: <br/>}}/>
        </p>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Health
