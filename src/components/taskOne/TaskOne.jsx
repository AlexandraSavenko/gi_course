import { useEffect, useMemo, useState } from "react";
import css from "./TaskOne.module.css";
import { closestCenter, DndContext } from "@dnd-kit/core";
import DraggableLetter from "../draggableLetter/DraggableLetter";
import DroppableBox from "../droppableBox/DroppableBox";
const attribute = ["consider", "enjoy", "finish"];
const TaskOne = () => {
  const [selected, setSelected] = useState("");
  const [words, setWords] = useState(attribute);
  const [placed, setPlaced] = useState({});
  const [done, setDone] = useState([]);
  const wordArray = useMemo(() => {
    return selected
      ? selected.split("").map((el, index) => ({ id: `l-${index}`, value: el }))
      : [];
  }, [selected]);
  const boxes = useMemo(() => {
    return wordArray.map((el, index) => ({
      id: `b-${index}`,
      correct: el.value,
      filled: false,
    }));
  }, [wordArray]);
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

  useEffect(() => {
    console.log("availableLetters", availableLetters)
  }, [availableLetters]);
    useEffect(() => {
    console.log("selected", selected)
  }, [selected]);
    useEffect(() => {
    console.log("boxes", boxes)
  }, [boxes]);
  useEffect(() => {
    console.log("placed", placed)
  }, [placed]);
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
        <button onClick={handleClickDone}>Done</button>
      )}
    </div>
  );
};

export default TaskOne;
