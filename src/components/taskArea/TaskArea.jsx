import { Outlet } from 'react-router-dom'
import css from './TaskArea.module.css'

const TaskArea = () => {
  return (
    <div className={css.taskArea}>
      <Outlet/>
    </div>
  )
}

export default TaskArea
