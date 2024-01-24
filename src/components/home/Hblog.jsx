import React from "react"
import "../blog/blog.css"
import { team } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='CHALLENGES THAT COMPANY' title='Build Your Dream' />
          <div className='grid4'>
            {team.slice(0, 4).map((val,index) => (
              <div key={index} className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
