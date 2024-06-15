import { useState } from 'react'

const Numbers = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} />
          <div>debug: {newName}</div>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App
