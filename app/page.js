import Game from '@/components/Game'
import Leaderboard from '@/components/Leaderboard'
import ScoreCard from '@/components/ScoreCard'

export default function Home() {
  return (
   <main className='w-full min-h-full p-10 flex flex-col xl:flex-row gap-5'>
    <div className='xl:visible xl:w-1/5'>
      <Leaderboard />
      </div>
      <Game />
      <ScoreCard />
      <div className='xl:hidden'>
      <Leaderboard />
      </div>
   </main>
  )
}
