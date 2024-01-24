import React from "react"
import "./footer.css"
import logo from "../../../components/image/logo-msi.PNG"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' id="email" name="email" autoComplete="off" />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
       <div className="footer-top">
       <div className="logo">
          <img src={logo} alt="" />
        </div>  
        <div className="box sosmed">
          <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
       
        </div>     
         <div className='container padding'>
          <div className='box logo'>
          <h3>Head Office Jakarta</h3>
          <p>Sudirman 7.8, Tower 1,
            25th Floor, Jl. Jend. Sudirman,
            RT.10/RW.11, Karet Tengsin,
            Tanah Abang, Central Jakarta City, Jakarta 10220
          </p>
          </div>
          <div className='box logo'>
            <h3>Branch Office Surabaya</h3>
            <p>Darmo Galeria Center,
                Jl. Mayjen Sungkono No.75, Gn. Sari, Kec. Dukuhpakis, Kota SBY, Jawa Timur 60224</p>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
         
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | PT Mastersystem Infotama
        </p>
      </div>
    </>
  )
}

export default Footer
