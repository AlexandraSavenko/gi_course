export const checkCollision = (el1, el2) => {
  
  return (
    el1.x < el2.x + el2.width &&
    el1.x + el1.width > el2.x &&
    el1.y < el2.y + el2.height &&
    el1.y + el1.height > el2.y
  );
};
