import { levels, player } from "../data/constants"

export const loadLevel = (levelIndex) => {
    if(levelIndex >= levels.length){
        return
    }

    //Clearing existing object
    //clearLevel()

    const level = levels[levelIndex]

    //reset player - but maybe original object won't be modifies, it will be in state, so this won't be needed
    player.x = 50;
    player.y = 300;
    player.velocityX = 0;
    player.velocityY = 0;
    //function updateElementPosition(player.element, player.x, player.y)
    
    //Create platforms
    
}