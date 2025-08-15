import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperAssetCompany = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='AWS Managed Service Operations for Asset Management Company' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          One Indonesian Asset Management Company is rapidly evolving, requiring secure, cost-effective, and highly available IT operations to support financial transactions and portfolio management. This case study explores how Mastersystem Infotama AWS Managed Service Operations (MSO) helped a leading Indonesian investment company optimize daily IT operations, implement backup strategies, enhance security reporting, and improve cost efficiency through AWS Savings Plans and Reserved Instances. Additionally, the company leveraged AWS to deploy new workloads efficiently to support its growing digital investment platforms.

          <br /> <br />
          <h3>        Managed Services Solution
          </h3>
          The client adopted Mastersystem Managed Service Operations (MSO) with the following key implementations:
          <br />
          <h4>1. IT Operations Management.</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Used AWS Lambda to automate routine tasks and reduce IT workload.</li>
            <li>• Implemented AWS GuardDuty for continuous threat detection and monitoring of malicious activity.</li>
            <li>• Integrated 3rd party security assessment tools such as Service Screener. Service Screener is a tool that runs automated checks on AWS environments and provides recommendations based on AWS and community best practices.</li>
          </ul>
          <br />
          <h4>2. Cost Optimization with AWS Savings Plans and Reserved Instances</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Implemented AWS Cost Explorer for cost tracking and forecasting.</li>
            <li>• Adopted AWS Savings Plans and Reserved Instances (RIs) to reduce compute costs for long-term workloads.</li>
            <li>• Implemented AWS Lambda to schedule the on and off for Amazon EC2 instances, optimizing resource usage and reducing unnecessary costs.</li>
          </ul>
          <br />
          <h4>3. Backup and Disaster Recovery Enhancement</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Deployed On-Premises Veeam Backup and Recovery and Veeam Backup for Amazon AWS for centralized automated backup management. using backup software to protect against physical or logical errors, such as system failures, application errors, or accidental deletions by users, viruses, and malware on Amazon AWS environment by storing backup data to Amazon S3 Bucket.</li>
            <li>• Conducted drill tests for backup restore operations to validate disaster recovery readiness. This activity is carried out twice a year.</li>
          </ul>
          <br />
          <h4>4. Security and Compliance Strengthening</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Leveraged AWS GuardDuty and AWS WAF for proactive security threat detection and mitigation.</li>
            <li>• Integrated Sophos Next-Generation Firewall (NGFW) on Amazon AWS to enhance security for VPN clients, ensuring secure remote access and network protection.</li>
          </ul>
          <br />
          <h4>5. Service Availability and Monitoring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Deployed Amazon CloudWatch Dashboards to provide real-time monitoring and insights into system performance.</li>
            <li>• Implemented Amazon CloudWatch Alarms to trigger automated responses and notify IT teams of potential issues using Amazon SNS.</li>
          </ul>

          <br /> <br />
          <h3>Result and Benefits</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Dynamic IT workload adjustment: The company can now dynamically adjust IT workload capacity in real-time by adopting Amazon AWS services, enabling faster service delivery.</li>
            <li>• Improved business continuity: Enhanced business continuity through Cold Backup & Restore, with Recovery Time Objective (RTO) and Recovery Point Objective (RPO) in hours.</li>
            <li>• Seamless application development: By leveraging AWS infrastructure, the company can seamlessly develop and deploy new applications faster.</li>
            <li>• Security Posture Improvement: Enhanced AWS Security Hub score by up to 40% through continuous compliance monitoring and targeted remediation efforts.</li>
            <li>• Service Reliability: Maintained a 99.9% uptime SLA through proactive monitoring and rapid incident response.</li>
          </ul>

          <br /><br />
          <h3>Conclusion</h3>
          By leveraging Mastersystem's AWS Managed Service Operations (MSO), the client successfully transformed its IT infrastructure, achieving enhanced cost efficiency, security, and scalability. The adoption of a managed AWS environment streamlined IT operations, allowing the company to focus on innovation and maintain a competitive edge in the rapidly evolving telecommunications sector. This case study underscores the power of utilizing AWS cloud solutions and expert Managed Service Provider (MSP) services to drive digital transformation in the asset investment industry.


        </div>

      </section>
    </>
  )
}

export default AwrapperAssetCompany
