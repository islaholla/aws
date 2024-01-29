import React from "react"
import "./Hero.css"
import { Link, useLocation } from "react-router-dom"
import Heading from "../../../common/heading/Heading"
import hero from "../../../../components/image/storage.jpg"
const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-sdp aws'>
        <div className='container '>
        <div className='row yt'>
          <img src={hero}/>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='AWS Storage Services' />
            <p>Performance, security, and scalability offered by an object storage service known as Amazon Simple Storage Service (Amazon S3) are unrivaled in the industry.</p>
            <div className='button'>
            <button className='primary-btn'>
                <Link to='/contact'>Claim Exclusive Offer <i className='fa fa-long-arrow-alt-right'></i></Link>
              </button>
            </div>
          </div>
       
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
