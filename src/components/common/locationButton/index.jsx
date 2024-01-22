import { NavLink } from 'react-router-dom'
import icon from 'src/assets/images/icons/location-button.svg'

export default function LocationButton() {
  return (
    <NavLink className={'fixed bottom-16 right-10 w-[75px] lg:w-[100px] z-40'} to={'/service'}>
      <img src={icon} alt="icon"/>
    </NavLink>
  )
}
