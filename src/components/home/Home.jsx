import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Hsection from "./HSection"
import HAboutCard from "./Hcard"
import sertif from '../../components/image/sertif.png'
import HBridge from "./HBridge"
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HBridge/>
      <Hprice />
      <Hsection judul="In current traditional situation, there's some challenges that company are usually facing such as:"/>
      <HAboutCard/>
      <Hsection judul="It's very important for you to understand the full picture before start the migration like business agility, the pace of innovation and digital infrastructure."/>
      <AboutCard />
      <HAbout />
      <div className="wrap-image-home">
        <img src={sertif} alt="" />
      </div>
    </div>
  )
}

export default Home
