import React from "react"
import "../blog/blog.css"
import { bridge } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard

const HBridge = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='Mastersystem has proven the quality of its services ' title='by receiving several badges from AWS' />
          <div className='grid3Home'>
            {bridge.slice(0, 3).map((val,index) => (
              <div key={index} className='items'>
                <div className='img badge'>
                  <img src={val.cover} alt='' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HBridge
