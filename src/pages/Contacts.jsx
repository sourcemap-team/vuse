import FAQ from 'src/containers/FAQ.jsx'

import phone from 'src/assets/images/icons/phone-circle.svg'
import telegram from 'src/assets/images/icons/telegram-circle.svg'
import help from 'src/assets/images/icons/help-circle.svg'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center'}>
      <section className={'hidden container mx-auto mt-4 px-3 lg:px-0'}>
        <h2
          className={'text-xl lg:text-6xl text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
          ОТПРАВЬТЕ НАМ<br/>
          СООБЩЕНИЕ
        </h2>
        <p className={'mt-5 text-center'}>
          Напишите нам записку, и мы свяжемся с вами как можно быстрее.<br/>
          Мы стремимся отвечать на все сообщения в течение 24 часов.
        </p>

        <div className={'flex justify-center pt-10 lg:mt-20'}>
          <form className={'w-full lg:w-1/2'} action={console.log}>
            <div className={'flex flex-col'}>
              <label htmlFor="username">
                Ваше имя
              </label>
              <input name={'username'} className={'border border-primary rounded-md py-1'} type="text"/>
            </div>

            <div className={'flex flex-col mt-5'}>
              <label htmlFor="email">
                Электронная почта
              </label>
              <input name={'email'} className={'border border-primary rounded-md py-1'} type="email"/>
            </div>

            <div className={'flex flex-col mt-5'}>
              <label htmlFor="phone">
                Номер телефона
              </label>
              <input name={'phone'} className={'border border-primary rounded-md py-1'} type="phone"/>
            </div>

            <div className={'flex flex-col mt-5'}>
              <label htmlFor="message">
                Ваше сообщение
              </label>
              <input name={'message'} className={'border border-primary rounded-md py-1'} type="text"/>
            </div>

            <div className={'flex flex-col mt-10'}>
              <button className={'bg-primary text-white rounded-full py-3'}>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className={'container mx-auto grid grid-cols-3 gap-5 lg:gap-10 mt-20 px-3 lg:px-0'}>
        <a href={'tel:1252'} className={'bg-gray-100 rounded-xl flex flex-col items-center pt-3 lg:py-10'}>
          <img src={phone} alt="phone"/>
          <p className={'mt-5'}>
            {t(`contacts.callCentre`)} ({t(`contacts.phone`)})
          </p>
        </a>

        <a href={'https://t.me/+n_xP7bHGuf9iZGM6'} target={'_blank'} className={'bg-gray-100 rounded-xl flex flex-col items-center pt-3 lg:py-10'}>
          <img src={telegram} alt="telegram"/>
          <p className={'mt-5'}>
            {t(`contacts.telegram`)}
          </p>
        </a>

        <button className={'bg-gray-100 rounded-xl flex flex-col items-center pt-3 lg:py-10'}>
          <img src={help} alt="help"/>
          <p className={'mt-5'}>
            {t(`contacts.faq`)}
          </p>
        </button>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Contacts
