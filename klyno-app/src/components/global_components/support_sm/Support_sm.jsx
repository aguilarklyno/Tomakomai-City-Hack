import React from 'react'
import Support_page_move_sm from './Support_page_move_sm'

const Support_sm = () => {
  return (
    <>
      <div className='my-4 flex justify-center items-center flex-wrap mx-4 text-center'>
        <Support_page_move_sm to={"/education"} type={ "学ぶ\r参加する"}/>
        <Support_page_move_sm to={"/health"} type={ "医療\r子育て"}/>
        <Support_page_move_sm to={"/lifeinfo"} type={ "生活情報"}/>
        <Support_page_move_sm to={"/consult"} type={ "相談する"}/>
        <Support_page_move_sm to={"/japanese"} type={ "日本語"}/>
        <Support_page_move_sm to={"/foundation"} type={ "民際協力基金"}/>
        <Support_page_move_sm to={"/maltilang.mail"} type={ "多言語メール"}/>
        <Support_page_move_sm to={"/disaster"} type={ "災害時"}/>
      </div>
    </>
  )
}

export default Support_sm