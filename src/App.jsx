import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
const App = () => {
  const [colorvalue,setColorvalue] = useState('')
  const [mycolor,setMycolor] = useState('')
  const [list,setList] = useState([])
  const handleColorChange = (e) => {
     e.preventDefault()
     setMycolor(colorvalue)
     const myColorList = new Values(colorvalue).all(10)
     console.log(myColorList)
     setList(myColorList)
  }

  return (
    <>
    <div
    style={{
      boxShadow: `${mycolor} 0px 15px 25px, ${mycolor} 0px 5px 10px`
    }}
    className={`
    container
     mx-auto
     w-[90%]
     md:w-1/2
     lg:w-1/3
     shadow-lg
     rounded-md
     my-5
     p-3
      `}>
       <h1
       style={{color : mycolor}}
       className='text-center text-2xl font-semibold'>Color Generator</h1>
       <input value={colorvalue} onChange={(e)=>setColorvalue(e.target.value)} type="text" placeholder='e.g. red,blue' className='w-full outline-0 border p-1 rounded-md border-blue-400 border-[2px]' />
       <button
       style={{backgroundColor : mycolor}}
       onClick={handleColorChange} className='my-2 text-center bg-blue-500 active:scale-90 hover:bg-blue-600 text-white font-semibold w-full rounded-md p-1 cursor-pointer duration-200'>Generate</button>
       
    </div>

    <div className="container gap-2  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
         {list?.map((item,index)=>{
          return <SingleColor key={index} {...item}/>
         })}
    </div>
    </>
  )
}

export default App