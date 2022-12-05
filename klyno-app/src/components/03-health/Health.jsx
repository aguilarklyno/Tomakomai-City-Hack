import React from 'react'
import Top_menu from '../global_components/Top_menu'
import Hero from '../global_components/Hero_component'
import Title from "../global_components/Title_component"
import Link from '../global_components/Link_component'


const Health = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Health"} span={"CARE"}/>
      <Title type={"Hospital & Clinic"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"Insuarance"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"Medicine"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
    </>
  )
}

export default Health