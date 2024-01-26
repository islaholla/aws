import React from "react"


const Hsection = (section) => {
  return (
    <div className="break solution">
     <h2>{section.judul}</h2>
     <p>{section.konten}</p>
    </div>
  )
}

export default Hsection
