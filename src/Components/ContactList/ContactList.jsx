import css from './ContactList.module.css'
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectContacts } from '../../selectors/selectors'
import { selectFilter } from '../../selectors/selectors'

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const searchContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))

  return (
    <ul className={css.contactsList}>
      {searchContact.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList