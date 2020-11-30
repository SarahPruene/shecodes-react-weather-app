import React from 'react'
import WeatherIcon from './WeatherIcon'

import './Forecast.css'

export default function ForcastBox(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000)
    let hours = date.getHours()

    return `${hours}:00`
  }

  function minTemp() {
    let minTemperature = Math.round(props.data.main.temp_min)

    return `${minTemperature}°C`
  }

  function maxTemp() {
    let maxTemperature = Math.round(props.data.main.temp_max)

    return `${maxTemperature}°C`
  }
  
  return (
    <div className='ForecastBox'>
      <h3 className='forecadast-title'>{hours()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className='forecast-temp'>
        <strong>{minTemp()}</strong> | {maxTemp()}
      </div>
    </div>
  )
}
