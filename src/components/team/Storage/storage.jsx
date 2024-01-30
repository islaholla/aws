import React from "react"
import './storage.css'
import BreakSection from "../../common/break/Section"
import Hprice from "./Hprice"
import { priceSolution } from "../../../dummydata"
import Hero from "./hero/Hero"
import BlogS from "../blog/blogS"
import Sukses from "../../common/success/Sucess"
import diagram from '../../../components/image/diagram.png';


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
     <BlogS/>

      <div className="teks-collab">
        <br /><br />
        <Sukses/>
        <br /> <br />
      <BreakSection judul="Types of AWS Storage Services"/>
      <div className="paragraf bg-white">
        <p>Now, we will see the different aws storage types in aws which are given below:
        <br /><br />
        <h4>Object Storage</h4> 
        First, aws storage type is the extensive scalability and metadata capabilities of object storage that are frequently tapped into by applications created on the cloud.
Simple Storage Service (Amazon S3) and Amazon Glacier are excellent object storage options for building modern applications from the ground up that require scale and adaptability.
 These solutions can also be used to ingest existing data stores for analytics, backup, and archiving purposes.
<br /><br />
<h4>File Storage</h4>
Another aws storage type has many apps that need a filing system because they need to access shared files. A Network Attached Storage (NAS) server is typically used to support this type of storage.
 In big content repositories, development environments, media stores, or user home directories, file storage systems like Elastic File System (Amazon EFS) are ideal.
<br /><br />
<h4>	Block Storage</h4>
Dedicated, low-latency storage is frequently needed for each host by other enterprise applications like databases or ERP systems.
 This is frequently compared to a cargo area network or direct-attached storage (DAS) (SAN). Block-based cloud storage options such as Amazon EBS’s Elastic Block Store and EC2 Instance Storage.

        </p>
      </div>
      <BreakSection judul="Advantages of AWS Storage Services"/>
      <div className="paragraf bg-white">
        <p>  
        <h4>Accessibility and usability</h4>
        Most cloud services include a drag-and-drop functionality and an easy-to-use user interface. For instance, consider iDrive from Apple or Google Drive from Google. 
They both offer a straightforward user interface, so even without technical expertise, you may quickly upload your file to your online drive.

        <br />
        <br />

        <h4>Security</h4>
        The majority of big and small organizations use cloud storage services, therefore before they select one for their business, they make sure that service is giving them greater security.
If anything is related to the internet, then safety becomes our top priority. <br /> <br />
<h4>Cost-efficient</h4>
The company outsources the storage issue by utilizing solely the cloud storage solution. The business lowers the costs of internal resources by utilizing online data storage.
With this technology, the business does not require any internal resources or assistance to maintain and keep its data. <br /> <br />
<h4>	Synchronization</h4>
The sync capability is provided by all storage vendors. You can synchronize your cloud storage data with any device you like using synchronization.
We’ve talked about how we can access our data from any location and device, but synchronization is what makes this accessibility possible.


        </p>
      </div>
      </div>
      <BreakSection judul="Use Case : AWS Storage Services "/>
      <div className="paragraf bg-white">
        <p>  
    
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


     
     
        </p>
      </div>
    </div>
  )
}

export default Storage
