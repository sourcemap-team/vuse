import numberOne from 'src/assets/images/number-one-en.png'
import planet from 'src/assets/images/planet.png'

const Banners = ({className}) => {

  return (
    <div className={className}>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'}>
        <div
          className={'flex flex-col lg:flex-row items-center rounded-xl bg-[url("src/assets/images/bg-mid-banner-1.png")] bg-no-repeat bg-cover px-5 lg:px-10 py-5'}>
          <img src={numberOne} className={'hidden lg:block pe-10'} alt="number-one"/>
          <div>
            <h3 className={'text-white text-xl lg:text-3xl font-bold'}>
              #1 вейп бренд в мире
            </h3>
            <p className={'text-white text-xs mt-4'}>
              *На основании оценки доли продаж в Мае 2022 продукции Vuse в ритейле от
              всей вейп категории в странах: США, Канада, Франция, Великобритания,
              Германия. Эти рынки охватывают 81% глобальной доли чистого
              товарооборота в закрытых системах.
            </p>
            <button className={'bg-yellow-500 text-xs lg:text-md rounded-full px-5 py-2 mt-4'}>
              Подробнее
            </button>
          </div>
        </div>

        <div className={'flex flex-col lg:flex-row items-center rounded-xl bg-[url("src/assets/images/bg-mid-banner-2.png")] bg-no-repeat bg-cover px-5 lg:px-0'}>
          <img src={planet} className={'hidden lg:block rounded-xl'} alt="number-one"/>
          <div className={'py-5 lg:pe-5'}>
            <h3 className={'text-white text-xl lg:text-3xl font-bold'}>
              Программа утилизации
            </h3>
            <p className={'text-white text-xs mt-4'}>
              *На основании оценки доли продаж в Мае 2022 продукции Vuse в ритейле от
              всей вейп категории в странах: США, Канада, Франция, Великобритания,
              Германия. Эти рынки охватывают 81% глобальной доли чистого
              товарооборота в закрытых системах.
            </p>
            <button className={'bg-yellow-500 text-xs lg:text-md rounded-full px-5 py-2 mt-4'}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banners
