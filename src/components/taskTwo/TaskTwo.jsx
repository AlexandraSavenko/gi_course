import { useContext, useEffect, useMemo, useRef, useState } from "react";
import css from "./TaskTwo.module.css";
import { levels, playerData } from "../../data/constants";
import TaskTwoWordList from "./TaskTwoWordList";
import applyKeyboardInput from "../../utils/useKeyboard";
import movePlayer from "../../utils/movePlayer";
import handlePlatformCollision from "../../utils/handlePlatformCollision";
import handleFloor from "../../utils/handleFloor";
import { GameContext } from "../../context/GameContext";
import buildLevel from "../../utils/buildLevel";

const TaskTwo = () => {
  const { state } = useContext(GameContext);
  const selectedWords = state.selectedWords;
  const targetType = state.targetType;
  const levelN = state.level
  const level = useMemo(() => {
    return buildLevel(levels[levelN - 1], selectedWords, targetType )
  }, [levelN, selectedWords, targetType])
  //if the user or the game could change level, it would be useState, but it is simply calculated so it is useMemo 
  const [player, setPlayer] = useState(playerData);



  const keys = useRef({});

  //Game loop
  useEffect(() => {
    let animationId;
    function update() {
      setPlayer((prev) => {
        let player = applyKeyboardInput(prev, keys);
        player = movePlayer(player);
        player = handlePlatformCollision(prev, player, level.platforms);
        player = handleFloor(player);
        return player;
      });
      animationId = requestAnimationFrame(update);
    }
    update();
    //update is called from requestAnimationFrame, which runs outside React's render/effect lifecycle
    //effect actually runs once,
    //then the browser calls update() on each animation frame
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const down = (e) => {
      keys.current[e.code] = true;
    };
    const up = (e) => {
      keys.current[e.code] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);
  return (
    <div>
      <div className={css.gameArea}>
        <div
          style={{
            "--x": `${player.x}px`,
            "--y": `${player.y}px`,
          }}
          className={css.ship}
        ></div>
        {level.platforms.map((el, index) => (
          <div
            key={index}
            className={css[el.type]}
            style={{
              left: el.x,
              top: el.y,
              width: el.width,
              height: el.height,
            }}
          ></div>
        ))}
        <TaskTwoWordList list={level.words} />
      </div>
    </div>
  );
};

export default TaskTwo;
