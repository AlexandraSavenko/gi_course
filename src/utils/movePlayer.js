import React from 'react'

const movePlayer = (player) => {
  return {...player,
    x: player.x + player.velocityX,
    y: player.y + player.velocityY
  }
}

export default movePlayer
