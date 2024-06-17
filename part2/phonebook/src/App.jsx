import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filters from './components/Filters'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const validatePerson = (name) => {
    const existingPerson = persons.find((person) => person.name === name)
    if (existingPerson) {
      return false
    }
    return true
  }

  const deletePerson = (id, name) => {
    window.confirm(`Delete ${name}?`)
    personService.deletePerson(id).then((res) => {
      setPersons(persons.filter((person) => person.id !== id))
      console.log(res)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    // we validate if the person already exist, if so, we ask the user if they want to update the number
    // if the user confirms, we update the number
    if (!validatePerson(newPerson.name)) {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newPerson.name)
        console.log(person)
        personService.update(person.id, newPerson).then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== updatedPerson.id ? person : updatedPerson
            )
          )
        })
      }
      return
    }
    personService.create(newPerson).then((newPerson) => {
      setPersons(persons.concat(newPerson))
    })
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
      <Numbers persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
