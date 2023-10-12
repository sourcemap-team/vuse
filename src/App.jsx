import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Menu from 'src/components/common/menu'
import Home from 'src/pages/Home.jsx'
import Device from 'src/pages/Device.jsx'
import Age from "./components/common/age/index.jsx";

const App = () => {

  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/device' element={<Device/>}/>
        </Routes>
        <Age/>
      </BrowserRouter>
    </Suspense>
  )
}
export default App
