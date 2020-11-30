import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherTemp from './WeatherTemp'
import FormatedDate from './FormatedDate'

import './App.css'
import './CurrentWeather.css'

export default function CurrentWeather(props) {
  return (
    <div className='CurrentWeather'>
      <div className='current-loti'>
        <h1 className='location'>{props.data.city}</h1>
        <FormatedDate date={props.data.date} />
        <p className='description'>{props.data.description}</p>
      </div>
      <div className='current-weather'>
        <WeatherIcon code={props.data.icon} />
        <WeatherTemp celsius={props.data.temperature} />
      </div>
      <div className='current-details'>
        <div className='cont'>
          <div className='det-inf'>Humidity:</div>
          <div className='det-info'>
            <span class='humidity'>{props.data.humidity}</span>%
          </div>
        </div>
        <div className='cont'>
          <div className='det-inf'>Wind:</div>
          <div className='det-info'>
            <span class='wind'>{props.data.wind}</span>km/h
          </div>
        </div>
        <div className='cont'>
          <button className='btn-current-location'> Current Location</button>
        </div>
      </div>
    </div>
  )
}
