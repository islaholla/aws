import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/automated.png';
import { useLocation } from "react-router-dom";



const AwrapperAutomated = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Automated Backup on AWS for Resilience of Cross-zone Disaster Recovery' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          One of Water Supply and Distribution Industries in Indonesia who partnering with
          Mastersystem Infotama as one of Amazon Web Services (AWS) partner to help
          them solve their most cost-effective DR strategy. The solution has to meet their
          requirement that can aligned with their RTO/RPO and ensure their server up to
          date with latest data if their server in trouble and need certain point in time
          recovery.
          <br /> <br />
          <h4>        Case Study
          </h4>
          The Company colocation data center rental period is about to end. Company needs
          another solution to support their ever-growing data center. Their IT Team
          developed a plan to migrate their datacenter to the cloud. To support this plan,
          the company needs a data center service that is very dynamic for their business,
          both in terms of the speed of providing new capacity and increasing reliability and
          availability. After discussion and brainstorming, IT team choose to utilized Backup
          and Restore DR strategy. The main reason is related to optimized the budget and
          their RTO and RPO compliance is not too strict at this project. The Company rules
          for RTO is 2 Hours and the RPO is 12 Hours. Related to this requirement and concern
          about having the DR site and optimizing their budget, company and made a
          strategic decision to utilize AWS Backup as a solution for cross-zone disaster
          recovery across AWS Availability Zones.

          <br /> <br />
          <h4>Challenge          </h4>
          In the dynamic landscape of our industry, confronted the inherent challenges of
          ensuring business continuity in the face of unforeseen disruptions. The potential
          impact of localized outages and the need for a robust disaster recovery strategy
          prompted our organization to explore cutting-edge solutions to mitigate risks and
          fortify our infrastructure.
          <br /> <br />
          <h4>Solution</h4>
          The company IT Team together with Mastersystem Infotama and Amazon Web
          Services strategically chose AWS Backup as the cornerstone of its disaster recovery
          strategy, leveraging its cross-zone capabilities. This approach ensures the
          comprehensive protection of critical data and applications, allowing for a seamless
          transition of operations between AWS Zones A and B in the event of an incident.
          AWS Backup solution, a comprehensive and reliable backup solution. With AWS
          Backup, we can schedule regular backups, set retention policies, and perform ondemand backups effortlessly When you backup an EC2 instance, AWS Backup will protect all Amazon EBS volumes
          attached to the instance, and will attach them to an AMI that stores all parameters
          from the original EC2 instance and utilize AWS CloudWatch and AWS Health to stay
          informed about the status of AWS services and potential issues.     <br /> <br />  <h4>Architecture Diagram</h4>
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>
          <br />
          When backing up an EC2 instance, AWS Backup ensures comprehensive protection
          by safeguarding all Amazon Elastic Block Store (Amazon EBS) volumes attached to
          the instance. These volumes are encapsulated within an Amazon Machine Image
          (AMI), preserving all original EC2 instance parameters for future recovery. The core
          functionality lies in the creation of backup plans, customizable frameworks that
          define backup requirements. These plans include parameters such as backup
          frequency and retention duration. By applying these plans through resource tagging.
          <br /><br />
          <h4>Benefit and Result</h4>
          The deployment of AWS Backup and AWS CloudWatch has proven to be beneficial in
          safeguarding the company's digital assets and ensuring the availability and
          performance of its EC2 instances. By utilizing AWS Backup, the companies were able
          to automate cross-zone disaster recovery and create backup plans with defined
          schedules and retention management parameters. With this automate and
          scheduled backup, the company’s IT team can reduce task from made a manual
          schedule, monitoring the backup, and delete the old backup and reduced 25% time
          to manage. This streamlined process allowed the IT team to focus on strategic
          initiatives rather than manual backup activities. Consequently, the company’s critical
          applications and databases were fortified, enhancing the company's resilience in the
          digital landscape. In addition, AWS CloudWatch provided real-time health checks for
          EC2 instances.



        </div>

      </section>
    </>
  )
}

export default AwrapperAutomated
