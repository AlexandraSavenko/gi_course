import css from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = ({onClose}) => {
  return (
    <div className={css.menuBox}>
      <Link onClick={onClose} to={"/"}>Intro</Link>
      <Link onClick={onClose} to={"/games/task1"}>task 1</Link>
      <Link onClick={onClose} to={"/games/task2"}>task 2</Link>
      <Link onClick={onClose} to={"/games/task3"}>task 3</Link>
      
    </div>
  )
}

export default Menu
