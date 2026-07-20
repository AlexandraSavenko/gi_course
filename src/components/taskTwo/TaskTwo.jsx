import { useEffect, useRef, useState } from "react";
import css from "./TaskTwo.module.css";
import { levels, playerData } from "../../data/constants";
import TaskTwoWordList from "./TaskTwoWordList";
import applyKeyboardInput from "../../utils/useKeyboard";
import movePlayer from "../../utils/movePlayer";
import handlePlatformCollision from "../../utils/handlePlatformCollision";
import handleFloor from "../../utils/handleFloor";

const TaskTwo = () => {
  const [player, setPlayer] = useState(playerData);
  const platforms = levels[0].platforms;
  const rightW = levels[0].rightWords;
  const wrongW = levels[0].wrongWords;
  const keys = useRef({});


  //Game loop
  useEffect(() => {
    let animationId;
    function update() {
      setPlayer((prev) => {
        let player = applyKeyboardInput(prev, keys)
        player = movePlayer(player)
        player = handlePlatformCollision(prev, player, platforms)
        player = handleFloor(player)
        return player;
      });
      animationId = requestAnimationFrame(update);
    }
    update();
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
        {platforms.map((el, index) => (
          <div
            key={index}
            className={css[el.type]}
            style={{
              left: el.x,
              top: el.y,
              width: el.width,
              height: el.height
            }}
            
          ></div>
        ))}
        <TaskTwoWordList list={rightW}/>
        <TaskTwoWordList list={wrongW}/>
      </div>
    </div>
  );
};

export default TaskTwo;
