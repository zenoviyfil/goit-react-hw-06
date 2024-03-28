import css from './SearchBox.module.css'
import { FaBook } from "react-icons/fa";

const SearchBox = ({ value, onSearch }) => {

return (
  <div className={css.searchBox}>
    <label className={css.inputField}>
    <FaBook className={css.searchBoxIcon}/>
    <p className={css.boxHeader}>Find contacts by name</p>
    </label>
      <input className={css.boxInput} type="text" value={value} onChange={(e) => onSearch(e.target.value)} placeholder=' Who are you looking for?'/>
  </div>
  )
}

export default SearchBox