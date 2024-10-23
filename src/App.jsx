import React from 'react'
import './App.css'
import phimg from './assets/phonecall.png';

const App = () => {
  return (
    <>
      <div className='bg-purple-800 '> 
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
        <main className='bg-pink-100 flex p-14 h-64 '>
        <div className='flex-[4]'>
          <div className='text-2xl' >
            The Best Phones in the town
          </div>
          <p className='text-sm w-1/2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda ut quas quidem dicta odit suscipit repudiandae dolores, eveniet nemo pariatur non dolorem atque praesentium culpa, ad ratione incidunt? Qui?</p>
          <div className='buttons'>
            <button className='bg-purple-700 my-3 rounded-xl text-white hover:bg-slate-900'>Buy Now</button>
            <button className='bg-purple-700 my-3 rounded-xl text-white hover:bg-slate-900 mx-3'>Contact Us</button>

          </div>
          </div>
          <div className='flex-[1]'>
            <img src={phimg} className='h-44 ' />
           </div>
        
        </main>

    </>
  )
}

export default App
