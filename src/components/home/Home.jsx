import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Hsection from "./HSection"
import HAboutCard from "./Hcard"

const Home = () => {
  return (
    <>
      <Hero />
      <Hprice />
      <Hsection judul="In current traditional situation, there's some challenges that company are usually facing such as:"/>
      <HAboutCard/>
      <Hsection judul="It's very important for you to understand the full picture before start the migration like business agility, the pace of innovation and digital infrastructure."/>
      <AboutCard />
      <HAbout />
    </>
  )
}

export default Home
