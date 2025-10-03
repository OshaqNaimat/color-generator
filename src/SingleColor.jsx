import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { LuCopy } from 'react-icons/lu'

const SingleColor = ({rgb,hexValue,id}) => {

  const [copied,setCopied] = useState(false)
  const handleCopy = () =>{
    navigator.clipboard.writeText(`#${hexValue}`)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 700);
  }
  return (
    <>
    <div style={{
        backgroundColor : `rgb(${rgb})`
    }} className="p-20 shadow my-10 mx-4 rounded-md text-center relative select-none">
        <h2 className={`text-2xl ${id > 10 ? `text-white` : `text-black`} font-semibold text-center`}>#{hexValue}</h2>
         
         {copied ? <GiCheckMark  size={20} className={`cursor-pointer ${id > 10 ? `text-white` : `text-black`} active:scale-90 duration-300 absolute top-[20px] left-[20px]`}/>    
          
        : <LuCopy onClick={handleCopy} size={20} className={`cursor-pointer ${id > 10 ? `text-white` : `text-black`} active:scale-90 duration-300 absolute top-[20px] left-[20px]`}/>      
}
         
   

   
    </div>
    </>
  )
}

export default SingleColor