import React from 'react'

const Responsive = () => {
  return (
    <>
    <div className='mx-0 p-4 bg-red-700 sm:bg-blue-700 sm:text-white md:bg-green-700 md:text-black lg:bg-pink-700 lg:text-white lg:hidden xl:bg-purple-800 xl:text-black'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odit, accusamus non commodi perspiciatis maiores sint sunt illo sapiente earum sit nisi recusandae consectetur, beatae, quaerat ipsum deleniti. Quia, pariatur.
    </div>
     <div className='hidden lg:block sm:bg-blue-700 sm:text-white sm: md:bg-green-700 md:text-black md:p-4 lg:bg-pink-700 lg:text-white xl:bg-purple-800 xl:text-black'>
     The Quick brown fox jumps over a lazy dog....The quick brown fox jumps over a lazy dog...!
   </div>
    </>
  )
}

export default Responsive
