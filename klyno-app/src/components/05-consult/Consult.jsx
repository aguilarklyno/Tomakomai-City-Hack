import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Triple from '../global_components/Triple_component'

const Consult = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Consult"}/>
      <Title type={"多言語支援センター"}/>
      <Triple/>
    </>
  )
}

export default Consult