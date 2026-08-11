//Game constants
export const gameCnst = {
  gravity: 0.5,
  jumpForce: -12,
  moveSpeed: 2.5,
  enemySpeed: 1,
  floor: 480,
};

//Player object
export let playerData = {
  x: 30,
  y: 40,
  width: 20,
  height: 20,
  velocityX: 0,
  velocityY: 0,
  grounded: true,
};

//levels
export const levels = [
  //level_
  {
    platforms: [
      {x: 0, y: 40, width: 200, height: 80, type: "ground"},
      {x: 450, y: 40, width: 50, height: 80, type: "ground"},
      { x: 360, y: 300, width: 120, height: 80, type: "floating" },
      { x: 200, y: 180, width: 120, height: 80, type: "floating" },
      { x: 20, y: 250, width: 120, height: 80, type: "floating" },
      { x: 100, y: 400, width: 180, height: 80, type: "floating" },
      { x: 400, y: 440, width: 100, height: 80, type: "floating" },
      { x: 150, y: 560, width: 180, height: 80, type: "floating" },
      { x: 0, y: 720, width: 200, height: 80, type: "floating" },
      { x: 300, y: 720, width: 200, height: 80, type: "floating" },
      { x: 0, y: 860, width: 500, height: 40, type: "ground" },
    ],
    enemies: [
      { x: 250, y: 344, type: "brown" },
      { x: 550, y: 344, type: "brown" },
    ],
    wordPosition: [
      { x: 20, y: 160 },
      { x: 400, y: 160 },
      { x: 420, y: 410 },
      { x: 200, y: 260 },
      { x: 180, y: 370 },
      { x: 260, y: 530 },
      { x: 400, y: 600 },
      { x: 60, y: 690 },
      { x: 340, y: 830 },
      { x: 50, y: 830 },
    ],
    exitPosition: [],
    background: "img"
  },
  {
    platforms: [
      {x: 0, y: 40, width: 200, height: 80, type: "ground"},
      {x: 450, y: 40, width: 50, height: 80, type: "ground"},
      { x: 360, y: 300, width: 120, height: 80, type: "floating" },
      { x: 200, y: 180, width: 120, height: 80, type: "floating" },
      { x: 20, y: 250, width: 120, height: 80, type: "floating" },
      { x: 100, y: 400, width: 180, height: 80, type: "floating" },
      { x: 400, y: 440, width: 100, height: 80, type: "floating" },
      { x: 150, y: 560, width: 180, height: 80, type: "floating" },
      { x: 0, y: 720, width: 200, height: 80, type: "floating" },
      { x: 300, y: 720, width: 200, height: 80, type: "floating" },
      { x: 0, y: 860, width: 500, height: 40, type: "ground" },
    ],
    enemies: [
      { x: 250, y: 344, type: "brown" },
      { x: 550, y: 344, type: "brown" },
    ],
    wordPosition: [
      // { x: 20, y: 160 },
      // { x: 400, y: 160 },
      // { x: 420, y: 410 },
      // { x: 200, y: 260 },
      // { x: 180, y: 370 },
      // { x: 260, y: 530 },
      // { x: 400, y: 600 },
      // { x: 60, y: 690 },
      // { x: 340, y: 830 },
      // { x: 50, y: 830 },
    ],
    exitPosition: [],
    background: "img"
  },
];
