import React from 'react'

function ScoreCard() {
  return (
    <div className='flex md:flex-col justify-end md:justify-start items-end gap-12'>
        <div className='flex flex-col items-end'>
        <div className='text-white font-semibold text-4xl md:text-9xl'>
            369
        </div>
        <div className='text-white text-xl md:text-2xl'>
            score
        </div>
        </div>
        <div className='flex flex-col items-end'>
        <div className='text-white font-semibold text-4xl md:text-9xl'>
            999
        </div>
        <div className='text-white text-xl md:text-2xl'>
            high score
        </div>
        </div>
    </div>
  )
}

export default ScoreCard