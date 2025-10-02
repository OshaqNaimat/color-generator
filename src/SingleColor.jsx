import React from 'react'
import { FaCopy } from 'react-icons/fa'

const SingleColor = ({rgb,hexValue,id}) => {
  return (
    <>
    <div style={{
        backgroundColor : `rgb(${rgb})`
    }} className="p-20 shadow my-10 mx-4 rounded-md text-center">
        <h2 className={`text-2xl ${id > 10 ? `text-white` : `text-black`} font-semibold text-center`}>#{hexValue}</h2>
         <FaCopy/>
    </div>
    </>
  )
}

export default SingleColor