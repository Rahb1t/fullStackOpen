import axios from 'axios'

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const api_key = import.meta.env.VITE_OW_KEY

const getWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
  return axios.get(url).then((response) => response.data)
}

export default { getWeather }
