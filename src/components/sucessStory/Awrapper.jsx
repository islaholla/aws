import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/diagram.png';
import { useLocation } from "react-router-dom";



const Awrapper = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
      <Heading  title='IT Hybrid Datacenter & Backup Solution for Asset Management Company' />
      <div className=" bg-white">    
        <h4>Executive Summary</h4>
        One of Investment Management Financial engage with Mastersystem Infotama a major IT consultancy and an Amazon Web Services (AWS) Partner, to help migrate, backup on-premises server and application workloads to AWS Cloud, and automatically adjust workloads to handle unpredictable resource requirements, vulnerabilities, and data protection with backup and disaster recovery solutions, while maintaining application performance and availability at the lowest possible cost.
        <br /> <br />
<h4>        Case Study
</h4>

As the company grew, IT needed to acquire new additional expensive hardware, storage and operating system licenses. Its headquarters location had to allocated space for physical hardware and pay high prices for energy usage, cooling, and maintenance. When the old on-premises server cannot handle unpredictable resources demand from company staff and IT staff, the worker take to long to processing SQL data query, vulnerability issue, data protection and data grow. Since the hardware used by these systems could not achieve performance and store a lot of data, Company IT Department was ready to explore moving its infrastructure to AWS Cloud. AWS Cloud was chosen due to its global footprint, including the AWS Jakarta Region enabling company to use the same solution and comply with Indonesian Financial Regulations. The company is working with Mastersystem Infotama as an AWS Advanced Consulting Partner, which is expected to help financial services organizations to migrate to AWS Cloud.
<br /> <br />
<h4>Solution</h4>
Mastersystem Infotama and Amazon AWS Indonesia planned and architected a new cloud-based environment for Company. Mastersystem Infotama help Company to lift-n-shift on-premises server and extend on-premises backup solution to AWS Cloud. Mastersystem Infotama approach by using 3rd party ISV Software from Veeam. Veeam is a leader in backup solutions that deliver Cloud Data Management. The product solution is Veaam Backup and Recovery to simplified migration and backup solution to AWS Cloud uses with scale-out backup repository to automatically create data tiers between local storage (Performance Tier) and Amazon Simple Storage Service (Amazon S3). Amazon S3 is object storage built to store and retrieve any amount of data. Amazon S3 Storage Classes utilized are S3 Standard Tier for frequently accessed data and S3 Glacier for archival data that requires immediate access. With this solution, Company can reduce operational costs by up to 50% per year for additional storage devices.

An additional Veeam Backup for Amazon AWS on Amazon EC2 instance is also set up using backup software to protect against physical or logical errors, such as system failures, application errors, or accidental deletions by users, viruses, and malware on Amazon AWS environment by storing backup data to Amazon S3 Bucket. This feature is mandatory for Company to comply with depository regulations in the financial industry sector
<br /> <br />
Mastersystem Infotama configured Amazon Direct Connect as the primary connection and AWS Site-to-Site VPN as the backup connection between corprated datacenter and AWS Virtual Private Clouds (VPCs). This service establishes a secure connection between local networks by providing a highly available and managed private solution to secure network traffic for access users and on-premises backup solutions to AWS Cloud. The company also implemented services such as Amazon WAF to protect their corporate website, Amazon CloudWatch to monitor resources and applications on AWS.
<br /> <br />  <h4>Architecture Diagram</h4>
     <div className="image-diagram">
      <img src={diagram} alt="" />
     </div>
     
     <br /><br />
<h4>Outcome</h4>
Now Company can adjust the infra capacity of the IT Workload real time by utilizing and adoption Amazon AWS Services. Improves Business Continuity scenarios with Cold Backup & Restore with RTO and RPO in hours, Effective in reducing the cost of using additional storage spaces up to 50%, durable and secure manner as well as recover the data quickly and reliably. Company uses the Infra on Amazon AWS as an initial reference for developing other applications on Amazon AWS, automatically adjusting workloads to handle unpredictable resource demands, vulnerabilities, data and protection while still maintaining application performance and availability at the lowest possible cost.


  
      </div>

      </section>
    </>
  )
}

export default Awrapper
