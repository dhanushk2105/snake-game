"use client";
import React, { useEffect, useRef } from 'react'

const devicePixelRatio = window.devicePixelRatio || 1

function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;


    const centerX = canvas.width / 3;
    const centerY = canvas.height / 2;
    const side = 2; // Adjust the radius as needed
    const lineWidth = 4; // Adjust the line width as needed
    const strokeColor = 'blue'; // Adjust the stroke color as needed


    context.beginPath();
    context.rect(centerX, centerY, side, side)
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
    context.closePath();
  }, []);

  return (
    <canvas ref={canvasRef} className='border-white border border-double w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw]'>

    </canvas>
  )
}

export default Game