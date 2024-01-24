import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import { priceSolution } from "../../dummydata"

const Tprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='What is Benefit of' title=' Cloud Computing?' />
        <div className='price price-solution container grid'>
          <PriceCard price = {priceSolution}/>
        </div>
      </section>
    </>
  )
}

export default Tprice
