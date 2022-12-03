import React from 'react'
import Support_page_move from '../../Support_page_move';
import img_01 from "../01-images/education.png"
import img_02 from "../01-images/health.png"

const Support = () => {
  return (
    <>
      <div className='my-4 flex justify-center items-center flex-wrap mx-4'>
        <Support_page_move to={"/education"} type={ "学ぶ・参加する"}/>
        <Support_page_move to={"/health"} type={ "医療・子育て"}/>
        <Support_page_move to={"/lifeinfo"} type={ "生活情報"}/>
        <Support_page_move to={"/consult"} type={ "相談する"}/>
        <Support_page_move to={"/japanese"} type={ "日本語"}/>
        <Support_page_move to={"/foundation"} type={ "民際協力基金"}/>
        <Support_page_move to={"/maltilang.mail"} type={ "多言語メール"}/>
        <Support_page_move to={"/disaster"} type={ "災害時"}/>
      </div>
    </>
  )
}

export default Support