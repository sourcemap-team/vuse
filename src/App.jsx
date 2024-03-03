import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Menu from 'src/components/common/menu';
import Home from 'src/pages/Home.jsx';
// import Device500 from 'src/pages/Device500.jsx'
import Device700 from 'src/pages/Device700.jsx';
// import Device1500 from 'src/pages/Device1500.jsx'
// import Device3000 from 'src/pages/Device3000.jsx'
// import Device5000 from 'src/pages/Device5000.jsx'
import Age from 'src/components/common/age';
import Footer from 'src/components/common/footer';
import Taste from 'src/pages/Taste.jsx';
import About from 'src/pages/About.jsx';
import ServicePoints from 'src/pages/ServicePoints.jsx';
import Contacts from 'src/pages/Contacts.jsx';
import Utility from 'src/pages/Utility.jsx';
import Health from 'src/pages/Health.jsx';
import AgeCheck from 'src/containers/AgeCheck.jsx';
import Privacy from 'src/pages/Privacy.jsx';
import Cookies from 'src/pages/Cookies.jsx';
import CookiesAlert from 'src/components/common/cookiesAlert/index.jsx';
import LocationButton from './components/common/locationButton/index.jsx';
import i18n from 'i18next';

const App = () => {
  const [ageChecked, setAgeChecked] = useState(
    sessionStorage.getItem('ageChecked')
  );
  const { pathname } = useLocation();

  if (localStorage.getItem('language'))
    i18n.changeLanguage(localStorage.getItem('language'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleAgeCheck = () => {
    setAgeChecked(true);
    sessionStorage.setItem('ageChecked', 'true');
  };

  return (
    <>
      {!ageChecked && <AgeCheck handleAgeCheck={handleAgeCheck} />}
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/taste' element={<Taste />} />
        {/*<Route path="/service" element={<ServicePoints/>}/>*/}
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/recycling-program' element={<Utility />} />
        <Route path='/health' element={<Health />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/cookies' element={<Cookies />} />
        {/*<Route path="/device-500" element={<Device500/>}/>*/}
        <Route path='/device-700' element={<Device700 />} />
        {/*<Route path="/device-1500" element={<Device1500/>}/>*/}
        {/*<Route path="/device-3000" element={<Device3000/>}/>*/}
        {/*<Route path="/device-5000" element={<Device5000/>}/>*/}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      {/* {pathname !== '/contacts' && <LocationButton />} */}
      <Age />
      <CookiesAlert />
      <Footer />
    </>
  );
};
export default App;
