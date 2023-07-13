import React, { useEffect, useState } from 'react';
import CallOutCard from './CallOutCard';
import Sidebar from './Sidebar';
import { data } from '../data';

const Home = () => {
  const [sidebarInfo, setSidebarInfo] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  console.log(sidebarInfo)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          const data={latitude: latitude,
          longitude: longitude,
          countryCode: "XXX",
          cityName:"Current location"}

          setSidebarInfo(data)

        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=GMT`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [],[sidebarInfo]);

  return (
    <div className="min-h-full flex flex-col md:flex-row">
      <Sidebar setSidebarInfo={setSidebarInfo} sidebarInfo={sidebarInfo} data={data} />
      <CallOutCard data={data} />
    </div>
  );
};

export default Home;
