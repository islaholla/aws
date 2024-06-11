import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/coal.png';
import { useLocation } from "react-router-dom";



const AwrapperCoal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='IT Hybrid Datacenter & Backup Solution for Asset Management Company' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          The Indonesian coal mining industry and it is continuously looking at new
          methodologies and technologies to cement its position as one of the lowest cost
          producers in Indonesia. In accordance with Indonesian regulations, a Disaster
          Recovery function is required. Seeing this need, Mastersystem Infotama, a major
          IT consultant and Amazon Web Services (AWS) Partner, to provide solution for
          Disaster Recovery Strategy solutions on AWS.        <br /> <br />
          <h4>        Case Study
          </h4>
          One of Indonesian coal mining industry, is committed to maintaining its position as
          one of the most cost-efficient coal producers in the region. Through continuous
          innovation and investment in cutting-edge technologies, we has set the industry
          standard for operational excellence. This case study delves into Enterprise Industry
          to robust approach to Disaster Recovery (DR) and business continuity for their
          critical systems, highlighting their strategic use of Amazon Web Services (AWS)
          solutions.
          <br /> <br />
          <h4>Business Challenge          </h4>
          To compliant with regulatory requirements and a commitment to safeguarding
          business processes, Enterprise Industry identified the need for Disaster Recovery
          planning, specifically for their mission-critical on-premises servers with recovery
          time objective 30 minute and Recovery Point Objective (RPO) under 24 Hours. The
          most important thing was the Windows-based on-prem File Sharing Server and
          Exchange Mail Server, with a massive capacity. These servers play a critical role in
          facilitating seamless data sharing and facilitating uninterrupted data
          communication within the organization.
          This planning initiative, characterized by its thoroughness and forward-thinking
          approach, to approach in mitigating potential disruptions. It exemplifies the
          organization's dedication to not only meeting regulatory requirements but also
          fortifying the integrity of core business operations, particularly in the data and mail
          communication in the face of disaster occurred.
          <br /> <br />
          <h4>Solution</h4>
          Strategically implemented a robust solution on Amazon Web Services (AWS). A
          pivotal component of their strategy involved the adoption of Amazon FSx for
          Windows File Server Solution, a fully managed, native Microsoft Windows file
          system meticulously designed for scalability and high availability in Windows-based
          applications. <br /><br />
          This comprehensive file server solution boasts robust support for SMB and
          Windows NTFS protocols, along with seamless integration with Active Directory
          (AD), ensuring a secure and efficient environment. To optimize data transfer,
          Mastersystem implemented a Hybrid Network solution utilizing AWS Site-to-Site
          VPN Connection, further enhancing their disaster recovery preparedness.
          With the integration of AWS Data Sync plays a pivotal role in simplifying, automating,
          and expediting data movement between on-premises storage systems and FSx for
          Windows File Server file systems, implemented a Database Availability Group (DAG) for
          Exchange on AWS. This strategic move ensures automatic and asynchronous
          replication of mailbox databases across on-prem server and Amazon EC2 Instances,
          guaranteeing a high level of availability and resilience for their Exchange Mail Server.
          use the Amazon SES SMTP endpoint to send all of outgoing email from Exchange Mail
          Server, To efficiently manage DNS requests from the internet, Enterprise Industry
          utilizes Amazon Route 53, a highly available and scalable Domain Name System (DNS)
          web service.       <br /> <br />  <h4>Architecture Diagram</h4>
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>

          <br /><br />
          <h4>Benefit and Result</h4>
          Enterprise Industry Group's commitment to innovation extends beyond their core
          operations to encompass robust Disaster Recovery and business continuity planning.
          By leveraging AWS solutions, they achieve these goals with minimum 10 Minute of RTO
          and under 12 Hours for RPO with realize significant results and benefits. The
          implementation of AWS enables to establish a secure, scalable, and efficient IT
          infrastructure, which not only safeguards critical business operations but also delivers
          real-time data solutions within their Disaster Recovery Center on the AWS Cloud.
          <br /><br />
          Through this strategic deployment of AWS technologies, not only fulfills its recovery
          objectives but also attains operational superiority, resilience, and agility in executing
          its business continuity strategy. Also has optimizes costs through AWS's managed
          services and scalable infrastructure. Enterprise Industry proactive approach to
          leveraging AWS has positioned them for sustained growth and operational excellence
          in today's dynamic business landscape


        </div>

      </section>
    </>
  )
}

export default AwrapperCoal
