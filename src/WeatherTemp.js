import React, { useState } from 'react'
import './WeatherTemp.css'
export default function WeatherTemp(props) {
  const [unit, setUnit] = useState('celsius')

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit')
  }

  function showCelsius(event) {
    event.preventDefault()
    setUnit('celsius')
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 35
  }

  if (unit === 'celsius') {
    return (
      <span className='WeatherTemp'>
        <strong className='temp'>{Math.round(props.celsius)}</strong>
        <span className='unit'>
          °C|{' '}
          <a href='/' onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    ) 
  } else {
    return (
      <span className='WeatherTemp'>
        <strong className='temp'>{Math.round(fahrenheit())}</strong>
        <span className='unit'>
          <a href='/' onClick={showCelsius}>
            °C
          </a>{' '}
          | °F
        </span>
      </span>
    )
  }
}

