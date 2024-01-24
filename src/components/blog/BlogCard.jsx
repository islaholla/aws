import React from "react"
import { blog } from "../../dummydata"
import { Link } from "react-router-dom"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
      <div key={val.id} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
           
            <h1>
              <Link to={`/journal/${val.id}`}>{val.title}</Link>
            </h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
