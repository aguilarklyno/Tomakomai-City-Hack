import React from 'react'
import Top_menu from '../global_components/Top_menu'
import Hero from './03-components/Hero_component'
import Title from "./03-components/Title_component"
import Triple from './03-components/Triple_component'


const Health = () => {
  return (
    <>
      <Top_menu/>
      <Hero />
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