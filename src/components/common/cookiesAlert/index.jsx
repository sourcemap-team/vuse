import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import m from './cookies.module.scss';
import Age from '../age';

const CookiesAlert = () => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(
    sessionStorage.getItem('hideCookiesAlert')
  );

  const handleHide = () => {
    setHidden(true);
    sessionStorage.setItem('hideCookiesAlert', 'true');
  };

  return (
    <div className={hidden ? m.alertHidden : m.alert}>
      <Age />
      <div
        className={
          'flex flex-col lg:flex-row items-center justify-between bg-primary p-5 lg:px-20 lg:py-10'
        }
      >
        <p className={'text-white text-xs lg:text-base'}>
          <Trans i18nKey={`cookies.alert`} components={{ br: <br /> }} />
          <NavLink to={'cookies'}>
            <Trans i18nKey={`cookies.alertLink`} components={{ b: <b /> }} />
          </NavLink>
        </p>

        <button
          className={'bg-white px-10 py-3 rounded-full mt-5 lg:mt-0'}
          onClick={handleHide}
        >
          {t(`cookies.alertButton`)}
        </button>
      </div>
    </div>
  );
};
export default CookiesAlert;
