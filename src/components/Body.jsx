import React from 'react'
import phimg from '../assets/phonecall.png';

const Body = () => {
  return (
    <div>
      <div className='bg-pink-100 flex p-14 h-64 border-b-4 border-pink-800 '>
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
        
        </div>
    </div>
  )
}

export default Body
