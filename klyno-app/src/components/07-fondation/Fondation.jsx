import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Triple from '../global_components/Link_component'

const Fondation = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Fondation"}/>
      <Title type={"民際協力基金"}/>
      <Triple />
    </>
  )
}

export default Fondation