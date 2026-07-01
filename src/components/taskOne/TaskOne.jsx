import { useMemo, useState } from "react";
import css from "./TaskOne.module.css";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { Link } from 'react-router-dom'
import DraggableLetter from "../draggableLetter/DraggableLetter";
import DroppableBox from "../droppableBox/DroppableBox";
import ButtonMax from "../buttonMax/ButtonMax";
import Modal from "../modal/Modal"
const attribute = ["enjoy"];
const TaskOne = () => {
  const [selected, setSelected] = useState("");
  const [words, setWords] = useState(attribute);
  const [placed, setPlaced] = useState({});
  const [done, setDone] = useState([]);
  //devide selected word into letters
  const wordArray = useMemo(() => {
    return selected
      ? selected.split("").map((el, index) => ({ id: `l-${index}`, value: el }))
      : [];
  }, [selected]);
  //Creat empty boxes for the letter
  const boxes = useMemo(() => {
    return wordArray.map((el, index) => ({
      id: `b-${index}`,
      correct: el.value,
      filled: false,
    }));
  }, [wordArray]);
  //Mix the letters of the selected word
  const mixed = useMemo(() => {
    return [...wordArray].sort((a, b) => {
      const res = a.value.localeCompare(b.value);
      return res !== 0 ? res : a.id.localeCompare(b.id);
    });
  }, [wordArray]);
  const availableLetters = mixed.filter(
    (l) => !Object.values(placed).some((p) => p.id === l.id),
  );
  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const letter = wordArray.find((l) => l.id === active.id);
    const box = boxes.find((b) => b.id === over.id);

    if (!letter || !box) return;

    if (letter.value === box.correct) {
      setPlaced((prev) => ({ ...prev, [box.id]: letter }));
    }
  };

  const handleClickDone = () => {
    if (availableLetters.length !== 0) {
      alert("Please, complete the word first!")
      return};
    setDone((prev) => prev.includes(selected) ? prev : [...prev, selected]);
    setWords((prev) => prev.filter((el) => el !== selected));
    setSelected("");
    setPlaced({})
  };
  
  return (
    <div className={css.wrap}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className={css.circle}>
          {availableLetters.map((letter) => (
            <DraggableLetter key={letter.id} letter={letter} />
          ))}
        </div>
        <ul className={css.list}>
          {boxes.map((box) => (
            <DroppableBox
              key={box.id}
              box={box}
              placedLetter={placed[box.id]}
            />
          ))}
        </ul>
      </DndContext>
      <div>
        <ul className={css.wordBank}>
          {words.map((el, index) => (
            <li
              className={css.word}
              key={index}
              onClick={() => setSelected(el)}
            >
              {el === selected ? "" : el.split("").sort()}
            </li>
          ))}
        </ul>
        <ul className={css.wordBank}>
          {done ? (
            done.map((el, index) => <li key={index}>{el}</li>)
          ) : (
            <div>...</div>
          )}
        </ul>
      </div>
      {selected && availableLetters.length === 0 && (
        <ButtonMax onClick={handleClickDone} value={"Done"} />
        // <button onClick={handleClickDone}>Done</button>
      )}
      {words.length === 0 && <div className={css.linkWrap}>
        <p>You are ready now. Follow the link:</p>
         <Link to={"/games/task2"}>task 2</Link></div>}
    </div>
  );
};

export default TaskOne;
