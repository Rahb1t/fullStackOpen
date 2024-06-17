const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <div>capital {countries[0].capital[0]}</div>
        <div>population {countries[0].population}</div>
        <h2>languages</h2>
        <ul>
          {Object.values(countries[0].languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img
          src={countries[0].flags.png}
          alt={`flag of ${countries[0].name.common}`}
          width='100'
        />
      </div>
    )
  }
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </div>
  )
}

export default Countries
