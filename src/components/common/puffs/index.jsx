import { NavLink } from 'react-router-dom'

const IconRate = ({color}) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill={color}/>
    <circle cx="8" cy="8" r="7.5" stroke={color} strokeOpacity="0.1"/>
  </svg>
)

export const GetRatingCircles = (rating, color) => {
  let circles = [
    <IconRate color={'none'} key={1}/>,
    <IconRate color={'none'} key={2}/>,
    <IconRate color={'none'} key={3}/>,
    <IconRate color={'none'} key={4}/>,
    <IconRate color={'none'} key={5}/>,
  ]

  for (let i = 0; i < rating; i++) {
    circles[i] = <span key={i}><IconRate color={color || 'white'}/></span>
  }

  return (
    <div className={'flex gap-2'}>
      {circles}
    </div>
  )
}

export const GetPuffsInfo = (arr) => {
  let puffs = []
  arr.map((num, i) => puffs.push(
    <div key={i}>
      <NavLink to={`/device-${num}`}>{num}</NavLink>
    </div>,
  ))

  return puffs
}
