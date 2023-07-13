import React from 'react'
import { AreaChart, BarChart, Callout, Card,LineChart,Metric, Title } from "@tremor/react";
import { ExclamationIcon, CheckCircleIcon } from "@heroicons/react/solid";
import DailyData from './DailyData';
import WeatherSummary from './WeatherSummary ';

const CallOutCard = ({data}) => {
var dates = data.hourly.time.slice(0,24);
var humidityValues = data.hourly.relativehumidity_2m;
var temperatureValues = data.hourly.temperature_2m;
var rain = data.hourly.rain;
var uv_index = data.hourly.uv_index;
    var hourlyData = [];
    

    for (var i = 0; i < dates.length; i++) {
        var date = new Date(dates[i]);
        var formattedDate = date.toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' });

        var dataObject = {
          time: formattedDate,

          relativehumidity_2m: humidityValues[i],
          apparent_temperature: temperatureValues[i],
          rain: rain[i],
          uv_index: uv_index[i]
        };
        
        // Push the data object to the hourlyData array
        hourlyData.push(dataObject);
      }
   
      
  return (
    <div className='md:flex-1'>
        <p className='text-center text-3xl md:text-4xl text-black font-black'>TODAYS OVERVIEW</p>
        <Card className='white-card'>
        <Callout className="mt-4" title="sammary" icon={CheckCircleIcon} color="teal">
            <WeatherSummary/>
        
        
      </Callout>

      <div className="md:flex md:space-x-4 ">
        
      <Callout className="mt-4 flex-1" 
        title="Maximum temperature" icon={ExclamationIcon} color="yellow">
        
        <Metric>18.4knts</Metric>
      </Callout>
      <Callout className="mt-4 flex-1" 
        title="Minimum temperature" 
        icon={CheckCircleIcon} 
        color="teal">        
        <Metric>18.4knts</Metric>
      </Callout>
     
      </div>
    <div>
    <Callout className="mt-4" title="No critical system data" icon={CheckCircleIcon} color="rose">
        
        <Metric>18.4knts</Metric>
      </Callout>

      <div className="flex space-x-4">
        
      <Callout className="mt-4 flex-1" title="Wind speed" icon={CheckCircleIcon} color="teal">
        
        <Metric className="text-bold">{data.current_weather.winddirection} km/s</Metric>
      </Callout>
      windspeed
winddirection
      
      <Callout className="mt-4 flex-1" title="Wind Direction" icon={CheckCircleIcon} color="teal">
        
        <Metric className="text-bold">{data.current_weather.winddirection}deg</Metric>
      </Callout>

      </div>

    </div>
      
      

     
      
      </Card>

      <Card>
      <Title>UV index and Temperature chart</Title>
      <LineChart
      className="mt-6"
      data={hourlyData}
      index="time"
      categories={[
      "apparent_temperature","uv_index"]}
      colors={["indigo", "rose"]}
      yAxisWidth={40}
    />
      </Card>

      <DailyData data={data}/>
    </div>
  )
}

export default CallOutCard