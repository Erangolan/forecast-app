/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Provider from './providers/Provider'
import WeatherList from './hooks/WeatherList'
import AutoComplete from './hooks/AutoComplete'
import background3 from './images/background.jpg'

export default function App() {
  return (
    <Provider className='provider'>
      <div className='container'>
        <AutoComplete />
        <WeatherList />
      </div>
    </Provider>
  )
}
