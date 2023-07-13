import React from 'react'
import { useLocation } from 'react-router-dom'
import CallOutCard from './CallOutCard';
import { Divider } from '@tremor/react';

const WeatherData = () => {
    const location=useLocation()
    const { option, value } = location.state;
    console.log(location.state.value)
  return (
    <div className="text-black">
      <h2>Data Component</h2>
      {/* <p>Selected Country: {selectedCountry}</p>
      <p>Selected City: {selectedCity}</p> */}
      <Divider/>

      <CallOutCard/>
      
    </div>
  )
}

export default WeatherData