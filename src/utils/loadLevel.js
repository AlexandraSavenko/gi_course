import { levels } from "../data/constants"

export const loadLevel = (levelIndex) => {
    if(levelIndex >= levels.length){
        return
    }

    //Clearing existing object
    //clearLevel()

    const level = levels[levelIndex]
}