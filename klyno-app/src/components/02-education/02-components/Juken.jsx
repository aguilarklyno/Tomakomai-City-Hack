import React from 'react'
import Hero_component from '../../global_components/Hero_component'
import Title_component from '../../global_components/Title_component'
import Top_menu from '../../global_components/Top_menu'

const Juken = () => {
  return (
    <div>
      <Top_menu/>
      <Hero_component type={"受験生、"} span={"頑張ろう！"}/>
      <Title_component type={"受験のすすめ"}/>
        <p className='p-12 text-lg'>
          こんにちは、苫小牧市市役所お受験課担当の田中です。皆様お元気でしょうか…。Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo
        </p>
      
    </div>
  )
}

export default Juken