import React from "react"
import './sukses.css'
import image from "../../../components/image/AWS Success Story Banner.jpg" 
import { Link } from "react-router-dom"


const Sukses = (section) => {
  return (
    <div className="break-sukses ">
    <Link  to='/journal/sukses-story'> <div className="wrap-image"> <img src={image} alt="" /></div></Link>
      <div className="wrap-konten">
      <h2>Success Story
</h2>
     <p>Explore the chapters of our success tale and discover the inspiring milestones that define our remarkable journey – read more about our success story.
     
</p>
      </div>
    </div>
  )
}

export default Sukses
