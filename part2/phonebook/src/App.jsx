import { useState } from 'react'
import Numbers from './components/Numbers'
import Filters from './components/Filters'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  // const [showAll, setShowAll] = useState(true)

  // const personsToShow = showAll
  //   ? persons
  //   : persons.filter((person) =>
  //       person.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const validatePerson = (name) => {
    const existingPerson = persons.find((person) => person.name === name)
    if (existingPerson) {
      alert(`${name} is already added to phonebook`)
      return false
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (!validatePerson(newPerson.name)) return
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    // setShowAll(false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filters filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {}
      <Numbers persons={personsToShow} />
    </div>
  )
}

export default App
