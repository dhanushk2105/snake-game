const moveSnake = (setSnake, direction) => {
    if(direction.x === 0 && direction.y === 0) return;
    setSnake((snake) => [{ x: snake[0].x + direction.x, y: snake[0].y + direction.y }, ...snake.slice(0, -1)])
  }

export default moveSnake;