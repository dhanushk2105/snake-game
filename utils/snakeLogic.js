export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }];

export function updateSnake() {
    console.log('update snake');
    }

export function renderSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('bg-green-500');
        gameBoard.appendChild(snakeElement);
    })
}