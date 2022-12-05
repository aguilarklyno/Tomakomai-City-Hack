import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Link from '../global_components/Link_component'

const Lifeinfo = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"LIFE"} span={"Information"}/>
      <Title type={"がいこくじん　コミュニティー"}/>
      <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"外国人との交流報告"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
      <Title type={"外国人と関係良好化のために"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link type="None"/>
          <Link type="None"/>
          <Link type="None"/>
        </div>
    </>
  )
}

export default Lifeinfo