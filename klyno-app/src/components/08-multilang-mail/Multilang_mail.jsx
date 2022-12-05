import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Triple from '../global_components/Link_component'

const Multilang_mail = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Multi Language"} span={"MAIL"}/>
      <Title type={"INFORMAION"}/>
      <Triple/>
    </>
  )
}

export default Multilang_mail