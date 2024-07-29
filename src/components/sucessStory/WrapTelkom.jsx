import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import { useLocation } from "react-router-dom";



const WrapTelkomsel = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Telkomsel "Dunia Games" Miragrations' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          PT Telekomunikasi Selular, trading as Telkomsel, is an Indonesian wireless
          network provider. Founded in 1995 and is a subsidiary of Telkom Indonesia.
          It is headquartered in South Jakarta. Telkomsel is the largest wireless
          carrier in the country with the 190 million customer base as of
          2019.
          <br /> <br />
          <h4>        Case Study
          </h4>
          Telkomsel Dunia Games is a web and mobile based online gaming portal
          that provides personalized articles, video content, purchase of games'
          vouchers (for both personal use or reseller), and gaming tournament
          platform. Currently Dunia Games application hard to scale out because
          each server had its own persistent storage due to non-clustered
          environment where it only failover with active standby mode. Which had
          to manage separately. Furthermore, with no autoscaling capabilities it hard
          to provide service instantaneously. Each time they are doing failover, there
          are configuration that need to be done in order the failover to run,
          Telkomsel engage with Mastersystem Infotama as AWS Advance
          Consulting Partner, with the expertise in both cloud and on-premises
          datacenter to help with the solutions.

          <br /> <br />
          <h4>Solution</h4>
          Mastersystem Infotama and Amazon AWS Indonesia engaged, planned,
          and architected a new cloud-based environment for Telkomsel Dunia
          Games. Mastersystem Infotama help Telkomsel by doing replatform
          migration strategy from on-premises docker workload to AWS ECS. The
          Migration process is also optimized by centralizing the use of EFS and ECR.
          These help Telkomsel not only easier to manage their containerized
          application but also help in High Availability and Scaling capacity of the
          Dunia Games. Mastersystem is primary using ECS as the service of choice for these
          workloads. Combined with other AWS services to provide High Availability,
          Centralized Data Connection, a secure networking in addition to provide
          better manageability to the Dunia games.    <br /> <br />
          <h4>Result and Benefits</h4>
          Telkomsel can now had a better High Availability with minimum setup and
          experience better RTO/RPO than before. With easier to manage
          infrastructure, which allow them to better serve their customer.
          Furthermore, with more alarm and monitoring to give notification in case of
          issue arise, all these give Telkomsel a better infrastructure.
          <br /><br />
          <h4>Next Step</h4>
          Telkomsel has set to continue to use other AWS Services as their service is
          available in Jakarta region. With the availability of new service such as AWS
          GuardDuty, ECR or any other services, help Telkomsel to centralize the setup
          and configuration and help overall availability of the service.
          Mastersystem and Telkomsel will continue working together to provide
          world class AWS Services. Enhanced Customer Experience and boosting
          Application Performance which is critical to customer overall success.


        </div>

      </section>
    </>
  )
}

export default WrapTelkomsel
