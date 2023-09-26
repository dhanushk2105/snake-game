"use client";
import { useEffect, useRef, useState } from 'react'
import getRandomCoordinates from '@/utils/getRandomCoordinates'



function Game() {
  const canvasRef = useRef(null);
  const [Spacebar, setSpacebar] = useState(false);
  const [snake, setSnake] = useState([
    {x: 100, y: 100},
    {x: 100, y: 105},
    {x: 100, y: 110},
    {x: 100, y: 115},
    {x: 100, y: 120},
    {x: 100, y: 125},
    {x: 100, y: 130},
  ])
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ' || event.keyCode === 32) {
        setSpacebar((prev) => !prev)
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;

    const {x, y} = getRandomCoordinates(canvas.width - 10)

    const side = 5;
    const lineWidth = 5;
    const strokeColor = 'blue';


    context.beginPath();
    context.rect(x, y, side, side)
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
    context.closePath();

    //snake
    const contextSnake = canvas.getContext('2d');

    contextSnake.beginPath();
    snake.forEach(segment => {
    contextSnake.rect(segment.x , segment.y , 5, 5)
    });

    contextSnake.lineWidth = 5;
    contextSnake.strokeStyle = "white";
    contextSnake.stroke();
    contextSnake.closePath();
  }, [Spacebar]);

  return (
    <canvas ref={canvasRef} className='border-white border border-double w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw]'>

    </canvas>
  )
}

export default Game