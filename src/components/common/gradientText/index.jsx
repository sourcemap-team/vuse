const GradientText = ({topGradient, bottomGradient, topText, bottomText, image}) => {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div
        className={`text-4xl lg:text-5xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b py-1 ${topGradient}`}>
        <p>
          {topText}
        </p>
      </div>
        <img src={image} className={'mt-10'} alt="image"/>
      <div
        className={`text-4xl lg:text-5xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b py-1 ${bottomGradient}`}>
        <p>
          {bottomText}
        </p>
      </div>
    </div>
  )
}

export default GradientText
