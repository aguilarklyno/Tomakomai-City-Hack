import React from 'react'
import Hero from '../global_components/Hero_component'
import Title from '../global_components/Title_component'
import Top_menu from '../global_components/Top_menu'
import Link from '../global_components/Link_component'

const Education = () => {
  return (
    <>
      <Top_menu/>
      <Hero type={"Education"} span={"for ALL"}/>
      <Title type={"学生"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link to={"/education/Juken"} type={"受験"}/>
          <Link to={"/education/Shinro"} type={"進路"}/>
          <Link to={"/education/Sodan"} type={"相談"}/>
        </div>
      <Title type={"一般"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link to={"/education"} type={"None"}/>
          <Link to={"/education"} type={"None"}/>
          <Link to={"/education"} type={"None"}/>
        </div>
      <Title type={"その他"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Link to={"/education"} type={"None"}/>
          <Link to={"/education"} type={"None"}/>
          <Link to={"/education"} type={"None"}/>
        </div>
    </>
  )
}

export default Education