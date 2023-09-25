import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-900 w-full text-white flex justify-between items-center px-10 py-1">
        <div className='font-semibold'>
            Snake Game
        </div>
        <div>
            <button className='px-4 py-1 hover:bg-slate-700 rounded-xl'>
                Sign In
            </button>
        </div>
    </nav>
  )
}

export default Navbar