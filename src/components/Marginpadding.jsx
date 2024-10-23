import React from 'react'
// Margin, Border and Padding

const Marginpadding = () => {
  return (
    <div className='bg-cyan-100 p-3 border-2 border-purple-900'>
      <ul className='flex justify-end space-x-5 '>
        <li className='mx-[65px]'>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default  Marginpadding;
