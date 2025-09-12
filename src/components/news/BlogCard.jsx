import React from "react"
import { news } from "../../dummydata"
import { Link } from "react-router-dom"

const BlogCard = () => {
   if (!news || news.length === 0) {
    return (
      <div className="empty-state" style={{ textAlign: "center", padding: "50px" }}>
        <h3>No news available yet</h3>
        <p>Stay tuned for upcoming updates! 🔜</p>
        <div style={{ fontSize: "80px", marginTop: "20px" }}>📰</div>
      </div>
    )
  }
  return (
    <>
      {news.map((val) => (
      <div key={val.id} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
           
            <h1>
              <Link to={`/news/${val.id}`}>{val.title}</Link>
            </h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
