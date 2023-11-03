import m from './banner.module.scss'
import React, { useEffect, useState } from 'react'

import device1 from 'src/assets/images/devices/700/banner-1.png'
import device2 from 'src/assets/images/devices/700/banner-2.png'

const AnimatedBanner = () => {
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    setMoved(true)
  }, [])

  return (
    <div className={m.container}>
      <img src={device2} className={`${m.second} ${moved ? m.moved : ''}`} alt="devices"/>
      <img src={device1} className={m.first} alt="devices"/>
    </div>
  )
}

export default AnimatedBanner
