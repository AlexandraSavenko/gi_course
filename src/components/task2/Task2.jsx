import { useState } from "react";
import css from "./Task2.module.css";
import ButtonMax from "../buttonMax/ButtonMax";
const words = ["consider", "enjoy", "finish", "avoid", "keep", "deny"];
const Task2 = () => {
  const [selected, setSelected] = useState("");
  const [usedIndex, setUsedIndex] = useState([]);
  const [answer, setAnswer] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showHint, setShowHint] = useState(false)

  const generatRandomInt = () => {
    return Math.floor(Math.random() * words.length);
  };

  const onStart = () => {
    if (usedIndex.length === words.length) {
      setMessage("you are ready!");
      setShowMessage(true);
      return;
    }

    let newIndex;
    do {
      newIndex = generatRandomInt();
    } while (usedIndex.includes(newIndex));
    setUsedIndex((prev) => [...prev, newIndex]);
    setSelected(words[newIndex]);
    setAnswer("");
    setShowMessage(false);
  };
  const onCheck = () => {
    setShowMessage(true);
    if (answer.trim().toLowerCase() === selected.toLowerCase()) {
      setSelected("");
      setAnswer("")
      setMessage(`Well done!`);
    } else {
      setMessage(`Sorry, but this word was ${selected}`);
    }
  };
 
  const onHint = () => {
setShowHint(true)
setTimeout(() => {setShowHint(false)}, 2000)
  }
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {words.map((el, index) => (
          <li key={index}>{el !== selected ? el : ""}</li>
        ))}
      </ul>
      <ButtonMax onClick={onStart} value={"Start"} />
      <input className={css.input} disabled={selected === ""} value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" />
      {selected && <div>
        <ButtonMax onClick={onCheck} value={"Check"}/>
        <ButtonMax onClick={onHint} value={"Give me a hint"}/>
      </div> }
      {showHint && <p>{selected}</p> }
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default Task2;
