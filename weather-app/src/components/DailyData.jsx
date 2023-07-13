import { AreaChart, Card, Title } from '@tremor/react';
import React from 'react'

const DailyData = ({data}) => {
    var dates = data.daily.time;
var temperature_2m_max=data.daily.temperature_2m_max
var apparent_temperature_max=data.daily.apparent_temperature_max

var uv_index_max=data.daily.uv_index_max
var rain_sum=data.daily.rain_sum
    var dailyData = [];
    

    for (var i = 0; i < dates.length; i++) {
        var date = new Date(dates[i]);
        const formattedDate = date.toLocaleString('en-US', {month: 'numeric', day: 'numeric',year:'numeric'});

        var dataObject = {
          time: formattedDate,

          temperature_2m_max: temperature_2m_max[i],
          apparent_temperature_max: apparent_temperature_max[i],
          uv_index_max: uv_index_max[i],
          rain_sum: rain_sum[i]
        };
        
        // Push the data object to the hourlyData array
        dailyData.push(dataObject);
      }
  return (
    <div>
         <Card>
      <Title>Daily data</Title>
      <AreaChart
      className="mt-6"
      data={dailyData}
      index="time"
      categories={[
      "apparent_temperature_max","rain_sum","temperature_2m_max","uv_index_max"]}
      colors={["indigo", "blue","indigo","rose"]}
      yAxisWidth={40}
    />
      </Card>
    </div>
  )
}

export default DailyData