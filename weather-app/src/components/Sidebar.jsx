import { Card, Divider } from '@tremor/react'
import React from 'react'
import CityPicker from './CityPicker'
import { weathercodes } from '../weathercodes'
import { SunIcon } from '@heroicons/react/solid'

const Sidebar = ({setSidebarInfo,sidebarInfo,data}) => {
    // console.log(data)
    const time=data.current_weather.time
    const sunrise=data.daily.sunrise[0]
    const sunset=data.daily.sunset[0]

    // Convert the time string to a Date object
    const date = new Date(time);

    const risedate=new Date(sunrise)
    const setdate=new Date(sunset)

    // Get the day, date, and time separately
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const formattedDate = date.toLocaleString('en-US', {weekday: 'long', month: 'long', day: 'numeric',year:'numeric'});
    const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formattedRise = risedate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formattedSet = setdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
  const weathercode=data.current_weather.weathercode
  const icon=weathercodes[weathercode].icon
  const label=weathercodes[weathercode].label
  
  return (
   <>
   <div className="md:w-[400px] md:min-h-[100vh] bg-gradient-to-br from-[#202258] to-[#162d57] p-4 flex flex-col ">
        <div  className=' bg-transparent   text-left text-black p-1 border-none'>
        <p className='text-gray-200 text-5xl font-bold'>{sidebarInfo? sidebarInfo.cityName :"Select city"}</p>
        
            <p className='text-gray-500 text-sm'>Lat/Long: {sidebarInfo && sidebarInfo.latitude}, {sidebarInfo && sidebarInfo.longitude}</p>
            
             <div>
             </div>

            <Divider className=""></Divider>


                <CityPicker setSidebarInfo={setSidebarInfo}/>
                
            <Divider className=""></Divider>
            <div className='text-white flex text-lg justify-between'>      
           
      <p>{formattedDate}</p>
      <p> {formattedTime}</p>
            </div>
            <Divider className=""></Divider>
            <div className="text-lg text-gray-300">
                <img src={icon} alt={label}  width={60}  />
                <div className='flex space-x-10 items-center'>

                <p className='text-3xl font-bold'>{data.current_weather.temperature}°C</p>
                
                <p className='font-thin'>{label}</p>
                </div>
                
            </div>

            <div className="bg-[#405885bc] border border-[#6F90CD] py-3 px-4 rounded-md mt-4 flex items-center justify-between">
                <div className='flex items-center'>
                <SunIcon className='h-10 w-10 text-gray-400 font-extralight'/> <p className='text-gray-200'>Sunrise</p>
                </div>
                
                <p className='text-uppercase text-xl text-gray-200'>{formattedRise}</p>
                
            </div>
            <div className="bg-[#405885bc] border border-[#6F90CD] py-3 px-4 rounded-md mt-4 flex items-center justify-between">
                <div className='flex items-center'>
                <SunIcon className='h-10 w-10 text-gray-400 font-extralight'/> <p className='text-gray-200'>Sunset</p>
                </div>
                
                <p className='text-uppercase text-xl text-gray-200'>{formattedSet}</p>
                
            </div>
        </div>
    
    </div>
   </>
  )
}

export default Sidebar