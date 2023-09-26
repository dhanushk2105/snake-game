"use client";
import { useEffect, useRef, useState } from 'react'
import getRandomCoordinates from '@/utils/getRandomCoordinates'



function Game() {
  const canvasRef = useRef(null);
  const [Spacebar, setSpacebar] = useState(false);
  const [snake, setSnake] = useState([{x: 0, y: 0}])
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

    const side = 5;
    const lineWidth = 5;
    const strokeColor = 'white';

    context.beginPath();
    context.rect(10 , 10 , side, side)
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
    context.closePath();
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
  }, [Spacebar]);

  return (
    <canvas ref={canvasRef} className='border-white border border-double w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw]'>

    </canvas>
  )
}

export default Game