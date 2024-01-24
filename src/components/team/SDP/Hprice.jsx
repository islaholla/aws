import React from "react"
import Heading from "../../common/heading/Heading"
import PriceCard from "../../pricing/PriceCard"
import { sdp } from "../../../dummydata"

const Tprice = () => {
  return (
    <>
      <section className='hprice '>
        <Heading subtitle='What is Benefit of' title=' Cloud Computing?' />
        <div className='price price-solution container grid'>
          <PriceCard price = {sdp}/>
        </div>
      </section>
    </>
  )
}

export default Tprice
