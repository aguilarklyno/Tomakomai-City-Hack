import React from 'react'

const Lang = () => {
  return (
    <>
      <div className='m-auto h-auto w-11/12 my-4'>
        <div className='flex flex-wrap justify-center items-center bg-blue-100 h-auto rounded-3xl'>

          <div className='flex md:flex-row flex-col justify-between items-center  w-11/12 mt-4'>
            <h2 className=' md:text-lg text-base font-bold'>外国人の方はこちら</h2>
            <div className='md:w-auto w-full'>
              <ul className='flex justify-between'>
                <li className='block md:w-auto text-center w-1/4 md:p-2 p-1 md:m-2 m-1 rounded-3xl md:text-sm text-xs font-bold bg-white'>ルビなし</li>
                <li className='block md:w-auto text-center w-1/4 md:p-2 p-1 md:m-2 m-1 rounded-3xl md:text-sm text-xs font-bold bg-white'>ひらがな</li>
                <li className='block md:w-auto text-center w-1/4 md:p-2 p-1 md:m-2 m-1 rounded-3xl md:text-sm text-xs font-bold bg-white'>カタカナ</li>
                <li className='block md:w-auto text-center w-1/4 md:p-2 p-1 md:m-2 m-1 rounded-3xl md:text-sm text-xs font-bold bg-white'>ROMAN</li>
              </ul>
            </div>
          </div>

          <div className=' m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>日本語</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>English/英語</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-xs'>中文/中国語(繁体字)</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-xs'>中文/中国語(簡体字)</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>/韓国語</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>/スペイン語</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>/ポルトガル語</p>
          </div>
          <div className='m-4 p-4 bg-blue-200 lg:w-1/5 w-4/12'>
            <p className='text-center font-bold text-sm'>/ベトナム語</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Lang