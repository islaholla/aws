import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Success Story' />
      <section className='blog padding'>
        <h2 className="submenuTitle">Read our customers' journey in implementing AWS solutions and see how it has impacted their businesses</h2>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
