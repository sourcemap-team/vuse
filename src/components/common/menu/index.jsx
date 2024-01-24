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
import { useEffect, useState } from 'react'
import logo from 'src/assets/images/icons/logo.svg'
import menu from 'src/assets/images/icons/menu.svg'

const isActive = ({isActive}) => `${isActive ? m.active : ''}`

const Menu = () => {

  const [showMenu, setShowMenu] = useState(false)
  const {i18n, t} = useTranslation()
  const [selectedLang, setSelectedLang] = useState(i18n.language)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const onChangeLang = (e) => {
    localStorage.setItem('language', e.target.value)
    i18n.changeLanguage(e.target.value)
    setSelectedLang(e.target.value)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    setSelectedLang(i18n.language)
  }, [i18n.language])

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
      <div className={'relative flex justify-between lg:hidden bg-primary p-3 z-40'}>
        <NavLink to="/">
          <div className={'w-3/4 lg:w-auto'}>
            <img src={logo} alt="logo"/>
          </div>
        </NavLink>

        <button className={'text-white'} onClick={toggleMenu}>
          <img src={menu} width={24} alt="menu"/>
        </button>
      </div>
      <div className={`${m.navbar} ${showMenu ? 'mt-10 lg:mt-0' : 'transform -translate-y-full'}`}>
        <div className={m.nav}>
          <div className={'hidden lg:flex'}>
            <NavLink to="/">
              <div className={'w-3/4 lg:w-auto'}>
                <img src={logo} alt="logo"/>
              </div>
            </NavLink>
          </div>

          <div className={m.links}>
            <NavLink className={isActive} onClick={toggleMenu} to="/about">{t('nav.about')}</NavLink>
            <NavLink className={isActive} onClick={toggleMenu} to="/taste">{t('nav.taste')}</NavLink>
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/ru/rpi">{t('nav.utility')}</NavLink>*/}
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/service">{t('nav.service')}</NavLink>*/}
            <NavLink className={isActive} onClick={toggleMenu} to="/contacts">{t('nav.contacts')}</NavLink>
          </div>

          <div className={m.buttons}>
            <select value={selectedLang} onChange={onChangeLang}>
              {LANGUAGES.map(({code, label}) => (
                <option
                  key={code}
                  value={code}
                >{label}</option>
              ))}
            </select>
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/about">*/}
            {/*  <img src={help} alt="help"/>*/}
            {/*</NavLink>*/}
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/about">*/}
            {/*  <img src={avatar} alt="avatar"/>*/}
            {/*</NavLink>*/}
          </div>
        </div>

        <div className={`${m.nav2} ${visible ? '' : 'lg:transform lg:-translate-y-16 lg:-z-30'}`}>
          <div className={'hidden lg:block w-[100px]'}/>

          <div className={m.devices}>
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/device-500">*/}
            {/*  <img src={device500} alt="device"/>*/}
            {/*  <span>*/}
            {/*  {t(`devices.device-5.name`)}*/}
            {/*</span>*/}
            {/*</NavLink>*/}
            <NavLink className={isActive} onClick={toggleMenu} to="/device-700">
              <img src={device700} alt="device"/>
              <span className={m.new}>
              {t(`devices.device-4.name`)}
            </span>
            </NavLink>
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/device-1500">*/}
            {/*  <img src={device1500} alt="device"/>*/}
            {/*  <span>*/}
            {/*  {t(`devices.device-3.name`)}*/}
            {/*</span>*/}
            {/*</NavLink>*/}
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/device-3000">*/}
            {/*  <img src={device3000} alt="device"/>*/}
            {/*  <span className={m.new}>*/}
            {/*  {t(`devices.device-2.name`)}*/}
            {/*</span>*/}
            {/*</NavLink>*/}
            {/*<NavLink className={isActive} onClick={toggleMenu} to="/device-5000">*/}
            {/*  <img src={device5000} alt="device"/>*/}
            {/*  <span className={m.new}>*/}
            {/*  {t(`devices.device-1.name`)}*/}
            {/*</span>*/}
            {/*</NavLink>*/}
          </div>

          <div className={m.socials}>
            <a href="https://t.me/vuse_uz_bot" target={'_blank'} rel="noreferrer">
              <img src={robot} alt="social"/>
            </a>
            <a href="https://t.me/+n_xP7bHGuf9iZGM6" target={'_blank'} rel="noreferrer">
              <img src={telegram} alt="social"/>
            </a>
            <a href="https://www.instagram.com/vuse.uz/?igshid=MzRlODBiNWFlZA%3D%3D" target={'_blank'} rel="noreferrer">
              <img src={instagram} alt="social"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
