import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-36 bg-blue-400 bottom-0 absolute'>
      <div className='flex items-center justify-center w-11/12'>
        <div className='flex items-center justify-center m-1 w-1/5 py-2 bg-white'>
          <p className='text-lg font-bold'>概要</p>
        </div>
        <div className='flex items-center justify-center m-1 w-1/5 py-2 bg-white'>
          <p className='text-lg font-bold'>概要</p>
        </div>
        <div className='flex items-center justify-center m-1 w-1/5 py-2 bg-white'>
          <p className='text-lg font-bold'>概要</p>
        </div>
        <div className='flex items-center justify-center m-1 w-1/5 py-2 bg-white'>
          <p className='text-lg font-bold'>概要</p>
        </div>
      </div>
      <div>
        <p className='my-5 text-white'>@ TOMAKOMAI CITY HACH / Team -「勝ちます」</p>
      </div>
    </div>
  )
}

export default Footer