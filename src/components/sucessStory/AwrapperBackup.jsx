import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/backup.png';
import { useLocation } from "react-router-dom";



const AwrapperBackup = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Backup Solution on AWS for IT Solution and Digital Transformation Company' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          One of IT solution and Digital transformation Company engage with Mastersystem
          Infotama a major IT consultancy and an Amazon Web Services (AWS) Partner, to help
          create solution for Backup with Commvault Backup Software.       <br /> <br />
          <h4>        Case Study
          </h4>
          The Company as a provider of technology solutions with over 20 years of experience in the
          business, their vastly experienced with creating integrated network infrastructures. As we
          journey forward, Company is set to utilize this expertise to expand rapidly in a short period.
          With its rapid growth, Company needed the right backup solution. This is to mitigate things
          that might happen in the future and the growth of the company. Data is very important
          nowadays. This is what drives company to use a backup solution to mitigate data
          corruption in the future.
          The Company have challenge with existing backup. For now, company uses Amazon EC2
          Snapshot as backup solution on AWS, which is a native service from AWS Cloud. Snapshots
          have no compression of the backup data and cannot perform application-aware backups.
          This results in very large backup data and database restores often experience problems.
          For larger databases, recovery operations are often very time consuming due to extra DBA
          intervention to ensure application consistency resulting in missed max RTO 8 Hours & RPO
          24 Hours as requirement.
          Mastersystem Infotama as AWS Advance Consulting Partner and also Partnership with
          Commvault, helping Backup Solution with Commvault Backup on AWS Cloud.

          <br /> <br />
          <h4>Solution</h4>
          To help The Company, Mastersystem Infotama build Backup Solution with Commvault on
          AWS Cloud. Commvault can be deployed both on-premises VM or BareMetal and on AWS
          Cloud using Amazon EC2 instances and Amazon EBS for all components. Company uses
          Commvault Backup because it wants to backup data with compression and can perform
          application-aware backups. Commvault is set by turning on this function. Company
          premises datacenter communication to AWS Cloud using AWS Site-to-Site VPN. Amazon
          CloudWatch for monitoring and operational data in the form of logs, metrics, and events
          and AWS CloudTrail monitors and records account activity across AWS infrastructure,
          giving control over storage, analysis, and remediation actions. On the other hand, to save
          costs, Commvault components such as Commserve Server, Media Agent Server and Virtual
          Server Agent (VSA) Server will be installed in one instance based on the Commvault Server
          Specifications. Amazon Simple Storage Service (S3) is cloud storage object that is used for backup
          file from Commvault Environment into Amazon AWS S3 bucket. RTO RPO
          requirement from MST is RTO 8 Hours and RPO 24 Hours.    <br /> <br />  <h4>Architecture Diagram</h4>
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>

          <br /><br />
          <h4>Benefit and Result</h4>
          Business value for Company is protecting data at the primary location on AWS by
          writing directly to an external cloud storage solution, or retaining a local copy and
          replicating the backup and archive data copy (either in full, or only selective portions
          of that data) into an external cloud storage service suitable for both short and longterm retention configurations.
          After using Commvault backups in AWS, The Company achieved 98.7% compression
          and deduplication of backup data residing in S3 standard which provides cost
          optimization for longer retention backups than snapshot format. The Company
          observed performance improvement on backup operations due to incremental and
          synthetic full feature and functionality helping customer achieve their required RPO
          and RTO they required.
          Backups are very important for an organization to recover any loss of data due to
          hardware or software failure, data corruption, or a human-caused event, such as a
          malicious attack (virus or malware), or accidental deletion of data, etc. Feature
          Compression and can perform application-aware backup (For example Database).
          Company can use AWS Cloud for testing Restore to other AWS Availability Zone and
          can be Solution for DR on AWS Cloud.


        </div>

      </section>
    </>
  )
}

export default AwrapperBackup
