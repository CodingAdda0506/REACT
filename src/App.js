import React, { useEffect, useState } from 'react'
import Button from './Components/Button';
import Button2 from './Components/Button2';
import axios from 'axios';

const App = () => {
  // /Syntax
  // const [state, setState] = useState(0);

  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8261912193420ebebf18e19c6483a022`);
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error Fetching the data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className="">
          <li>Pressure: {weatherData.main.pressure} atm</li>
          <li>Temperature: {weatherData.main.temp} &deg;K</li>
        </div>
      ) : (
        <p>Loading Data</p>
      )}
    </div>
  )
}

export default App;