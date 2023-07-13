import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { GlobeIcon } from "@heroicons/react/solid";

const CityPicker = ({setSidebarInfo}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  
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

  const options = Country.getAllCountries().map((country) => ({
    value: {
      latitude: country.latitude,
      longitude: country.longitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

  const cityOptions = City.getCitiesOfCountry(selectedCountry?.value.isoCode)?.map((city) => ({
    value: {
      latitude: city.latitude,
      longitude: city.longitude,
      countryCode: city.countryCode,
      cityName:city.name
    },
    label: city.name,
  }));

  const handleSelectedCountry = (option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option) => {
    setSelectedCity(option);
    const value=option.value
    setSidebarInfo(value)
    
  };


 
  return (
    <div className="">
      <div className="text-white flex space-x-2 pb-2 items-center">
        <GlobeIcon className="h-5 w-5"/>
        <label htmlFor="country">Country</label>
      </div>
      <Select options={options} className="text-black min-w-[100%]" value={selectedCountry} onChange={handleSelectedCountry} />
      <br />
      {
      selectedCountry && 
      <div className="text-white   pb-2">
        <div className="flex space-x-2 pb-2 items-center">
        <GlobeIcon className="h-5 w-5"/>
        <label htmlFor="country">Country</label>
        </div>

      <Select options={cityOptions} className="text-black" value={selectedCity} onChange={handleSelectedCity} />
      </div>
      
      }

    </div>
  );
};

export default CityPicker;
