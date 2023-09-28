import React from 'react'

function ScoreCard({ currentScore, highScore }) {
    return (
        <div className='flex md:flex-col justify-end md:justify-start items-end gap-12'>
            <div className='flex flex-col items-end'>
                <div className='text-white font-semibold text-4xl md:text-9xl'>
                    {currentScore ? currentScore : 0}
                </div>
                <div className='text-white text-xl md:text-2xl'>
                    score
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='text-white font-semibold text-4xl md:text-9xl'>
                    {highScore ? highScore : 0}
                </div>
                <div className='text-white text-xl md:text-2xl'>
                    high score
                </div>
            </div>
        </div>
    )
}

export default ScoreCard