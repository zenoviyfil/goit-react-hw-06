import './App.css'
import { useEffect, useState } from 'react'
import ContactForm from './Components/ContactForm/ContactForm'
import SearchBox from './Components/SearchBox/SearchBox'
import ContactList from './Components/ContactList/ContactList'
import contactsData from './contactsData.json'


function App() {

  const [contacts, setContacts] = useState(() => {
    const stringMails = localStorage.getItem('contacts')
    if (!stringMails) return contactsData;

    const parsedMails = JSON.parse(stringMails);
    return parsedMails;
  })

  useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    setContacts((initContacts) => {
      return [...initContacts, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContacts((initContacts) => {
      return initContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const [filter, setFilter] = useState('')

  const searchContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1 className='header'>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onSearch={setFilter}/>
      <ContactList contacts={searchContacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App
