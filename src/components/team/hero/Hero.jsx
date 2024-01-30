import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link, useLocation } from "react-router-dom"
import hero from '../../../components/image/saas-concept-collage (2)-min.jpg'
const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-team'>
        <div className='container '>
        <div className='row yt'>
        <div className="wrap-image">
        <img  src={hero}/>
        </div>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='CLOUD COMPUTING WITH AWS' />
            <p>Cloud computing is a digital data storage technology that utilizes virtual servers as storage media. The cloud computing system uses a series of computer servers that have been optimized with a storage system which will later form several virtual servers or data storage areas in the internet network. The existence of this system allows an organization to build system centralization, delivery system automation, and fast adaptation to a fluctuating business environment.
              <br /><br /> Questions about getting started with AWS? </p>
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
