"use client";
import Game from '@/components/Game'
import Leaderboard from '@/components/Leaderboard'
import ScoreCard from '@/components/ScoreCard'

export default function Home() {
  return (
   <main className='w-full p-5 md:p-10 flex flex-col md:flex-row-reverse gap-5 justify-center items-start'>
    <div className='w-full items-center md:items-start md:w-3/5 flex flex-col md:flex-row justify-between'>
      <Game />
      <ScoreCard currentScore={100} highScore={999} />
    </div>
    <div className='w-full md:w-1/3'>
      <Leaderboard />
    </div>
   </main>
  )
}
