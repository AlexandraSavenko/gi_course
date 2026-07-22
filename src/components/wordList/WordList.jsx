import { useContext } from "react";
import css from "./WordList.module.css";
import { GameContext } from "../../context/GameContext";

const WordList = ({ verbs, selectable }) => {
  const { state, dispatch } = useContext(GameContext);
  const checkedVerbs = state.selectedWords;
  const handleToggle = (e, verb) => {
    const {checked} = e.target
    if(checked && checkedVerbs.length >= 10){
        return;
    } 
    dispatch({
        type: checked ? "ADD_VERB" : "REMOVE_VERB",
        payload: verb,
      });
  };

  if (!verbs) {
    return <div>Sorry, there's been a mistake, verbs can't be found</div>;
  }
  return (
    <div>
      <ul className={css.list}>
        {verbs.map((el) => (
          <li key={el.id}>
            {selectable ? (
              <input
                type="checkbox"
                checked={checkedVerbs.includes(el.id)}
                value={el.id}
                onChange={(e) => handleToggle(e, el)}
              />
            ) : null}
            {el.verb}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
