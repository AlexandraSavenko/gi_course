//Game constants
export const gameCnst = {
  gravity: 0.5,
  jumpForce: -12,
  moveSpeed: 2.5,
  enemySpeed: 1,
  floor: 200
}


//Game state
export let gameState = {
  score: 0,
  level: 1,
  lives: 3,
  gameRunning: true,
  keys: {},
};

//Player object
export let playerData = {
  x: 30,
  y: 200,
  width: 20,
  height: 20,
  velocityX: 0,
  velocityY: 0,
  grounded: true,
};

//Game objects arrays
export let gameObjects = {
  platforms: [],
  enemies: [],
  rightWords: [],
  wrongWords: [],
};

//levels
export const levels = [
  //level_1
  {
    platforms: [
      { x: 0, y: 360, width: 400, height: 40, type: "ground" },
      { x: 500, y: 360, width: 300, height: 40, type: "ground" },
      { x: 200, y: 280, width: 60, height: 20, type: "floating" },
      { x: 300, y: 240, width: 60, height: 20, type: "floating" },
      { x: 600, y: 280, width: 80, height: 20, type: "floating" },
    ],
    enemies: [
        {x: 250, y: 344, type: 'brown'},
        {x: 550, y: 344, type: 'brown'}
    ],
    rightWords: [
        {x: 220, y: 260},
        {x: 320, y: 240},
        {x: 620, y: 260}
    ],
    wrongWords: [
        {x: 350, y: 220},
        {x: 750, y: 240},
    ]
  },
];
