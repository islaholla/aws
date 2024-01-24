import React from "react"
import Heading from "../common/heading/Heading"
import "./detailBlog.css"
import { useParams } from "react-router-dom";

import { blog } from "../../dummydata"

const AboutCard = () => {
  let { id } = useParams();  
  const story = blog.find(prod => prod.id === id)

  return (
    <>
      <section className='aboutHome mt-5'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='../images/AWS level partner 3.png' alt='aws mastersystem' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Why Choose Mastersystem Infotama?' />
            <div className='items'>
                  <div className='item flexSB'>
                    <div className='img'>
                      {/* <img src={val.cover} alt='' /> */}
                    </div>
                    <div className='text'>
                      <h2>{story.title}</h2>
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
