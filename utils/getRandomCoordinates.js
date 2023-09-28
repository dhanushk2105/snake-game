function getRandomCoordinates(n, snake) {

    const randomX = Math.floor(Math.random() * n);
    const randomY = Math.floor(Math.random() * n);

    if (snake.some((cell) => cell.x === randomX && cell.y === randomY)) {
      return getRandomCoordinates(n, snake);
    } else {
      return { x: randomX, y: randomY };
    }
  
  }

  export default getRandomCoordinates;
  