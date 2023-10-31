import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { LANGUAGES } from 'src/constants/index.js'

import m from './menu.module.scss'
import help from 'src/assets/images/icons/help.svg'
import avatar from 'src/assets/images/icons/avatar.svg'
import robot from 'src/assets/images/icons/robot.svg'
import telegram from 'src/assets/images/icons/telegram.svg'
import instagram from 'src/assets/images/icons/instagram.svg'
import device500 from 'src/assets/images/icons/device500.svg'
import device700 from 'src/assets/images/icons/device700.svg'
import device1500 from 'src/assets/images/icons/device1500.svg'
import device3000 from 'src/assets/images/icons/device3000.svg'
import device5000 from 'src/assets/images/icons/device5000.svg'
import { IconLogo } from 'src/assets/icons/index.jsx'
import { useEffect, useState } from 'react'

const isActive = ({isActive}) => `${isActive ? m.active : ''}`

const Menu = () => {

  const {i18n, t} = useTranslation()

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const onChangeLang = (e) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 55)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <nav className={m.menu}>
      <div className={m.nav}>
        <div className={m.logo}>
          <NavLink className={isActive} to="/">
            <IconLogo color={'white'}/>
          </NavLink>
        </div>

        <div className={m.links}>
          <NavLink className={isActive} to="/about">{t('nav.about')}</NavLink>
          <NavLink className={isActive} to="/taste">{t('nav.taste')}</NavLink>
          <NavLink className={isActive} to="/utility">{t('nav.utility')}</NavLink>
          <NavLink className={isActive} to="/service">{t('nav.service')}</NavLink>
          <NavLink className={isActive} to="/contacts">{t('nav.contacts')}</NavLink>
        </div>

        <div className={m.buttons}>
          <select defaultValue={i18n.language} onChange={onChangeLang}>
            {
              LANGUAGES.map(({code, label}) => (
                <option
                  key={code}
                  value={code}
                >{label}</option>
              ))
            }
          </select>
          <NavLink className={isActive} to="/about">
            <img src={help} alt="help"/>
          </NavLink>
          <NavLink className={isActive} to="/about">
            <img src={avatar} alt="avatar"/>
          </NavLink>
        </div>
      </div>

      <div className={`${m.nav2} ${visible ? '' : 'transform -translate-y-16 -z-30'}`}>
        <div className={'w-[100px]'}/>

        <div className={m.devices}>
          <NavLink className={isActive} to="/device-500">
            <img src={device500} alt="device"/>
            <span>GO 500</span>
          </NavLink>
          <NavLink className={isActive} to="/device-700">
            <img src={device700} alt="device"/>
            <span className={m.new}>VEGA 700</span>
          </NavLink>
          <NavLink className={isActive} to="/device-1500">
            <img src={device1500} alt="device"/>
            <span>GO MAX 1500</span>
          </NavLink>
          <NavLink className={isActive} to="/device-3000">
            <img src={device3000} alt="device"/>
            <span className={m.new}>3000</span>
          </NavLink>
          <NavLink className={isActive} to="/device-5000">
            <img src={device5000} alt="device"/>
            <span className={m.new}>5000</span>
          </NavLink>
        </div>

        <div className={m.socials}>
          <a href="https://t.me/vuse_uz_bot" target={'_blank'}>
            <img src={robot} alt="social"/>
          </a>
          <a href="https://t.me/+n_xP7bHGuf9iZGM6" target={'_blank'}>
            <img src={telegram} alt="social"/>
          </a>
          <a href="https://www.instagram.com/vuse.uz/?igshid=MzRlODBiNWFlZA%3D%3D" target={'_blank'}>
            <img src={instagram} alt="social"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Menu
