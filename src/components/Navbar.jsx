import React from 'react'

const Navbar = () => {
  return (
      <div className='bg-purple-800  top-0 sticky'> 
        <nav className= 'text-white flex justify-between items-center p-2'>
          <span className='text-3xl font-bold'>Phones Mania</span>
          <div className='text-2xl' >
            <input type='text' placeholder='search here...' className='rounded-xl text-black' />
          </div>
          <ul className='flex space-x-10 p-4 '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Categories</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
