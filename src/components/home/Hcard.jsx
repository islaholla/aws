import React from "react"
import "../about/about.css"
import Heading from "../common/heading/Heading"

const HAboutCard = () => {
  return (
    <>
      <section className='aboutHome card'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/hero.jpeg' alt='aws mastersystem' />
          </div>
          <div className='right row'>
            <Heading subtitle='CHALLENGES THAT COMPANY' title='Build Your Dream' />
            <div className='items'>
                  <div className='item flexSB'>
                    <div className='text'>
                      <ul>
                        <li>Manage Cloud Financing</li>
                        <li>Adapt to the Unique Behavior of the Application</li>
                        <li>Determining the Right Size</li>
                        <li>Licensing Management</li>
                    </ul>

                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HAboutCard
