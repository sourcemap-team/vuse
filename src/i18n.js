import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

console.log(window.location)

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${window.location.origin}/vuse/i18n/{{lng}}.json`,
    }
  });

export default i18n;
