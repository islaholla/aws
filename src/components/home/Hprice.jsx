import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import { price } from "../../dummydata"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='TRANSFORMATION STAGE' title='Cloud Transformation is a Journey,  Not Just A Goal' />
        <div className='price container grid'>
          <PriceCard  price={price} />
        </div>
      </section>
    </>
  )
}

export default Hprice
