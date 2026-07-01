import { gameState } from "../data/constants"

export const initGame = () => {
    loadLevel(gameState.level - 1)
    gameLoop()
}