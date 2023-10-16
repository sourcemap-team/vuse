import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Menu from 'src/components/common/menu'
import Home from 'src/pages/Home.jsx'
import Device from 'src/pages/Device.jsx'
import Age from 'src/components/common/age/index.jsx'
import Footer from 'src/components/common/footer/index.jsx'

const App = () => {

  return (
    <Suspense fallback="loading">
      <BrowserRouter basename={'/'}>
        <Menu/>
        <Routes>
          <Route path="/vuse" element={<Home/>}/>
          <Route path="/device" element={<Device/>}/>
        </Routes>
        <Age/>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}
export default App
