import React from 'react'

function KeyPad({ direction, setDirection }) {
    return (
        <div className='flex md:hidden flex-wrap w-full justify-center gap-20 py-5'>
            <button onClick={() => {
                direction.x !== 1 ? setDirection({ x: -1, y: 0 }) : null
            }}
                className='flex justify-center items-center aspect-square rounded-xl border-white border-spacing-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>
            <button onClick={() => {
                direction.x !== -1 ? setDirection({ x: 1, y: 0 }) : null
            }}
                className='flex justify-center items-center aspect-square rounded-xl border-white border-spacing-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
            </button>
            <button onClick={() => {
                direction.y !== 1 ? setDirection({ x: 0, y: -1 }) : null

            }}
                className='flex justify-center items-center aspect-square rounded-xl border-white border-spacing-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </button>
            <button onClick={() => {
                direction.y !== -1 ? setDirection({ x: 0, y: 1 }) : null
            }}
                className='flex justify-center items-center aspect-square rounded-xl border-white border-spacing-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button>
        </div>
    )
}

export default KeyPad