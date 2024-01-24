import React from "react"

const PriceCardPrice = (harga) => {
  return (
    <>
      {harga.price.map((val) => (
        <div  key={val.id} className='items shadow priceCard'>
          <h1>{val.price}</h1>

          <ul>
            {val.desc.map((desc , index)=>(
              <li  key={index}>{desc}</li>
            ))}</ul>
        </div>
      ))}
    </>
  )
}

export default PriceCardPrice
