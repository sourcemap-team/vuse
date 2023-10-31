import FAQ from 'src/containers/FAQ.jsx'

import health from 'src/assets/images/icons/public-health-england.svg'
import agency from 'src/assets/images/cancer-agency.png'

const Health = () => {
  return (
    <main className={'pt-10 flex flex-col items-center'}>
      <section className={'w-2/3 p-10'}>
        <h2
          className={'text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
          что говорят органы<br/>
          здравоохранения?
        </h2>

        <div className={'mt-6'}>
          <img src={health} alt="health"/>
        </div>

        <h3 className={'font-bold text-3xl mt-6'}>
          СЛУЖБА ОБЩЕСТВЕННОГО ЗДРАВООХРАНЕНИЯ АНГЛИИ:
        </h3>

        <p className={'mt-5 italic'}>
          «Продукция для вейпинга представляет лишь небольшую часть рисков, связанных с курением, а полный переход от
          курения к вейпингу приносит существенную пользу для здоровья по сравнению с продолжением курения.
          Основываясь на современных знаниях, <span className={'font-bold'}>можно сделать вывод, что вейпинг как минимум на 95% менее вреден, чем
          курение»</span>
        </p>

        <div className={'mt-6'}>
          <img src={agency} alt="agency"/>
        </div>

        <h3 className={'font-bold text-3xl mt-6'}>
          МЕЖДУНАРОДНОЕ АГЕНТСТВО ПО ИЗУЧЕНИЮ РАКА ВОЗ:
        </h3>

        <p className={'mt-5 italic'}>
          «Ожидается, что использование электронных сигарет <span className={'font-bold'}>сопряжено с меньшим риском заболеваний и смерти, чем курение
          табака.</span> Электронные сигареты обладают потенциалом снижения огромных рисков болезней и смерти, связанных с
          курением табака, если большинство курильщиков перейдет на электронные сигареты»
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          СЛУЖБА ОБЩЕСТВЕННОГО ЗДРАВООХРАНЕНИЯ АНГЛИИ (ТЕПЕРЬ СЛУЖБА УЛУЧШЕНИЯ ЗДРАВООХРАНЕНИЯ).
          ОБЗОР НАУЧНЫХ ДАННЫХ О СИГАРЕТАХ И СИСТЕМАХ НАГРЕВАНИЯ ТАБАКА, 2018 Г:КРАТКАЯ СВОДКА.
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          ВОЗ. ЭЛЕКТРОННЫЕ СИГАРЕТЫ МЕНЕЕ ВРЕДНЫ, ЧЕМ ТРАДИЦИОННЫЕ СИГАРЕТЫ? 29 ЯНВАРЯ 2020 г.
        </p>
      </section>

      <section className={'px-10 py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Health
