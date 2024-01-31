import React from "react"
import "./blog.css"
import BlogCardS from "./BlogCardS"

const BlogS = () => {
  return (
    <>
      <section className='blog-solution storage'>
        <h1>Why AWS Storage is required?</h1>
        <h2 className="container"> <br />Amazon Web Services (AWS) storage has undergone significant diversification over time to meet a wide range of applications. New data storage technologies have changed and are continuously developing daily as a result of the dramatically growing amount of data.</h2>
        <div className='container grid4-custom'>
          <BlogCardS />
        </div>
      </section>
    </>
  )
}

export default BlogS
