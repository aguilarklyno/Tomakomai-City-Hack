import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Link from '../global_components/Link_component'

const Consult = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Consult"}/>
      <Title type={"生活に関するご相談"}/>
      <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"健康に関するご相談"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"日本語に関するご相談"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
    </>
  )
}

export default Consult