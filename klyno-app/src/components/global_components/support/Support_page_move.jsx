import React from 'react';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../../global_hooks/useOnHoverOutside";
import Hover_menu from "../Hover_menu"


export default function Support_page_move(props) {

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook



  return (
    <>
      <button className='md:w-1/5 w-5/12 m-3 '>
        <div onMouseOver={() => setMenuDropDownOpen(true)} class="mobile:hidden" ref={dropdownRef}>
          <div className=' bg-gray-200 flex flex-col justify-center items-center  rounded-lg h-32'> 
            <Link to={props.to} className=''>
              <img className=' ' src={props.img}/>
              <h1 className=' '>{props.type}</h1>
            </Link>
          {isMenuDropDownOpen && <Hover_menu />}
          </div>  
        </div>  
      </button>
      </>
  );
}