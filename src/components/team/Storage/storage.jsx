import React from "react"
import './storage.css'
import BreakSection from "../../common/break/Section"
import Hprice from "./Hprice"
import { priceSolution } from "../../../dummydata"
import Hero from "./hero/Hero"
import BlogS from "../blog/blogS"


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
    
        <h4> Let’s first gain a basic understanding of the fundamental storage technologies offered by AWS and the use cases for them.</h4>
     
        </p>
      </div>
    </div>
  )
}

export default Storage
