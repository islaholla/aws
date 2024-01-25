import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container '>
          <div className='row teks'>
            <Heading subtitle='AWS and Mastersystem' title='Accelerate Cloud Migration' />
            <p>Migrating to the Cloud will provide an opportunity for your company to access technology that allows you to innovate faster, more competitive and open up greater business opportunities.</p>
            <div className='button'>
              <button className='primary-btn'>
                Claim Exclusive Offer <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
          <div className='row youtube'>
          <iframe src="https://www.youtube.com/embed/DtDmdcVNBdU?si=Z6rQylfyTHg2HTT-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
