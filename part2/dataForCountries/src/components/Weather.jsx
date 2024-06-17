import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const getWeather = (lat, lon) => {
  return weatherService
    .getWeather(lat, lon)
    .then((res) => {
      //      console.log(res)
      const temp = Math.round((res.main.temp - 273.15) * 100) / 100
      const icon = res.weather[0].icon
      const wind = res.wind.speed
      //      console.log(temp, icon, wind)
      return { temp, icon, wind }
    })
    .catch((error) => console.error(error))
}

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = () => {
      getWeather(country.latlng[0], country.latlng[1])
        .then((weatherData) => {
          setWeather(weatherData)
        })
        .catch((error) => console.error(error))
    }

    fetchWeather()
  }, [country.latlng])

  const displayWeather = () => {
    return (
      <div>
        <div>Temperature: {weather.temp} Celsius</div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt='weather icon'
          width='100'
        />
        <p>Wind: {weather.wind} m/s</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Weather in {country.name.common}</h2>
      {weather ? displayWeather() : 'Loading...'}
    </div>
  )
}

export default Weather
