import css from './Contact.module.css'
import { FaUser, FaPhone, FaMinus } from "react-icons/fa";

const Contact = ({ data: { id, name, number}, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li className={css.contactName}><FaUser className={css.liIcon} />{name}</li>
        <li className={css.contactNumber}><FaPhone className={css.liIcon} />{number}</li>
      </ul>
      <button className={css.contactBtn} onClick={() => onDelete(id)}><FaMinus className={css.deleteBtnIcon}/>Delete</button>
    </div>
  )
}

export default Contact