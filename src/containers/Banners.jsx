const Banners = ({className, banner1, banner2}) => {

  return (
    <div className={className}>
      <div className={'columns-1 lg:columns-2 gap-8'}>
        <img src={banner1} alt="banner"/>
        <img src={banner2} alt="banner"/>
      </div>
    </div>
  )
}

export default Banners
