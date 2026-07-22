import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import SideBar from '../sideBar/SideBar'
import css from './IntroLayout.module.css'

const IntroLayout = () => {
  return (
    <div className={css.layout}>
        <SideBar type={"gerundVerbs"} />
        <main>
          <Outlet/>
        </main>
        <SideBar type={"infinitiveVerbs"} />
      </div>
  )
}

export default IntroLayout

