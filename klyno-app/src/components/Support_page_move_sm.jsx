import React from 'react';
import { Link } from "react-router-dom";


export default function Support_page_move_sm(props) {
  return (
      <Link to={props.to} className='mx-1 my-2 md:w-1/5 w-5/12 h-32 flex flex-col justify-center items-center bg-gray-200 rounded-lg'>
        <img className='w-12' src={props.img}/>
        <h1>{props.type}</h1>
      </Link>
  );
}