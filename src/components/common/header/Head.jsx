import React from "react"
import logo from "../../../components/image/msi x aws.png"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <div className="wrap-logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className='social'>
           <a rel="noreferrer" target="_blank" href="https://www.facebook.com/mastersystemict/">
           <i className='fab fa-facebook-f icon'></i>
            </a> 
           <a rel="noreferrer" target="_blank" href="https://www.instagram.com/mastersysteminfotama/"> <i className='fab fa-instagram icon'></i></a>
           <a rel="noreferrer" target="_blank" href=" https://www.linkedin.com/company/pt--mastersystem-infotama/"> <i className='fab fa-linkedin icon'></i></a>
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UChGTCZgnph9SZUP5MHYD28A"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
