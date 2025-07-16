import "./Hero.css"
import { Link, useLocation } from "react-router-dom"
import Heading from "../../../common/heading/Heading"
import hero from "../../../../components/image/ai.jpg"
const Hero = () => {
  const location = useLocation()
  const lok = `Home / ${location.pathname.split("/")[1]}`
  return (
    <>
      <section className='hero-mso'>
        <div className='container '>
        <div className='row yt'>
          <img src={hero}/>
          </div>
          <div className='row teks'>
            <Heading subtitle={lok} title='Simplify and Secure Your AWS Operations with Managed Service Operations' />
            <p>Stay focused on your business while our certified cloud experts proactively manage, monitoring, and optimize your AWS environment end-to-end for 24/7.</p>
            <div className='button'>
            <button className='primary-btn'>
                <Link to='/solutions/mso/catalog'>Visit Our Detail Catalog MSO <i className='fa fa-long-arrow-alt-right'></i></Link>
              </button>
            </div>
          </div>
       
        </div>
      </section>
    </>
  )
}

export default Hero
