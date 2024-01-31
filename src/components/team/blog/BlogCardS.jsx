import React from "react"
import { storage } from "../../../dummydata"
const BlogCardS = () => {
  return (
    <>
      {storage.map((val,index) => (
        <div key={ index} className='items shadow'>
          <div className='img custom'>
            <img src={val.cover} alt='' />
          </div>
          
          <div className='text custom'>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCardS
