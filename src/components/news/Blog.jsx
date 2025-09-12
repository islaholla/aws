import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Our Blog' />
      <section className='blog padding'>
        <h2 className="submenuTitle">Read Our Latest Insights on AWS Implementation and Its Business Impact</h2>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
