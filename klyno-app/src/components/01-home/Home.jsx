import React from 'react'
import Info from './01-components/Info'
import Lang from '../global_components/Lang'
import Support from '../global_components/support/Support'
import Call from "./01-components/Call.jsx"
import Map from "./01-components/Map.jsx"

const Home = () => {
  return (
    <>
      <Lang />
      <Support />
      <div className="flex justify-between w-10/12 mx-auto m-8">
        <Call />
        <Map />
        
      </div>
      
      <Info />

    </>
  )
}

export default Home