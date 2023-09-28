"use client";
import Game from '@/components/Game'
import Leaderboard from '@/components/Leaderboard'
import ScoreCard from '@/components/ScoreCard'
import { useState } from 'react';

export default function Home() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  return (
    <main className='w-full p-5 md:p-10 flex flex-col md:flex-row-reverse gap-5 justify-center items-start'>
      <div className='w-full items-center md:items-start md:w-3/5 flex flex-col md:flex-row justify-between'>
        <Game score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
        <ScoreCard currentScore={score} highScore={highScore} />
      </div>
      <div className='w-full md:w-1/3'>
        <Leaderboard />
      </div>
    </main>
  )
}
