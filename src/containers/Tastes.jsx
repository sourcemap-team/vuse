import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Taste from 'src/components/modules/taste';

import berryIce from 'src/assets/images/tastes/berry-ice.png';
import mangoIce from 'src/assets/images/tastes/mango-ice.png';
import strawBerryKiwi from 'src/assets/images/tastes/strawberry-kiwi.png';
import watermelonIce from 'src/assets/images/tastes/watermelon-ice.png';
import creamyTobacco from 'src/assets/images/tastes/creamy-tobacco.png';
import spearmintIce from 'src/assets/images/tastes/spearmint-ice.png';

import GradientHeader from '../components/common/gradientHeader';

// const allPuffs = [500, 700, 1500, 3000, 5000]
const allPuffs = [700];

const Tastes = ({ className, filterEnabled }) => {
  const [filter, setFilter] = useState(null);
  const { t } = useTranslation();

  const allTastes = [
    {
      id: 'mango-ice',
      image: mangoIce,
    },
    {
      id: 'berry-ice',
      image: berryIce,
    },
    {
      id: 'strawberry-kiwi',
      image: strawBerryKiwi,
    },
    {
      id: 'watermelon-ice',
      image: watermelonIce,
    },
    {
      id: 'creamy-tobacco',
      image: creamyTobacco,
    },
    {
      id: 'spearmint-ice',
      image: spearmintIce,
    },
  ];

  const handleFilter = (val) => {
    setFilter(val);
  };

  return (
    <div className={className}>
      <GradientHeader className={'text-xl lg:text-6xl py-2'}>
        <Trans i18nKey='tastes.title' components={{ br: <br /> }} />
      </GradientHeader>

      {filterEnabled && (
        <div
          className={
            'flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg py-4 mt-10'
          }
        >
          <div className={'px-6'}>
            <p className={'uppercase text-center lg:text-start'}>
              <Trans i18nKey='tastes.filter' components={{ br: <br /> }} />
            </p>
          </div>
          <div
            className={
              'grid grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-5 px-6 mt-3 lg:mt-0'
            }
          >
            {allPuffs.map((puff) => (
              <button
                className={`${
                  filter === puff ? 'bg-primary text-white' : 'bg-white'
                } whitespace-nowrap transition-colors duration-200 ease-in-out rounded-full w-full px-3 lg:px-4 py-3`}
                onClick={() => handleFilter(puff)}
                key={puff}
              >
                {puff}
              </button>
            ))}
            {/* <button
              className={`${!filter ? 'bg-primary text-white' : 'bg-white'} whitespace-nowrap transition-colors duration-200 ease-in-out rounded-full w-full px-3 lg:px-4 py-3`}
              onClick={() => handleFilter(null)}>
              {t(`tastes.allDevices`)}
            </button> */}
          </div>
        </div>
      )}

      <div className={'grid grid-cols-2 lg:grid-cols-6 gap-0 lg:pt-10 mt-5'}>
        {filter
          ? allTastes.map(
              (taste) =>
                t(`tastes.${taste.id}.puffs`, { returnObjects: true }).includes(
                  filter
                ) && (
                  <Taste image={taste.image} taste={taste.id} key={taste.id} />
                )
            )
          : allTastes.map((taste) => (
              <Taste image={taste.image} taste={taste.id} key={taste.id} />
            ))}
      </div>
      <p
        className={
          'text-black font-sans text-base normal-case font-normal leading-[120%] -tracking-[1px] text-center lg:text-start max-w-[780px]'
        }
      >
        <Trans i18nKey='tastes.description' components={{ br: <br /> }} />
      </p>
    </div>
  );
};

export default Tastes;
