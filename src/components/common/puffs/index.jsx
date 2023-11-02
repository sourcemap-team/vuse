import { IconRate } from 'src/assets/icons/index.jsx'
import { NavLink } from 'react-router-dom'

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
    <div>
      <NavLink key={i} to={`/device-${num}`}>{num}</NavLink>
    </div>
  ))

  return puffs
}
