import Accordion from 'src/components/common/accordion'
import { Trans } from 'react-i18next'
import GradientHeader from '../components/common/gradientHeader'

const FAQ = ({className}) => {
  return (
    <div className={className}>
      <GradientHeader className={'text-xl lg:text-6xl py-2'}>
        <Trans i18nKey={`faq.title`} components={{br: <br/>}}/>
      </GradientHeader>

      <div className={'mt-10'}>
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question1`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer1`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question2`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer2`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question3`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer3`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question4`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer4`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question5`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer5`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question6`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer6`} components={{br: <br/>}}/>}
        />
        <Accordion
          className={'mt-3'}
          title={<Trans i18nKey={`faq.question8`} components={{br: <br/>}}/>}
          content={<Trans i18nKey={`faq.answer8`} components={{br: <br/>}}/>}
        />
      </div>
    </div>
  )
}

export default FAQ
