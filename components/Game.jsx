"use client";
import { main } from '@/utils/mainGameLogic';
import { useEffect, useRef } from 'react'

function Game() {
  const gameRef = useRef();


  useEffect(() => {
    const gameBoardEl = document.getElementById('game-board');
    console.log("gameBoardEl", gameBoardEl);
    console.log("gameRef", gameRef);
    // main(0, gameBoardEl);
  }
  , []);

  return (
    <div id="game-board" className='border-white border-2 w-[80vmin] aspect-square grid game'>
    </div>
  )
}

export default Game