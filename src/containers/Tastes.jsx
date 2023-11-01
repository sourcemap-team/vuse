import { useState } from 'react'
import { Trans } from 'react-i18next'
import { t } from 'i18next'

import Taste from 'src/components/modules/taste/index.jsx'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste3 from 'src/assets/images/tastes/taste-3.png'
import taste4 from 'src/assets/images/tastes/taste-4.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste9 from 'src/assets/images/tastes/taste-9.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste11 from 'src/assets/images/tastes/taste-11.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'

const allImages = [
  taste1,
  taste2,
  taste3,
  taste4,
  taste5,
  taste6,
  taste7,
  taste8,
  taste9,
  taste10,
  taste11,
  taste12,
]

const allPuffs = [500, 700, 1500, 3000, 5000]

const Tastes = ({className, filterEnabled}) => {

  const [filter, setFilter] = useState(null)

  const handleFilter = (val) => {
    setFilter(val)
  }

  return (
    <div className={className}>
      <h2
        className={'text-xl lg:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        <Trans i18nKey="tastes.title" components={{br: <br/>}}/>
      </h2>

      {filterEnabled &&
        <div className={'flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg py-4 mt-10'}>
          <div className={'px-6'}>
            <p className={'uppercase text-center lg:text-start'}>
              выбери<br/>количество<br/>затяжек
            </p>
          </div>
          <div className={'grid grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-5 px-6 mt-3 lg:mt-0'}>
            {allPuffs.map(puff =>
              <button
                className={`${filter === puff ? 'bg-primary text-white' : 'bg-white'} whitespace-nowrap transition-colors duration-200 ease-in-out rounded-full w-full px-3 lg:px-4 py-2`}
                onClick={() => handleFilter(puff)} key={puff}>
                {puff}
              </button>,
            )}
            <button
              className={`${!filter ? 'bg-primary text-white' : 'bg-white'} whitespace-nowrap transition-colors duration-200 ease-in-out rounded-full w-full px-3 lg:px-4 py-2`}
              onClick={() => handleFilter(null)}>
              Все устройства
            </button>
          </div>
        </div>
      }

      <div className={'grid grid-cols-2 lg:grid-cols-6 gap-0 lg:pt-10 mt-5'}>
        {filter ?
          allImages.map((image, i) => t(`tastes.taste-${i + 1}.puffs`, {returnObjects: true}).includes(filter) &&
            <Taste image={image} taste={`taste-${i + 1}`} key={i}/>,
          )
          :
          allImages.map((image, i) =>
            <Taste image={image} taste={`taste-${i + 1}`} key={i}/>,
          )
        }
      </div>
    </div>
  )
}

export default Tastes
