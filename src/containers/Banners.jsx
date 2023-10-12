
const Banners = ({className}) => {

  return (
    <div className={className}>
      <div className={'columns-1 lg:columns-2 gap-8'}>
        <img src={midBanner1} alt="banner"/>
        <img src={midBanner2} alt="banner"/>
      </div>
    </div>
  )
}

export default Banners
