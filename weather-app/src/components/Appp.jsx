import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, Text, Metric,Title, AreaChart,Divider, Subtitle } from "@tremor/react";
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
}
function App() {
  const [count, setCount] = useState(0)
  const [selectedCountry, setSelectedCountry] = useState('');
const [selectedCity, setSelectedCity] = useState('');

const countryOptions = Country.getAllCountries().map((country) => ({
  value: country.isoCode,
  label: country.name,
}));

const cityOptions = selectedCountry
  ? City.getCitiesOfCountry(selectedCountry).map((city) => ({
      value: city.name,
      label: city.name,
    }))
  : [];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
    setSelectedCity('');
  };
  
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };
  

  return (
    <div className="w-full bg-black">
    <Card>
      <Title className='text-6xl text-center text-bold text-gray-700'>some title</Title>
      <Subtitle className='text-center text-lg text-bold text-green-700 mb-2'>This is the sub title</Subtitle>
      
    <Card className="max-w-sm mx-auto">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>
  <br />
  <Divider color='green'/>
  <Card className='w-full'> 
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4 w-[700px]"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
  
  </Card>
  <div className='text-black'>
    <label>Select Country:</label>
    <Select
      options={countryOptions}
      value={countryOptions.find((option) => option.value === selectedCountry)}
      onChange={handleCountryChange}
    />

    {selectedCountry && (
      <div>
        <label>Select City:</label>
        <Select
          options={cityOptions}
          value={cityOptions.find((option) => option.value === selectedCity)}
          onChange={handleCityChange}
        />
      </div>
    )}

    {selectedCity && (
      <div>
        <label>Selected Country:</label>
        <span>{selectedCountry}</span>
        <br />
        <label>Selected City:</label>
        <span>{selectedCity}</span>
      </div>
    )}
  </div>
   
    </div>
  )
}

export default App
