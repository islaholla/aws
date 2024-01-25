import React from "react"
import "./Hero.css"
import { useLocation } from "react-router-dom"
import Heading from "../../../common/heading/Heading"
import hero from "../../../../components/image/header microsite 4.jpg"

const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-sdp'>
        <div className='container '>
        <div className='row yt'>
        <img width="500" height="315" src={hero}/>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='OPTIMIZE CURRENT WINDOWS LICENSES TO CUT COSTS BEFORE MIGRATING TO AWS' />
            <div className='button'>
              <button className='primary-btn'>
                Claim Exclusive Offer <i className='fa fa-long-arrow-alt-right'></i>
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
