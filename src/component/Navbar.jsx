import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around items-center h-[10vh] bg-gradient-to-l from-red-400 to-green-400 text-white'> 
          <h1 className='text-3xl font-bold'>Logo</h1>
          <ul className='flex list-none gap-7 cursor-pointer text-2xl'>
              <li className='hover:text-blue-300'>Home</li>
              <li className='hover:text-blue-300'>Contact</li>
              <li className='hover:text-blue-300'>Hiiii</li>
          </ul>
    </div>
  )
}

export default Navbar;