import { IconRate } from 'src/assets/icons/index.jsx'

export const GetRatingCircles = (rating, color) => {
  let circles = [
    <IconRate color={'none'} key={1}/>,
    <IconRate color={'none'} key={2}/>,
    <IconRate color={'none'} key={3}/>,
    <IconRate color={'none'} key={4}/>,
    <IconRate color={'none'} key={5}/>
  ]

  for (let i = 0; i < rating; i++) {
    circles[i] = <span key={i}><IconRate color={color || "white"}/></span>
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
      <p><a href={'/vuse/device'}>{num}</a></p>
    </div>,
  ))

  return puffs
}
