import { NavLink } from 'react-router-dom'
import m from './socialsPost.module.scss'

const SocialsPost = ({
                       className,
                       image,
                       link,
                     }) => {

  return (
    <div className={className}>
      <div className={m.post}>
        <div className={m.shadow}>
          <div className={m.more}>
            <p>
              Поддержи культурную ценность
            </p>
            <NavLink to={link}>
              <button>
                Подробнее
              </button>
            </NavLink>
          </div>
        </div>

        <img src={image} alt="device"/>

      </div>
    </div>
  )
}

export default SocialsPost
