import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useLocation } from "react-router-dom"

const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-team'>
        <div className='container '>
        <div className='row yt'>
          <iframe width="550" height="315" src="https://www.youtube.com/embed/yWS_EKyojV0?si=DUcmHdlnxoYZDGvt"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='CLOUD COMPUTING WITH AWS' />
            <p>Cloud computing is a digital data storage technology that utilizes virtual servers as storage media. The cloud computing system uses a series of computer servers that have been optimized with a storage system which will later form several virtual servers or data storage areas in the internet network. The existence of this system allows an organization to build system centralization, delivery system automation, and fast adaptation to a fluctuating business environment.
              <br /><br /> Questions about getting started with AWS? </p>
            <div className='button'>
              <button className='primary-btn'>
                Claim Exclusive Offer <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
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
