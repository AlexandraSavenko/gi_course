import { useEffect, useRef, useState } from "react";
import css from "./TaskTwo.module.css";
import { gameCnst, levels, playerData } from "../../data/constants";
import { checkCollision } from "../../utils/checkColligion";
import TaskTwoWordList from "./TaskTwoWordList";

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
        let newX = prev.x + vx;
        grounded = false;
         const futurePlayer = {
            ...prev,
            x: newX,
            y: newY
          }
        for(const platform of platforms) {
          if( checkCollision(futurePlayer, platform) ){
            // console.log("Landing on:", platform)
            //was the player falling: vy > 0
            //were the player's feet above the platform? 
            if(vy > 0 && prev.y + prev.height <= platform.y){
              newY = platform.y - prev.height;
            vy = 0;
            grounded = true;
            } 
          }
        }
        if (newY >= gameCnst.floor) {
          newY = gameCnst.floor;
          vy = 0;
          grounded = true;
        }
        return {
          ...prev,
          x: newX,
          y: newY,
          velocityX: vx,
          velocityY: vy,
          grounded,
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
        {platforms.map((el, index) => (
          <div
            key={index}
            className={css[el.type]}
            style={{
              // "--x": `${el.x}px`,
              // "--y": `${el.y}px`,
              // "--w": `${el.width}px`,
              // "--h": `${el.height}px`,
              left: el.x,
              top: el.y,
              width: el.width,
              height: el.height
            }}
            
          ></div>
        ))}
        <TaskTwoWordList list={rightW}/>
        {/* {rightW.map((el, index) => <p
        className={css.word}
        key={index}
        style={{
          top: el.y,
          left: el.x
        }}
        >my word</p> )} */}
        {wrongW.map((el,index) => <p className={css.wrongWrod} style={{top: el.y, left: el.x}} key={index}>word</p> )}
      </div>
    </div>
  );
};

export default TaskTwo;
