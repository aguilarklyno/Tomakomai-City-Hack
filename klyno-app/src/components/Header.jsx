// import React, {useState} from 'react'
// import { Link } from "react-router-dom";
// import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex flex-col w-full  bg-blue-200  items-center justify-around">

      <div className="w-11/12 p-1 items-center justify-around flex flex-row">
        <div>
          <h1 className="md:text-base text-xl font-bold">TOMAKOMAI <span className="md:text-base text-blue-500">CITY</span></h1>
        </div>

        <div className="m-4 md:block md:w-200px hidden ">
          <input type="text" placeholder="検索" className="w-full"/>
        </div>

        <nav className="m-4">
          <ul className="flex">
            <li className="mr-2">YouTube</li>
            <li className="mr-2">Facebook</li>
            <li className="">Twitter</li>
          </ul>
        </nav>
      </div>

        <div className="m-4 md:hidden md:w-56 w-4/5">
          <input type="text" placeholder="検索" className="w-full"/>
        </div>

    </div>
  )
}

export default Header