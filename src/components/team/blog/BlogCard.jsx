import React from "react"
import { cloud } from "../../../dummydata"
const BlogCard = () => {
  return (
    <>
      {cloud.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
