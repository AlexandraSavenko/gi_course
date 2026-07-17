import { useEffect, useRef, useState } from "react";
import css from "./TaskTwo.module.css";
import { gameCnst, playerData } from "../../data/constants";

const TaskTwo = () => {
  const [player, setPlayer] = useState(playerData);
  const keys = useRef({});

  //Game loop
  useEffect(() => {
    let animationId;
    function update() {
      setPlayer((prev) => {
        let vx = prev.velocityX;
        let vy = prev.velocityY;
        let grounded = prev.grounded;
        if (keys.current.ArrowLeft) {
          vx = -gameCnst.moveSpeed;
        }
        if (keys.current.ArrowRight) {
          vx = gameCnst.moveSpeed;
        }
        if (!keys.current.ArrowLeft && !keys.current.ArrowRight) {
          vx = 0;
        }
        if (keys.current.Space && grounded) {
          vy = gameCnst.jumpForce;
          grounded = false;
        }

        vy += gameCnst.gravity;
        let newY = prev.y + vy;
        grounded = false;
        if (newY >= gameCnst.floor) {
          newY = gameCnst.floor;
          vy = 0;
          grounded = true;
        }
        return {
          ...prev,
          x: prev.x + vx,
          y: newY,
          velocityX: vx,
          velocityY: vy,
          grounded
        };
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
      </div>
    </div>
  );
};

export default TaskTwo;
