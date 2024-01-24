import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Hero from "./hero/Hero"
import Tprice from "./Tprice"
import { priceSolution } from "../../dummydata"
import BreakSection from "../common/break/Section"
import Blog from "./blog/Blog"

const Team = () => {
  return (
    <>
      <Hero/>
      <Tprice price={priceSolution}/>
      <BreakSection  judul="Types of Cloud Computing"/>
      <Blog/>
    </>
  )
}

export default Team
