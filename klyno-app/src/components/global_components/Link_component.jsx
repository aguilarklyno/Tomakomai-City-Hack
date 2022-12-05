import React from 'react'
import { Link } from "react-router-dom";


export default function Link_component(props) {
  return (
    < >
      <Link 
       className= "bg-green-200 block h-44 w-52 m-2"
       to={props.to}
      >
        <h1 className="text-center text-xl font-bold">{props.type}</h1>
      </Link>
    </>
  )
}

