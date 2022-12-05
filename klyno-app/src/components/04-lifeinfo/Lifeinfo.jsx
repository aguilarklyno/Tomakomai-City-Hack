import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Triple from '../global_components/Triple_component'

const Lifeinfo = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"LIFE"} span={"Information"}/>
      <Title type={"がいこくじん・こみゅにてぃー"}/>
      <Triple/>
      <Title type={"外国人コミュニティとの連携"}/>
      <Triple/>
      <Title type={"外国人につながる子供・若者の教育"}/>
      <Triple/>
    </>
  )
}

export default Lifeinfo