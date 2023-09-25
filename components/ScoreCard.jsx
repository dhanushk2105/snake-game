import React from 'react'

function ScoreCard() {
  return (
    <div className='flex flex-col justify-start items-end gap-12'>
        <div className='flex flex-col items-end'>
        <div className='text-white text-9xl'>
            369
        </div>
        <div className='text-white text-2xl'>
            score
        </div>
        </div>
        <div className='flex flex-col items-end'>
        <div className='text-white text-9xl'>
            999
        </div>
        <div className='text-white text-2xl'>
            high score
        </div>
        </div>
    </div>
  )
}

export default ScoreCard