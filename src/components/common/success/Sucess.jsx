import React from "react"
import './Sukses.css'
import image from "../../../components/image/matahari.jpg" 
import { Link } from "react-router-dom"


const Sukses = (section) => {
  return (
    <div className="break-sukses ">
     <div className="wrap-image"> <img src={image} alt="" /></div>
      <div className="wrap-konten">
      <h2>Success Story
</h2>
     <p>Explore the chapters of our success tale and discover the inspiring milestones that define our remarkable journey – read more about our success story.
     <button className='outline-btn'>
                <Link to='/contact'>Read More Success Story <i className='fa fa-long-arrow-alt-right'></i></Link>
        </button>
</p>
      </div>
    </div>
  )
}

export default Sukses
