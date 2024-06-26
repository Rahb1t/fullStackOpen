import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountries = () => {
  return axios.get(allUrl).then((response) => response.data)
}

const getCountry = (search) => {
  return axios.get(`${baseUrl}/${search}`).then((response) => response.data)
}

export default { getCountries, getCountry }
