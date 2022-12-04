import React from 'react'

export default function Title_component(title) {
  return (
    <div className='mx-auto my-12 w-11/12 h-auto'>
      <h1 className='text-3xl font-bold border-b-4 border-black'>{title.type}</h1>
    </div>
  )
}