import React from "react"
import Hero from "./hero/Hero"
import './sdp.css'
import Hsection from "./HSection"
import BreakSection from "../../common/break/Section"
import Hprice from "./Hprice"
import { priceSolution } from "../../../dummydata"
import Hparagraf from "./Hparagraf"
import Sukses from "../../common/success/Sucess"


const Sdp = () => {
  return (
    <div className="sdp">
      <Hero/>
      <Hsection judul="Increase Microsoft workload visibility by implementing an Mastersystem’s solution" konten="Empower your cloud strategy by collaborating with Mastersystem Infotama to develop a migration plan using Amazon Web Services Optimization and Licensing Assessment (AWS OLA) to help reduce costs an optimize compute. Employing this free service helps you accurately assess the Microsoft workloads currently in your on-premises or cloud environment, enabling you to make educated decisions to model your infrastructure optimized on AWS- including the impact of licensing dependencies. The tools used capture existing utilization data across your environment so you can accurately right-size cloud architecture, pinpoint application dependency requirements, project costs, and get clarity on what will be necessary as you formulate your AWS migration plan."/>
      <BreakSection judul="Benefits Migrating Windows to AWS"/>
      <Hprice price = {priceSolution}/>
      <div className="teks-collab">
      <Hsection judul="Collaborate with Mastersystem Infotama to Gain Deeper Understanding of Licensing Options" konten="Empower your cloud strategy by collaborating with Mastersystem Infotama to develop a migration plan using Amazon Web Services Optimization and Licensing Assessment (AWS OLA) to help reduce costs an optimize compute. Employing this free service helps you accurately assess the Microsoft workloads currently in your on-premises or cloud environment, enabling you to make educated decisions to model your infrastructure optimized on AWS- including the impact of licensing dependencies. The tools used capture existing utilization data across your environment so you can accurately right-size cloud architecture, pinpoint application dependency requirements, project costs, and get clarity on what will be necessary as you formulate your AWS migration plan."/>
      <Sukses/>
     
      {/* <BreakSection judul="Migrate Your Windows"/> */}
      <Hparagraf konten="Contact us today to take advantage of migration and modernization offers from Mastersystem and AWS. With Our Experience, your technology investment and big ideas are definitely in good hands."/>
      </div>

    </div>
  )
}

export default Sdp
