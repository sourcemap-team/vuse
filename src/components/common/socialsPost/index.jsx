import m from './socialsPost.module.scss'

const SocialsPost = ({className, image, text, link}) => {

  return (
    <div className={className}>
      <div className={m.post}>
        <div className={m.shadow}>
          <div className={m.more}>
            <p>
              {text}
            </p>
            <a href={link} target={'_blank'}>
              Подробнее
            </a>
          </div>
        </div>

        <img src={image} alt="device"/>

      </div>
    </div>
  )
}

export default SocialsPost
