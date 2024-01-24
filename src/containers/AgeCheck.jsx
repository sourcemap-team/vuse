import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { LANGUAGES } from 'src/constants/index.js'

const MaskedInput = ({handleAgeCheck}) => {
  const [inputValue, setInputValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const {t} = useTranslation()

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, '')

    const day = input.slice(0, 2)
    if (day > 31) input = '31' + input.slice(2)

    const month = input.slice(2, 4)
    if (month > 12) input = input.slice(0, 2) + '12' + input.slice(4)

    const currentYear = new Date().getFullYear()

    let formattedInput

    if (input.length < 3) formattedInput = input
    else if (input.length < 5) formattedInput = `${input.slice(0, 2)}/${input.slice(2)}`
    else formattedInput = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`

    const enteredYear = parseInt(input.slice(4, 8), 10)
    const enteredMonth = parseInt(input.slice(2, 4), 10) - 1 // Month is 0-based
    const enteredDay = parseInt(input.slice(0, 2), 10)

    const enteredDate = new Date(enteredYear, enteredMonth, enteredDay)
    const eighteenYearsAgo = new Date()
    eighteenYearsAgo.setFullYear(currentYear - 21)

    if (enteredDate < eighteenYearsAgo) setDisabled(false)
    else setDisabled(true)

    setInputValue(formattedInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAgeCheck()
  }

  const onChangeLang = (code) => {
    localStorage.setItem("language", code)
    i18n.changeLanguage(code)
  }

  return (
    <div className={'fixed flex justify-center items-center z-50 h-screen w-full overflow-hidden bg-primary'}>
      <div className={'lg:w-2/3 bg-white rounded-xl p-3 lg:p-20'}>
        <h2 className={'text-xl lg:text-4xl font-bold'}>
          {t('restriction.title')}
        </h2>
        <p className={'mt-3 lg:mt-10 text-sm lg:text-base'}>
          <Trans i18nKey={`restriction.text`} components={{b: <b/>}}/>
        </p>
        <div className={'mt-3 lg:mt-10'}>
          <label htmlFor={'age'} className={'text-sm lg:text-base'}>
            {t('restriction.label')}
          </label>
          <form className={'flex items-center gap-5 mt-2'} onSubmit={handleSubmit}>
            <input
              autoFocus
              type={'text'}
              name={'age'}
              value={inputValue}
              onChange={handleInputChange}
              className={'border border-primary px-3 py-2 rounded-lg'}
              placeholder={t('restriction.placeholder')}
            />
            <button
              disabled={disabled}
              className={'transition-colors duration-200 ease-in-out bg-purple-950 text-white rounded-lg px-10 py-2 disabled:bg-gray-500'}
              type={'submit'}
            >
              {t('restriction.enter')}
            </button>
          </form>
        </div>
        <div className={'flex gap-3 mt-3 lg:mt-5'}>
          {LANGUAGES.map(({code, label}) => (
            <button
              key={code}
              className={`${i18n.language === code ? 'text-primary' : 'text-gray-500'} font-bold`}
              onClick={() => onChangeLang(code)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaskedInput
