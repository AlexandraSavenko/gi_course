import css from './SideBar.module.css'

const SideBar = ({list}) => {
  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        {
        list.map(el => <li key={el.id}>{el.verb}</li> )
      }
      </ul>
    </div>
  )
}

export default SideBar;
