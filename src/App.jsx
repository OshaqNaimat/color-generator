import React from 'react'

const App = () => {
  return (
    <>
    <div className="container mx-auto w-[90%] md:w-1/2 lg:w-1/3 shadow-lg rounded-md my-5 p-3">
       <h1 className='text-center text-2xl font-semibold'>Color Generator</h1>
       <input type="number" placeholder='e.g. 3,4,5' className='w-full outline-0 border p-1 rounded-md border-blue-400 border-[2px]' />
       <button className='my-2 text-center bg-blue-500 active:scale-90 hover:bg-blue-600 text-white font-semibold w-full rounded-md p-1 cursor-pointer duration-200'>Generate</button>
    </div>
    </>
  )
}

export default App