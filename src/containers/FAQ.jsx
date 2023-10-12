import Accordion from 'src/components/common/accordion/index.jsx'
import { Trans } from 'react-i18next'

const FAQ = ({className}) => {
  return (
    <div className={className}>
      <h2
        className={'text-6xl text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        <Trans i18nKey={`faq.title`} components={{br: <br/>}}/>
      </h2>

      <div className={'mt-10'}>
        <Accordion className={'mt-3'} title="Вопрос по устройству" content="Сладкий тропический вкус со сливочными нотками. Дополнен холодком, который чувствуется на выдохе."/>
        <Accordion className={'mt-3'} title="Сколько всего вкусов?" content="Сладкий тропический вкус со сливочными нотками. Дополнен холодком, который чувствуется на выдохе."/>
        <Accordion className={'mt-3'} title="Вопрос по устройству" content="Сладкий тропический вкус со сливочными нотками. Дополнен холодком, который чувствуется на выдохе."/>
        <Accordion className={'mt-3'} title="Вопрос по устройству" content="Сладкий тропический вкус со сливочными нотками. Дополнен холодком, который чувствуется на выдохе."/>
      </div>
    </div>
  )
}

export default FAQ
