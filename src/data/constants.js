//Game constants
export const gameCnst = {
  gravity: 0.5,
  jumpForce: -12,
  moveSpeed: 2.5,
  enemySpeed: 1,
  floor: 480,
};

//Game state
export let gameState = {
  score: 0,
  level: 1,
  lives: 3,
  gameRunning: true,
};

//Player object
export let playerData = {
  x: 30,
  y: 450,
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
  //level_
  {
    platforms: [
      { x: 0, y: 420, width: 200, height: 80, type: "ground" },
      { x: 300, y: 420, width: 200, height: 80, type: "ground" },
      { x: 150, y: 340, width: 180, height: 40, type: "floating" },
      { x: 360, y: 300, width: 120, height: 40, type: "floating" },
      { x: 200, y: 200, width: 120, height: 40, type: "floating" },
      { x: 20, y: 200, width: 120, height: 40, type: "floating" },
      { x: 150, y: 100, width: 200, height: 40, type: "floating" },
      { x: 400, y: 100, width: 100, height: 40, type: "floating" },
    ],
    enemies: [
      { x: 250, y: 344, type: "brown" },
      { x: 550, y: 344, type: "brown" },
    ],
    rightWords: [
      { x: 420, y: 380 },
      { x: 220, y: 260 },
      { x: 420, y: 160 },
      { x: 20, y: 160 },
      { x: 240, y: 60 },
    ],
    wrongWords: [
      { x: 350, y: 220 },
      { x: 750, y: 240 },
    ],
  },
];
