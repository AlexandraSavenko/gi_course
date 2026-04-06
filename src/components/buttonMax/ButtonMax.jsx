import css from './ButtonMax.module.css'

const ButtonMax = ({onClick, value}) => {
  return (
    <button className={css.btn} onClick={onClick}>{value}</button>
  )
}

export default ButtonMax
