import React from "react"
import './storage.css'
import BreakSection from "../../common/break/Section"
import Hprice from "./Hprice"
import { priceSolution } from "../../../dummydata"
import Hero from "./hero/Hero"


const Storage = () => {
  return (
    <div className="aws-page">
      <Hero/>
      <div className="paragraf">
        <p>The first publicly accessible cloud storage service offered by Amazon was called AWS S3, and it was introduced in 2006. The most popular and well-known Amazon storage option is Amazon S3. What is AWS Storage Services?
        <br /><br />
        Performance, security, and scalability offered by an object storage service known as Amazon Simple Storage Service (Amazon S3) are unrivaled in the industry.
        <br /><br />
        Customers of all sizes and industries may store and protect any amount of data for nearly every use case, including cloud-native applications and mobile apps.
        <br /> <br />
        You may reduce expenses, organize data, and set up precise access controls to satisfy unique business, organizational, and compliance requirements using cost-effective storage classes and simple administration tools.
        </p>
      </div>
      <Hprice price = {priceSolution}/>
      <div className="teks-collab">
      <BreakSection judul="Why AWS Storage is required?"/>
      <div className="paragraf bg-white">
        <p>For companies that undertake the process of cloud migration, the cloud can have a massive impact.
        <br /><br />
        This includes a reduction in the total cost of ownership (TCO), faster time to delivery, and enhanced opportunities for innovation. With access to the cloud comes agility and flexibility, both of which are imperative to meet changing consumer and market demands.
        <br /><br />
        In recent months, companies have been migrating their services and data to the cloud as they adapt to become elastic digital workplaces to deal with an increase in online demand and remote working. Others are left wondering, "Why did we wait?"
        <br /><br />
        This are the benefits of migrating to the cloud include:
        <ul>
          <li>Increased agility and flexibility</li>
          <li>Ability to innovate faster</li>
          <li>Easing of increasing resource demands</li>
          <li>Better managing of increased customer expectations</li>
          <li>Reduction in costs</li>
          <li>Deliver immediate business results</li>
        </ul>
        </p>
      </div>
      <BreakSection judul="Case Study: Cloud Adoption and Migration "/>
      <div className="paragraf bg-white">
        <p>    <h3>Business Challenge</h3> Choosing the right cloud solution and managing your cloud migration is a complex undertaking. MSI will partner with you to deliver the expertise you need, so you can avoid common pitfalls and accelerate your return on investment.
        <br /><br />
        Our certified cloud migration consultants start by conducting a holistic assessment of your IT environment and business goals. We then create a customized cloud migration plan designed to support those goals. We’ll handle migration of your applications and workloads, so you can minimize your business risk, disruption and downtime. After a successful migration, our experts can continue to work with you through our ongoing management and optimization services.
        <br />
        <br />
        <h3>Use Case</h3>
        <br />
        <h4>Assessment and Strategy</h4>
        <ul>
          <li>Through our cloud migration consultant-led workshops, we’ll work with you to identify which applications should be migrated to the cloud, and develop a high-level plan.</li>
          <li>Build confidence in a manageable and cost-effective cloud migration by starting with a single, meaningful workload.</li>
          <li>Our experts will handle your application migration and remediation.</li>
          <li>We’ll work with you to validate your applications, data and network accessibility, and perform cut-over and go-live procedures.</li>
        </ul>
        <br />

        <h4>Assessment and Strategy</h4>
        <ul>
          <li>Catalogue your existing applications, infrastructure and network architecture to help prioritize workloads and applications.</li>
          <li>Determine which cloud platform(s) fit your overall transformation objectives.</li>
          <li>Design a high-level target infrastructure and cloud platform architecture that accommodates your security and risk requirements.</li>
          <li>Assess your existing workloads and predict future cloud consumption to estimate your costs.</li>
          <li>Explore your detailed deployment strategy for all applications, as well as future recommendations.</li>
        </ul>
        </p>
      </div>
      </div>
      <BreakSection judul="Case Study: Cloud Optimization "/>
      <div className="paragraf bg-white">
        <p>    <h3>Business Challenge</h3> With cloud optimization, customer can improve cloud performance and reduce costs. Help to enhance customer experiences, drive differentiation and decrease time to market. Build in cloud optimization tooling, we give the customer the guidance on reducing cloud spend and deliver the flexibility to pay only for the services needed.
        <br />
        <ul>
         <li>Assess the current environment.</li>
         <li>Provide best-practice recommendations on cloud optimization.</li>
         <li>Design and implement cloud solution, and</li>
         <li>Provide continuous optimization. </li>
        </ul><br />
        <h3>Use Case</h3>
        <br />
        <h4>Better Application Performance</h4>
        Improve your application’s performance while generating more targeted user experiences and reducing operational costs. As demand fluctuates, continuous observation and refinement of cloud resources is needed to maintain optimum performance.
        <br /><br />
        <h4>Improve usage and spend insights</h4>
        Gain the agility, flexibility and innovation enablement of the cloud while accelerating ROI, so you can realize reduced costs quickly. But understanding where costs are being incurred requires ongoing monitoring and analysis.
        <br /> <br />
        <h4>Forecast demand spend</h4>
        Get a more accurate picture of your demand peaks and troughs to predict costs. Develop insights to gain superior cloud performance and cost management.


        </p>
      </div>
    </div>
  )
}

export default Storage
