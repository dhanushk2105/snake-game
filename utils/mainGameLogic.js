import { SNAKE_SPEED, renderSnake } from './snakeLogic.js';
let previousRenderTime = 0;

export function main(currentRenderTime, gameBoard) {
  window.requestAnimationFrame(main);

  const previousRenderDalay = (currentRenderTime - previousRenderTime) / 1000;
  if (previousRenderDalay < 1 / SNAKE_SPEED) return;

  previousRenderTime = currentRenderTime;
  
  updateGame()
  renderGame(gameBoard)
}

function updateGame() {
    
    }

function renderGame(gameBoard) {
    renderSnake(gameBoard)
        }