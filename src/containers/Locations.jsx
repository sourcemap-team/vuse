import { useEffect } from 'react'
import { locationsData } from 'src/constants/locationsData.js'
import { IconLogoBig } from 'src/assets/icons/index.jsx'
import location from 'src/assets/images/icons/location.svg'

const Locations = ({className}) => {

  let initialized = false
  let myMap
  let objectManager

  const init = () => {
    myMap = new ymaps.Map('map', {
      center: [41.311151, 69.279737], // Ташкент
      zoom: 12,
      controls: [],
    }, {
      balloonMaxWidth: 200,
      searchControlProvider: 'yandex#search',
    })

    objectManager = new ymaps.ObjectManager({clusterize: true, gridSize: 32, clusterDisableClickZoom: true})
    objectManager.objects.options.set({
      iconLayout: 'default#image',
      iconImageHref: '/icon.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25],
    })

    objectManager.add(locationsData)
    myMap.geoObjects.add(objectManager)
  }

  useEffect(() => {
    if (!initialized) {
      ymaps.ready(init)
      initialized = true
    }
  }, [])

  return (
    <div className={className}>
      <div className={'flex flex-col lg:flex-row justify-between'}>
        <div className={'flex flex-col justify-between'}>
          <div>
            <IconLogoBig color={'#1E1E1E'}/>
            <h1 className={'text-3xl lg:text-7xl uppercase mt-5'}>
              на карте
            </h1>
            <div className={'w-full bg-gray-100 rounded-full px-5 mt-10'}>
              <select className={'text-gray-500 bg-gray-100 w-full py-3 rounded-full focus:outline-0'}>
                <option>Ташкент</option>
              </select>
            </div>
          </div>
          <div>
            <button className={'w-full flex items-center rounded-full border-2 border-primary p-2 mt-4'}>
              <img src={location} alt="location"/>
              <p className={'ms-3'}>
                Фирменные точки
              </p>
            </button>
            <button className={'w-full flex items-center rounded-full border-2 border-primary p-2 mt-4'}>
              <img src={location} alt="location"/>
              <p className={'ms-3'}>
                Сервисные точки
              </p>
            </button>
            <button className={'w-full flex items-center rounded-full border-2 border-primary p-2 mt-4'}>
              <img src={location} alt="location"/>
              <p className={'ms-3'}>
                We Use partner
              </p>
            </button>
            <button className={'w-full flex items-center rounded-full border-2 border-primary p-2 mt-4'}>
              <img src={location} alt="location"/>
              <p className={'ms-3'}>
                Оптовые точки
              </p>
            </button>
            <button className={'w-full flex items-center rounded-full border-2 border-primary p-2 mt-4'}>
              <img src={location} alt="location"/>
              <p className={'ms-3'}>
                Утилизация
              </p>
            </button>
          </div>
        </div>
        <div className={'filter-grayscale h-[300px] w-full lg:h-[700px] lg:w-[700px] mt-5 lg:mt-0'} id="map"/>
      </div>
    </div>
  )
}

export default Locations
