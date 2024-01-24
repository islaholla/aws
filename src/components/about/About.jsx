import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Awrapper from "./Awrapper"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Awrapper/>
      <AboutCard />
    </>
  )
}

export default About
