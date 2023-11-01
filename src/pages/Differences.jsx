import FAQ from 'src/containers/FAQ.jsx'

import differenceIcon1 from 'src/assets/images/icons/differences-1.svg'
import differenceIcon2 from 'src/assets/images/icons/differences-2.svg'
import differenceIcon3 from 'src/assets/images/icons/differences-3.svg'
import differenceIcon4 from 'src/assets/images/icons/differences-4.svg'
import differenceIcon5 from 'src/assets/images/icons/differences-5.svg'
import differenceIcon6 from 'src/assets/images/icons/differences-6.svg'
import differenceIcon7 from 'src/assets/images/icons/differences-7.svg'
import differenceIcon8 from 'src/assets/images/icons/differences-8.svg'
import cigarette from 'src/assets/images/icons/cigarette.svg'
import vape from 'src/assets/images/icons/vape.svg'
import research from 'src/assets/images/research.png'
import researchUK from 'src/assets/images/icons/research-uk.svg'
import researchGroup from 'src/assets/images/icons/research-group.svg'

const Health = () => {
  return (
    <main className={'pt-10 flex flex-col items-center'}>
      <section className={'w-full lg:w-2/3 flex flex-col items-center px-3 lg:p-10'}>
        <h2
          className={'text-xl lg:text-6xl uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
          vuse отличия от сигарет
        </h2>

        <h3 className={'font-bold text-center text-lg lg:text-3xl mt-2 lg:mt-6'}>
          Сигарета VS Vuse
        </h3>

        <div className={'flex flex-col lg:flex-row items-center justify-between mt-6'}>
          <div className={'w-full lg:w-1/2 flex items-center justify-between lg:border-e'}>
            <div>
              <div className={'flex items-center'}>
                <img src={differenceIcon1} alt="icon"/>
                <p className={'px-5'}>
                  Процесс<br/>
                  горения
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon2} alt="icon"/>
                <p className={'px-5'}>
                  Дым и запах
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon3} alt="icon"/>
                <p className={'px-5'}>
                  Высокое содержание<br/>
                  токсикантов и смол
                </p>
              </div>
              <div className={'flex items-center mt-5'}>
                <img src={differenceIcon4} alt="icon"/>
                <p className={'px-5'}>
                  Пепел
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
                  Vuse не содержит<br/>
                  табака, поджигаемого<br/>
                  либо нагреваемого*
                </p>
                <img src={differenceIcon5} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  Без дыма
                </p>
                <img src={differenceIcon6} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  Без смол**
                </p>
                <img src={differenceIcon7} alt="icon"/>
              </div>
              <div className={'flex items-center justify-end mt-5'}>
                <p className={'px-5 text-end'}>
                  Без пепла
                </p>
                <img src={differenceIcon8} alt="icon"/>
              </div>
            </div>
          </div>
        </div>

        <h3 className={'font-bold text-center text-3xl mt-10'}>
          ИССЛЕДОВАНИЕ VUSE
        </h3>

        <div className={'flex justify-center mt-6'}>
          <img src={research} alt="research"/>
        </div>

        <p className={'mt-5'}>
          Участники исследования, использовавшие исключительно Vuse, <span
          className={'font-bold'}>продемонстрировали<br/>
          существенно лучшие результаты</span> в
          части биомаркеров, связанных с заболеваниями,<br/>
          вызываемыми табакокурением, чем традиционные курильщики.
        </p>

        <div className={'w-full lg:w-auto flex justify-evenly mt-6'}>
          <div className={'flex flex-col lg:flex-row items-center'}>
            <img src={researchUK} alt="icon"/>
            <p className={'lg:px-5'}>
              Проводилось в<br/>
              Великобритании
            </p>
          </div>
          <div className={'flex flex-col lg:flex-row items-center'}>
            <img src={researchGroup} alt="icon"/>
            <p className={'lg:px-5'}>
              213 Участников<br/>
              исследования
            </p>
          </div>
        </div>

        <p className={'mt-6 text-gray-500 text-xs'}>
          Данный продукт не является продуктом без риска и содержит никотин, который вызывает привыкание.<br/>
          *Под "без смол" мы подразумеваем отсутствие смол, образующихся при курении табака. Данный продукт не является
          продуктом без риска<br/>
          и содержит никотин, который вызывает привыкание.
        </p>

        <p className={'mt-6 text-gray-500 text-xs'}>
          Haswell, I.E., Gale, n., Brown, e. Et al. Biomarkers of exposure and potential harm in exclusive users of
          electronic cigarettes and current, former, and<br/>
          never smokers. Intern emerg med (2023). Hitps://doi.Org/10.1007/s11739-023-03294-9
        </p>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Health
