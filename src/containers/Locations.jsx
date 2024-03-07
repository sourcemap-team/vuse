import { useEffect, useState } from 'react';
import { locationsData } from 'src/constants/locationsData.js';

import logo from 'src/assets/images/icons/logo-black.svg';
import locationType1 from 'src/assets/images/icons/location-type-1.svg';
import locationType2 from 'src/assets/images/icons/location-type-2.svg';
import locationType3 from 'src/assets/images/icons/location-type-3.svg';
import locationType4 from 'src/assets/images/icons/location-type-4.svg';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const Locations = ({ className }) => {
  const [searchParams] = useSearchParams();
  const [myMap, setMyMap] = useState(null);
  const [myObjectManager, setObjectManager] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(
    +searchParams.get('locationType') || 2
  );
  const { t } = useTranslation();
  const cities = t(`locations.cities`, { returnObjects: true });

  const init = () => {
    document.getElementById('map').innerHTML = '';
    const map = new ymaps.Map(
      'map',
      {
        center: [40.1811, 44.5136],
        zoom: 12,
        controls: [],
      },
      {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search',
      }
    );

    const objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
      clusterDisableClickZoom: true,
    });
    objectManager.objects.options.set({
      iconLayout: 'default#image',
      iconImageHref: '/location.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25],
    });

    if (selectedFilter) {
      const features = locationsData.features.filter((location) =>
        location.properties.type.includes(selectedFilter)
      );
      const filteredLocations = {
        type: 'FeatureCollection',
        features,
      };
      objectManager.add(filteredLocations);
    } else {
      objectManager.add(locationsData);
    }

    map.geoObjects.add(objectManager);
    setMyMap(map);
    setObjectManager(objectManager);
  };

  useEffect(() => {
    ymaps.ready(init);
  }, []);

  const handleLocationsType = (type) => {
    console.log(type);
    if (myMap && myObjectManager) {
      if (selectedFilter === type) {
        myObjectManager.removeAll();
        myObjectManager.add(locationsData);
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(myObjectManager);
        setSelectedFilter(null);
      } else {
        const features = locationsData.features.filter((location) =>
          location.properties.type.includes(type)
        );
        const filteredLocations = {
          type: 'FeatureCollection',
          features,
        };
        myObjectManager.removeAll();
        myObjectManager.add(filteredLocations);
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(myObjectManager);
        setSelectedFilter(type);
      }
    }
  };

  const changeCity = ({ zoom, coordinates }) => {
    if (myMap) {
      myMap.setZoom(zoom);
      myMap.setCenter(coordinates);
    }
  };

  const handleCity = (city) => {
    changeCity(cities[city]);
  };

  return (
    <div className={className}>
      <div className={'grid grid-cols-1 lg:grid-cols-3'}>
        {/* <div className={'flex flex-col justify-between'}> */}
        <div className={'flex flex-col gap-10'}>
          <div className={'mt-10'}>
            <div className={'w-1/2 lg:w-1/2'}>
              <img src={logo} alt='logo' />
            </div>
            <h1
              className={
                'text-3xl lg:text-4xl uppercase whitespace-nowrap mt-5'
              }
            >
              {t(`locations.onMap`)}
            </h1>
            <div className={'w-full bg-gray-100 rounded-full px-5 mt-10'}>
              <select
                className={
                  'custom-select text-gray-500 bg-gray-100 w-full py-3 rounded-full focus:outline-0'
                }
                onChange={(e) => handleCity(e.target.value)}
              >
                {Object.keys(cities).map((city) => (
                  <option key={city} value={city}>
                    {cities[city].title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              //   className={`${
              //     selectedFilter === 2 ? 'bg-primary text-white' : ''
              //   } w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              className={`${'bg-primary text-white'} w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(2)}
            >
              <img src={locationType2} alt='location' />
              <p className={'ms-3'}>{t(`locations.text2`)}</p>
            </button>
            {/* <button
              className={`${
                selectedFilter === 1 ? 'bg-primary text-white' : ''
              } w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}
              onClick={() => handleLocationsType(1)}
            >
              <img src={locationType1} alt='location' />
              <p className={'ms-3'}>{t(`locations.text1`)}</p>
            </button> */}

            {/*<button*/}
            {/*  className={`${selectedFilter === 3 ? 'bg-primary text-white' : ''} w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}*/}
            {/*  onClick={() => handleLocationsType(3)}>*/}
            {/*  <img src={locationType3} alt="location"/>*/}
            {/*  <p className={'ms-3'}>*/}
            {/*    {t(`locations.text3`)}*/}
            {/*  </p>*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  className={`${selectedFilter === 4 ? 'bg-primary text-white' : ''} w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}*/}
            {/*  onClick={() => handleLocationsType(4)}>*/}
            {/*  <img src={locationType4} alt="location"/>*/}
            {/*  <p className={'ms-3'}>*/}
            {/*    {t(`locations.text4`)}*/}
            {/*  </p>*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  className={`${selectedFilter === 5 ? 'bg-primary text-white' : ''} w-full lg:w-2/3 flex items-center rounded-full border-2 border-primary p-2 mt-4`}*/}
            {/*  onClick={() => handleLocationsType(5)}>*/}
            {/*  <img src={locationType5} alt="location"/>*/}
            {/*  <p className={'ms-3'}>*/}
            {/*    {t(`locations.text5`)}*/}
            {/*  </p>*/}
            {/*</button>*/}
          </div>
        </div>
        <div
          className={
            'lg:col-span-2 filter-grayscale h-[300px] w-full lg:h-[700px] mt-5 lg:mt-0 lg:ps-20'
          }
          id='map'
        />
      </div>
    </div>
  );
};

export default Locations;
