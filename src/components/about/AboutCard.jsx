import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className=''>
            <div className='items'>
                  <div className='item flexSB'>
                    <div className='text'>
                      <p>Mastersystem Infotama is an AWS Advanced Tier Partner with an experienced technical team that will help you analyze and prepare for the migration process to the Cloud.</p>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
