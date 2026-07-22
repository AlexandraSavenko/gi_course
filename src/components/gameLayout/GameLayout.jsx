import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import css from './GameLayout.module.css'

const GameLayout = () => {
  return (
    <div className={css.layoutWrap}>
      <Outlet/>
    </div>
  )
}

export default GameLayout
