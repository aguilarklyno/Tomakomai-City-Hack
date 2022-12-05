import React from 'react'
import Top_menu from '../global_components/Top_menu'
import Hero from '../global_components/Hero_component'
import Title from "../global_components/Title_component"
import Triple from '../global_components/Triple_component'


const Health = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Health"} span={"CARE"}/>
      <Title type={"Hospital & Clinic"}/>
      <Triple />
      <Title type={"Insuarance"}/>
      <Triple /> 
      <Title type={"Medicine"}/>
      <Triple />
    </>
  )
}

export default Health