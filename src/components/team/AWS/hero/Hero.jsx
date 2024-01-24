import React from "react"
import "./Hero.css"
import { useLocation } from "react-router-dom"
import Heading from "../../../common/heading/Heading"
import hero from "../../../../components/image/website-hosting-concept-with-cloud.jpg"
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
            <Heading subtitle={lok} title='MIGRATE WITH CONFIDENCE' />
            <p>Cloud migration is the process of moving a company’s digital assets, services, databases, IT resources, and applications either partially, or wholly, into the cloud. Cloud migration is also about moving from one cloud to another.</p>
            <div className='button'>
              <button className='primary-btn'>
                Connect with Expert <i className='fa fa-long-arrow-alt-right'></i>
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
