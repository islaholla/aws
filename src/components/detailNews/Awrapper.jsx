import React from "react"
import Heading from "../common/heading/Heading"
import { useParams } from "react-router-dom";

import { news } from "../../dummydata"


const Awrapper = () => {
  let { id } = useParams();  
  const story = news.find(prod => prod.id === id)
  console.log(story);

  return (
    <>
      <section className='homeAbout'>
      <Heading subtitle='Our News' title={story.title} />
        <p>{story.konten}</p>
      </section>
    </>
  )
}

export default Awrapper
