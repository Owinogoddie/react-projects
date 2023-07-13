import React from 'react'
import { data } from '../data';
import { LineChart } from '@tremor/react';

const Chart = () => {
    const timestamps = data.hourly.time;
    const temperatures = data.hourly.temperature_2m;
    const rain = data.hourly.rain;
    const showers = data.hourly.showers;

    const newData = data.hourly.map((dataPoint, index) => ({
        time: dataPoint.time,
        temperature: dataPoint.temperature,
        humidity: dataPoint.humidity,
        dewpoint: dataPoint.dewpoint
      }));
      console.log(newData)
  return (
    <div className='text-black'>
         <LineChart
        data={{
          labels: timestamps,
          datasets: [
            { label: 'Temperature (°C)', data: temperatures },
            { label: 'Rain (mm)', data: rain },
            { label: 'Showers', data: showers },
          ],
        }}
      />
    </div>
  )
}

export default Chart