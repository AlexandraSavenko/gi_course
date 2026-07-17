import { gameState } from "../data/constants"
import { loadLevel } from "./loadLevel"

export const initGame = () => {
    loadLevel(gameState.level - 1)
    console.log()
    gameLoop()
}