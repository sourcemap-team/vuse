const colors = [
  '#BE80EB',
  '#F28C8C',
  '#FFE768',
  '#DF484F',
  '#4BB1D0',
  '#DBB942',
  '#C84A3B',
  '#4B56AF',
]
const GradientText = () => {
  return (
    <div className={'flex items-center justify-center bg-primary h-screen'}>
      <div
        className={'text-4xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#7E3CFF] via-[#AE64E4] to-[#FF8BA0]'}>
        <p>
          Его выбирают<br/>
          за айдентику,<br/>
          насыщенность
        </p>
        <div className={'flex items-center justify-center gap-3'}>
          <p className={'me-3'}>вкусов</p>
          <div className={'hidden lg:flex gap-3'}>
            {colors.map((color, i) =>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" key={i}>
                <circle cx="22.4044" cy="22.4044" r="22.4044" fill={color}/>
              </svg>,
            )}
          </div>
        </div>
        <p>
          и удобство<br/>
          использования
        </p>
      </div>
    </div>
  )
}

export default GradientText
