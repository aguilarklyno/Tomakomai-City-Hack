import React from 'react';
import { Link } from "react-router-dom";


export default function Support_page_move(props) {

  return (
    <>
      <div className='md:w-1/5 sm:w-5/12 w-10/12 m-3 '>
          <Link className=' bg-gray-200 flex flex-col justify-center items-center  rounded-lg h-32' to={props.to} > 
            <Link to={props.to} className=''>
              <img className=' ' src={props.img}/>
              <h1 className=' '>{props.type}</h1>
            </Link>
          </Link>  
      </div>
    </>
  );
}