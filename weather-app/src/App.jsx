import Home from "./components/Home"
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom"
import WeatherData from "./components/WeatherData"



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/data" element={<WeatherData/>}/>

    </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App
