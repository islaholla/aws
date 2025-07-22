import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperProminentBank = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Digital Transformation Journey Through Managed Service Operation in a Prominent Banking Institution in Indonesia' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          This case study showcases the successful digital transformation of a leading Financial Services Industry (FSI) company B in Indonesia through the implementation of AWS Managed Services. Facing growing regulatory requirements, demand for real-time data, and the need to enhance operational resilience, the client sought a secure, cloud-based solution to modernize its IT operations. As an AWS Managed Service Provider (MSP), we delivered comprehensive infrastructure optimization, cost efficiency, and enhanced security. Leveraging AWS technologies, the client is now better equipped to scale securely, remain compliant, and deliver innovative financial services in Indonesia’s highly regulated and competitive market.

          <br /> <br />
          <h3>        Managed Services Solution
          </h3>
          The client adopted Mastersystem Managed Service Operations (MSO) with the following key implementations:
          challenges:
          <h4>1. IT Operations Management</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Leveraged AWS Terraform for automated infrastructure provisioning and scaling.</li>
          </ul>
          <h4>2. Cost Optimization with AWS Savings Plans and Reserved Instances</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Adopted AWS Savings Plans to reduce compute costs for long-term workloads.</li>
          </ul>
          <h4>3. Backup and Disaster Recovery Enhancement</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Conducted daily backup to ensure compliance with business continuity standards and financial sector regulations.</li>
          </ul>
          <h4>4. Security and Compliance Strengthening</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Leveraged AWS GuardDuty, AWS Security Hub and AWS Trust Advisor to fortify the client’s cybersecurity posture and protect against evolving threats.</li>
            <li>• Ensured regulatory compliance through the implementation of AWS Identity and Access Management (IAM) policies, AWS CloudTrail, and AWS IAM Access Analyzer for meticulous auditing and logging of activities.</li>
          </ul>
          <h4>5. Service Availability and Monitoring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Deployed Amazon CloudWatch Dashboards for operational visibility and provide real-time monitoring and insights into system performance.</li>
            <li>• Used CloudWatch Alarms with Amazon SNS to notify IT teams of anomalies or downtimes, enabling swift incident response.</li>
          </ul>


          <br /> <br />
          <h3>Result and Benefits</h3>
          Through AWS Managed Services, the client has strengthened its security posture, improved operational efficiency, ensured compliance with financial regulations, and optimized costs. This transformation empowers the organization to innovate securely and deliver responsive, compliant, and scalable financial services across Indonesia.
          
          <br /><br />
          <h3>Conclusion</h3>
          The successful implementation of AWS Managed Services marks a significant milestone in the client's digital transformation journey. By modernizing IT operations, enhancing security and compliance, and optimizing costs, the organization is now better positioned to navigate the complexities of the financial services landscape. Through our tailored Managed Service Operations (MSO), the client not only achieved greater operational resilience and regulatory alignment but also unlocked new opportunities for innovation and growth. This strategic partnership sets the foundation for continued digital maturity, enabling the client to confidently scale, adapt, and lead in Indonesia’s dynamic financial sector.
          


        </div>

      </section>
    </>
  )
}

export default AwrapperProminentBank
