import css from './TaskOne.module.css'

const TaskOne = () => {
  const word = "consider"
  const wordArray = word.split("")
  console.log(wordArray)
  const mixed = wordArray.sort()
  console.log(mixed)
  return (
    <div className={css.wrap}>
      <ul className={css.circle}>
        {
          mixed.map((el, index) => <li className={css.letter} key={index} style={{"--i": index, "--total": mixed.length}}>{el}</li> )
        }
      </ul>
      <ul className={css.list}>
        {
          wordArray.map(el => <li className={css.gap} key={el}>
            <div className={css.box}></div>
          </li> )
        }
      </ul>
    </div>
  )
}

export default TaskOne;
