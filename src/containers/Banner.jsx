const Banner = ({className, image, title, text, children}) => {

  return (
    <div
      className={className}>
      <img src={image} className={'hidden lg:block rounded-xl pe-5'} alt="number-one"/>
      <div>
        <h3 className={'text-white text-xl lg:text-2xl font-bold'}>
          {title}
        </h3>
        <p className={'text-white text-xs mt-4'}>
          {text}
        </p>
        {children}
      </div>
    </div>
  )
}

export default Banner
