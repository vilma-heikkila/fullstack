import { useState } from 'react'

const FilterForm = (props) => {
  return (
    <form>
          <div>
            filter: <input value={props.value} onChange={props.handler}/>
          </div>
        </form>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.function}>
        <div>
          name: <input value={props.name} onChange={props.namehandler} />
        </div>
        <div>
          number: <input value={props.number} onChange={props.numberhandler} />
        </div>
        <div>
          <button type="submit">add</button>
          <p></p>
        </div>
      </form>
  )
}

const Contact = ({person}) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  )
}

const Contacts = ({contactsToShow}) => {
  return (
    <ul>
        {contactsToShow.map(person => <Contact key={person.name} person={person}/>)}
      </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234556677' },
    { name: 'Berta Bellas', number: '6543423'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name : newName,
      number: newNumber
    }

    const names = persons.map(persons => persons.name);
    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook` )
    }
    
    else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  const contactsToShow = persons.filter(person => person.name.includes(filterValue))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={filterValue} handler={handleFilterChange}/>

      <h2>Add a new contact</h2>
      <PersonForm function={addName} name={newName} namehandler={handleNameChange} number={newNumber} numberhandler={handleNumberChange}/>

      <h2>Numbers</h2>
      <Contacts contactsToShow={contactsToShow}/>
    </div>
  )

}

export default App