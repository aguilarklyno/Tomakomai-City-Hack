import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Triple from '../global_components/Triple_component'

const Education = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Education"} span={"for ALL"}/>
      <Title type={"学生"}/>
      <Triple />
      <Title type={"一般"}/>
      <Triple />
      <Title type={"その他"}/>
      <Triple />
    </>
  )
}

export default Education