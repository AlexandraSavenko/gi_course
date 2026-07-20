import css from './TaskTwo.module.css'

const TaskTwoWordList = ({list}) => {
  return ( <ul>
    {list.map((el, index) => <li
            className={css.word}
            key={index}
            style={{
              top: el.y,
              left: el.x
            }}
            >my word</li> )}
  </ul>
  )
}

export default TaskTwoWordList
