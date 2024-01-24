import React from "react"
import Heading from "../../common/heading/Heading"
import { aws } from "../../../dummydata"
import PriceCardPrice from "../../pricing/PriceCardPrice"

const Tprice = () => {
  return (
    <>
      <section className='hprice '>
        <Heading subtitle='Why migrate to the AWS Cloud?' title='Organizations who migrated to AWS from on-premises' />
        <div className='price price-solution container grid'>
          <PriceCardPrice price = {aws}/>
          <p>* “The Business Value of Migration to Amazon Web Services,” The Hackett Group, January 2022  </p>
        </div>
      </section>
    </>
  )
}

export default Tprice
