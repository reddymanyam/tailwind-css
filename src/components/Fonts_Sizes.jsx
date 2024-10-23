import React from 'react'
//font and sizes

const Fonts_Sizes = () => {
  return (
    <div className='bg-gray-200'>
      <div className='mx-10 p-10'>
        <p className='font-sans hover:font-serif  hover:text-green-400 text-left'>The quick brown fox jumps over a lazy gog</p>
        <p className='font-serif hover:font-mono hover:text-red-400 text-center'>The quick brown fox jumps over a lazy gog</p>
        <p className='font-mono text-right hover:text-purple-800'>The quick brown fox jumps over a lazy gog</p>
        <h1 className='text-3xl text-justify'>This is h1</h1>
        <h2 className='text-2xl text-start'>This is h2</h2>
        <h3 className='text-xl text-end'>This is h3</h3>
        <h4 className='text-lg'>This is h4</h4>
      </div>
    </div>
  )
}

export default Fonts_Sizes;
