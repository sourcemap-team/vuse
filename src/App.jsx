import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Menu from 'src/components/common/menu'
import Home from 'src/pages/Home.jsx'
import Device from 'src/pages/Device.jsx'
import Age from 'src/components/common/age/index.jsx'
import Footer from 'src/components/common/footer/index.jsx'
import Taste from 'src/pages/Taste.jsx'
import About from 'src/pages/About.jsx'

const App = () => {

  return (
    <Suspense fallback="loading">
      <BrowserRouter basename={'/'}>
        <Menu/>
        <Routes>
          <Route path="/vuse" element={<Home/>}/>
          <Route path="/vuse/about" element={<About/>}/>
          <Route path="/vuse/taste" element={<Taste/>}/>
          <Route path="/vuse/device" element={<Device/>}/>
          <Route path="*" element={<Navigate to="/vuse" replace />} />
        </Routes>
        <Age/>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}
export default App
