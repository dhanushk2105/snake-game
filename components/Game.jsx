"use client";
import { useEffect, useState } from 'react'
import getRandomCoordinates from '@/utils/getRandomCoordinates';
import moveSnake from '@/utils/moveSnake';

const SNAKE_SPEED = 5;

function Game({ score, setScore, setHighScore, highScore, direction, setDirection }) {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }])
  const [food, setFood] = useState({ x: 10, y: 10 })
  const [gameOverScreen, setGameOverScreen] = useState(false)

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowUp':
        direction.x !== 1 ? setDirection({ x: -1, y: 0 }) : null
        break
      case 'ArrowDown':
        direction.x !== -1 ? setDirection({ x: 1, y: 0 }) : null
        break
      case 'ArrowLeft':
        direction.y !== 1 ? setDirection({ x: 0, y: -1 }) : null
        break
      case 'ArrowRight':
        direction.y !== -1 ? setDirection({ x: 0, y: 1 }) : null
        break
      default:
        break
    }
  }

  function updateGame() {
    if (gameOver()) {
      stopSnake()
      setGameOverScreen(true)
    } else {
      moveSnake(setSnake, direction)
      onFoodCollision()
    }
  }

  function resetGame() {
    setSnake([{ x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }])
    setFood({ x: 10, y: 10 })
    setDirection({ x: 1, y: 0 })
    setGameOverScreen(false)
    setScore(0)
    if (score > highScore) {
      setHighScore(score)
    }
  }

  function onFoodCollision() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
      const [head, ...body] = snake;
      const newSnakeBody = [{ x: head.x + direction.x, y: head.y + direction.y }, head, ...body]
      setFood(getRandomCoordinates(21, snake))
      setSnake(newSnakeBody)
      setScore((prevScore) => prevScore + 1)
    }
  }

  function wallCollision() {
    return snake[0].x < 0 || snake[0].x > 20 || snake[0].y < 0 || snake[0].y > 20
  }

  function selfCollision() {
    const [head, ...body] = snake;
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  }

  function gameOver() {
    return wallCollision() || selfCollision()
  }

  function stopSnake() {
    setDirection({ x: 0, y: 0 })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  useEffect(() => {
    let interval = setInterval(updateGame, 1000 / SNAKE_SPEED)
    return () => clearInterval(interval)
  })

  return (
    <>
      {!gameOverScreen && <div className='border-white border-2 w-[80vmin] aspect-square grid game'>
        {Array.from({ length: 21 }, (_, i) => i).map((i) => {
          return (
            Array.from({ length: 21 }, (_, j) => j).map((j) => {
              return (
                i === food.x && j === food.y ? (
                  <div key={i + j} className="border-gray-950 border-2 bg-red-500">
                  </div>
                ) :
                  snake.some((segment) => segment.x === i && segment.y === j) ? (
                    i === snake[0].x && j === snake[0].y ?
                      (<div key={i + j} className="border-gray-950 border-2 bg-green-500">
                      </div>) :
                      (<div key={i + j} className="border-gray-950 border-2 bg-white">
                      </div>)) :
                    (
                      <div key={i + j} className="border-gray-950 border-2">
                      </div>)
              )
            }
            )
          )
        })}
      </div>}
      {gameOverScreen && <div className='border-red-800 border-2 w-[80vmin] aspect-square flex flex-col items-center justify-center'>
        <div className='text-white text-4xl font-semibold'>Game Over</div>
        <div className='text-white text-2xl font-semibold'>Press any key to restart</div>
        <button onClick={resetGame}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="White" class="w-16 h-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>

      </div>}
    </>
  )
}

export default Game