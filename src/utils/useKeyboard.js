import React from "react";
import { gameCnst } from "../data/constants";

const applyKeyboardInput = ( player, keys ) => {
  let vx = player.velocityX;
  let vy = player.velocityY;
  let grounded = player.grounded;
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
  return {...player,
    velocityX: vx,
    velocityY: vy,
    grounded
  };
};

export default applyKeyboardInput;
