import { useState } from 'react'
import Weather from './Weather'

const showFullCountry = (country) => {
  //  console.log(country)
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`flag of ${country.name.common}`}
        width='100'
      />
      <Weather country={country} />
    </div>
  )
}

const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length === 1) {
    return showFullCountry(countries[0])
  }
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{' '}
          <button onClick={() => setSelectedCountry(country)}> show </button>
        </div>
      ))}
      {selectedCountry && showFullCountry(selectedCountry)}
    </div>
  )
}

export default Countries
