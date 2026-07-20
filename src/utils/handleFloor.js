import React from "react";
import { gameCnst } from "../data/constants";

const handleFloor = (player) => {
  if (player.y >= gameCnst.floor) {
    return { ...player, y: gameCnst.floor, velocityY: 0, grounded: true };
  }
  return player;
};

export default handleFloor;
