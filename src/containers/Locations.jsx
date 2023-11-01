import { useEffect, useState } from 'react'
import { cities, locationsData } from 'src/constants/locationsData.js'
import { IconLogoBig } from 'src/assets/icons/index.jsx'

import locationType1 from 'src/assets/images/icons/location-type-1.svg'
import locationType2 from 'src/assets/images/icons/location-type-2.svg'
import locationType3 from 'src/assets/images/icons/location-type-3.svg'
import locationType4 from 'src/assets/images/icons/location-type-4.svg'
import locationType5 from 'src/assets/images/icons/location-type-5.svg'

const Locations = ({className}) => {

  const [myMap, setMyMap] = useState(null)
  const [myObjectManager, setObjectManager] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState(null)

  const init = () => {
    document.getElementById('map').innerHTML = ''
    const map = new ymaps.Map('map', {
      center: [41.311151, 69.279737],
      zoom: 12,
      controls: [],
    }, {
      balloonMaxWidth: 200,
      searchControlProvider: 'yandex#search',
    })

    const objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
      clusterDisableClickZoom: true,
    })
    objectManager.objects.options.set({
      iconLayout: 'default#image',
      iconImageHref: '/icon.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25],
    })

    objectManager.add(locationsData)
    map.geoObjects.add(objectManager)
    setMyMap(map)
    setObjectManager(objectManager)
  }

  useEffect(() => {
    ymaps.ready(init)
  }, [])

  const handleLocationsType = (type) => {
    if (myMap && myObjectManager) {
      if (selectedFilter === type) {
        myObjectManager.removeAll()
        myObjectManager.add(locationsData)
        myMap.geoObjects.removeAll()
        myMap.geoObjects.add(myObjectManager)
        setSelectedFilter(null)
      } else {
        const features = locationsData.features.filter(location => location.properties.type.includes(type))
        const filteredLocations = {
          type: 'FeatureCollection',
          features,
        }
        myObjectManager.removeAll()
        myObjectManager.add(filteredLocations)
        myMap.geoObjects.removeAll()
        myMap.geoObjects.add(myObjectManager)
        setSelectedFilter(type)
      }
    }
  }

  const changeCity = ({zoom, coordinates}) => {
    if (myMap) {
      myMap.setZoom(zoom)
      myMap.setCenter(coordinates)
    }
  }

  const handleCity = (city) => {
    changeCity(cities[city])
  }

  return (
    <div className={className}>
      <div className={'flex flex-col lg:flex-row justify-between'}>
        <div className={'flex flex-col justify-between'}>
          <div>
            <IconLogoBig color={'#1E1E1E'}/>
            <h1 className={'text-3xl lg:text-7xl uppercase whitespace-nowrap mt-5'}>
              на карте
            </h1>
            <div className={'w-full bg-gray-100 rounded-full px-5 mt-10'}>
              <select className={'text-gray-500 bg-gray-100 w-full py-5 rounded-full focus:outline-0'}
                      onChange={(e) => handleCity(e.target.value)}>
                {Object.keys(cities).map(city => <option key={city} value={city}>{cities[city].title}</option>)}
              </select>
            </div>
          </div>
          <div>
            <button
              className={`${selectedFilter === 1 ? 'bg-primary text-white' : ''} w-full flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(1)}>
              <img src={locationType1} alt="location"/>
              <p className={'ms-3'}>
                Фирменные точки
              </p>
            </button>
            <button
              className={`${selectedFilter === 2 ? 'bg-primary text-white' : ''} w-full flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(2)}>
              <img src={locationType2} alt="location"/>
              <p className={'ms-3'}>
                Сервисные точки
              </p>
            </button>
            <button
              className={`${selectedFilter === 3 ? 'bg-primary text-white' : ''} w-full flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(3)}>
              <img src={locationType3} alt="location"/>
              <p className={'ms-3'}>
                We Use partner
              </p>
            </button>
            <button
              className={`${selectedFilter === 4 ? 'bg-primary text-white' : ''} w-full flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(4)}>
              <img src={locationType4} alt="location"/>
              <p className={'ms-3'}>
                Оптовые точки
              </p>
            </button>
            <button
              className={`${selectedFilter === 5 ? 'bg-primary text-white' : ''} w-full flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(5)}>
              <img src={locationType5} alt="location"/>
              <p className={'ms-3'}>
                Утилизация
              </p>
            </button>
          </div>
        </div>
        <div className={'filter-grayscale h-[300px] w-full lg:h-[700px] mt-5 lg:mt-0 lg:ps-20'} id="map"/>
      </div>
    </div>
  )
}

export default Locations
