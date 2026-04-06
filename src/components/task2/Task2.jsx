import { useState } from "react";
import css from "./Task2.module.css";
const words = ["consider", "enjoy", "finish"];
const Task2 = () => {
  const [selected, setSelected] = useState("");
  const [usedIndex, setUsedIndex] = useState([]);
  //   const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  //   const wordArray = [...words];

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
      setMessage(`Well done!`);
    } else {
      setMessage(`Sorry, but this word was ${selected}`);
    }
  };
  return (
    <div className={css.wrap}>
      <ul>
        {words.map((el, index) => (
          <li key={index}>{el !== selected ? el : ""}</li>
        ))}
      </ul>
      <button onClick={onStart}>Start</button>
      <input value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" />
      <button onClick={onCheck}>Check</button>
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default Task2;
