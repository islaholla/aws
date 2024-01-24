import React,  { useRef } from "react"
import Back from "../common/back/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d495.8024814365396!2d106.82080327843084!3d-6.208222352911523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smastersystem%20infotama%20maps!5e0!3m2!1sen!2ssg!4v1706069277566!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gcg6k2a', 'template_aywpi6r', form.current, 'whZ9qcdQDIMIyg7T2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>GET 1 MONTH FREE AWS CREDIT</h1>
            <p>Speak with our Experts today to gain visibility on the potential cost reduction by migrating Windows workloads to AWS.</p>
            <h3>PT Mastersystem Infotama Tbk</h3>
            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Sudirman 78 Tower 1, 25th Floor Jl. Jend. Sudirman Kav 7-8 Jakarta Pusat - Indonesia</p>
              </div>
              <div className='box'>
                <h4>Message:</h4>
                <p> +62 852 9000 3973</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +62 21 3973 1111</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className='flexSB'>
                <input type='text' placeholder='FullName' name="name" />
                <input type='email' placeholder='Email' name="email" />
              </div>
              <input type='text' placeholder='Company' name="company" />
              <input type='text' placeholder='Job Title' name="job" />
              <input type='number' placeholder='Phone' name="phone" />
            
              <input className="button primary-btn" type="submit" value="Send"/>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
