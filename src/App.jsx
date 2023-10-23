import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Menu from 'src/components/common/menu'
import Home from 'src/pages/Home.jsx'
import Device500 from 'src/pages/Device500.jsx'
import Device700 from 'src/pages/Device700.jsx'
import Device1500 from 'src/pages/Device1500.jsx'
import Device3000 from 'src/pages/Device3000.jsx'
import Device5000 from 'src/pages/Device5000.jsx'
import Age from 'src/components/common/age/index.jsx'
import Footer from 'src/components/common/footer/index.jsx'
import Taste from 'src/pages/Taste.jsx'
import About from 'src/pages/About.jsx'

const App = () => {

  return (
    <Suspense fallback="loading">
      <BrowserRouter basename={'/vuse/'}>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/taste" element={<Taste/>}/>
          <Route path="/device-500" element={<Device500/>}/>
          <Route path="/device-700" element={<Device700/>}/>
          <Route path="/device-1500" element={<Device1500/>}/>
          <Route path="/device-3000" element={<Device3000/>}/>
          <Route path="/device-5000" element={<Device5000/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
        <Age/>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}
export default App
