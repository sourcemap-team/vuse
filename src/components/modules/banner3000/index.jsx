import m from './banner.module.scss'
import React, { useEffect, useState } from 'react'

import device1 from 'src/assets/images/devices/3000/banner-1.png'
import device2 from 'src/assets/images/devices/3000/banner-2.png'
import device3 from 'src/assets/images/devices/3000/banner-3.png'
import device4 from 'src/assets/images/devices/3000/banner-4.png'
import device5 from 'src/assets/images/devices/3000/banner-5.png'

const AnimatedBanner = () => {
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    setMoved(true)
  }, [])

  return (
    <div className={m.container}>
      <img src={device5} className={`${m.fifth} ${moved ? m.moved : ''}`} alt="devices"/>
      <img src={device4} className={`${m.fourth} ${moved ? m.moved : ''}`} alt="devices"/>
      <img src={device3} className={`${m.third} ${moved ? m.moved : ''}`} alt="devices"/>
      <img src={device2} className={`${m.second} ${moved ? m.moved : ''}`} alt="devices"/>
      <img src={device1} className={m.first} alt="devices"/>
    </div>
  )
}

export default AnimatedBanner
