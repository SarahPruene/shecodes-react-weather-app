import React, { useState } from 'react'
import ForecastBox from './ForecastBox'
import axios from 'axios'
import './Forecast.css'
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)

  function handleForecastResponse(response) {
    setForecast(response.data)
    setLoaded(true)
  }

  if (loaded && props.city === forecast.city.name) {
    <div className='Forecast'>
      <ForecastBox data={forecast.list[0]} />
      <ForecastBox data={forecast.list[1]} />
      <ForecastBox data={forecast.list[2]} />
      <ForecastBox data={forecast.list[3]} />
      <ForecastBox data={forecast.list[4]} />
      <ForecastBox data={forecast.list[5]} />
    </div>
  } else {
    const apiKey = '62be57f77de7b70c964aa5e2d8e17000'
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForecastResponse)

    return null
  }
}
