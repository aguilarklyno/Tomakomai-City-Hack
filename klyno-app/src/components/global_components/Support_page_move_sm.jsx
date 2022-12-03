import React from 'react';
import { Link } from "react-router-dom";


export default function Support_page_move_sm(props) {
  return (
      <Link to={props.to} className='mx-2 my-1 md:w-1/12 w-5/12 h-16 flex flex-col justify-center items-center bg-gray-200 rounded-lg'>
        <img className='w-6' src={props.img}/>
        <h1 className='text-xs'>{props.type}</h1>
      </Link>
  );
}