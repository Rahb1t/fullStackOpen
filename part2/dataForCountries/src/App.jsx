import { useEffect, useState } from 'react'
import countriesService from './services/countries'
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getCountries().then((response) => {
      //const counrtiesNames = response.map((country) => country.name)
      setCountries(response)
    })
  }, [])

  const contriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <div>
        find countries <input value={search} onChange={handleSearch} />
      </div>
      <Countries countries={contriesToShow} />
    </>
  )
}

export default App
