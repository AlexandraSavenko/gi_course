import React from "react";
import { checkCollision } from "./checkColligion";

const handlePlatformCollision = (previous, current, platforms) => {
  let result = { ...current };
  for (const platform of platforms) {
    const collision = checkCollision(current, platform);
    if (!collision) continue;
    const previousFeet = previous.y + previous.height;
    const currentFeet = current.y + current.height;
    if (current.velocityY > 0 && previousFeet <= platform.y && currentFeet >= platform.y) {
      result = {
        ...result,
        y: platform.y - result.height,
        velocityY: 0,
        grounded: true,
      };
    }
  }
  return result;
};

export default handlePlatformCollision;
