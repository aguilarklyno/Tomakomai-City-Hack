import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto'>
      <div className='flex justify-between w-11/12'>
        <h1 className='font-bold text-lg right-0'>お知らせ</h1>
        <h1>お知らせ一覧 ＞</h1>
      </div>
      <div className='flex w-11/12 justify-center items-center'>
        <div> ＜ </div>
        <div className='w-28 h-36 m-3 bg-gray-200'> 1 </div>
        <div className='w-28 h-36 m-3 bg-gray-200'> 2 </div>
        <div className='w-28 h-36 m-3 bg-gray-200'> 3 </div>
        <div className='w-28 h-36 m-3 bg-gray-200'> 4 </div>
        <div> ＞ </div>
      </div>

    </div>
  )
}

export default Info