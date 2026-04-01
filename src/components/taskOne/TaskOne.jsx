import { useMemo, useState } from "react";
import css from "./TaskOne.module.css";

const TaskOne = () => {
  const [selected, setSelected] = useState("");
  const words = ["consider", "enjoy", "finish"];

  const wordArray = useMemo(() => {
    return selected ? selected.split("") : [];
  }, [selected]);
  const mixed = useMemo(() => {
    return [...wordArray].sort();
  }, [wordArray]);

  return (
    <div className={css.wrap}>
      <ul className={css.circle}>
        {mixed.map((el, index) => (
          <li
            className={css.letter}
            key={index}
            style={{ "--i": index, "--total": mixed.length }}
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        {wordArray.map((el, index) => (
          <li className={css.gap} key={index}>
            <div className={css.box}></div>
          </li>
        ))}
      </ul>
      <ul className={css.wordBank}>
        {words.map((el, index) => (
          <li className={css.word} key={index} onClick={() => setSelected(el)}>
            {el.split("").sort()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskOne;
