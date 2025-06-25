import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperGovermentBank = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Managed Security Enhancement for FSI Company' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          One of the Commercial Bank Business Activity IV or Bank Umum Kegiatan Usaha
          (BUKU) IV banks in Indonesia has successful digital transformation of a leading
          Financial Services Industry (FSI) company in Indonesia through the implementation
          of AWS Managed Services. Facing growing regulatory requirements, demand for
          real-time data, and the need to enhance operational resilience, the client sought a
          secure, cloud-based solution to modernize its IT operations. Mastersystem
          Infotama Managed Service Security Provider (MSSP), we delivered comprehensive
          infrastructure optimization, cost efficiency, and enhanced security. Leveraging
          AWS technologies, the client is now better equipped to scale securely, remain
          compliant, and deliver innovative financial services in Indonesian highly regulated
          and competitive market.

          <br /> <br />
          <h3>        Business Challenge
          </h3>
          Major challenge is the need for real-time security monitoring and incident response
          in a hybrid cloud environment, as financial services operate on both on-premises
          and cloud-based infrastructure. Reducing operational overhead while managing
          security risks is critical, as the firm aims to avoid costly downtime and reputational
          damage. Lastly, the company seeks to optimize security costs by leveraging AWS-
          native security solutions.


          <br /> <br />
          <h3>Solution</h3>
          <h4>Mastersystem MSSP Security Service</h4>
          The client adopted Mastersystem MSSP with the following key implementations:
          <br />
          <strong>IT Operations Management.</strong>
          <ul style={{ paddingLeft: '30px' }}>
            <li>Leveraged CI/CD Orchestration Terraform for automated infrastructure provisioning and scaling.</li>
            <li>Cost Optimization with adopted AWS Savings Plans to reduce compute costs for long-term workloads.</li>
            <li>AWS Backup for Disaster Recovery Enhancement to conducted daily backup to ensure compliance with business continuity standards and financial sector regulations.</li>
            <li>We have implemented AWS Direct Connect as the primary connection between Corporate Datacenter and AWS Virtual Private Clouds (VPCs). This service establishes a secure connection between local networks by providing a highly available and managed private solution to secure network traffic for data access to AWS Cloud.</li>
          </ul>

          <strong>Security and Compliance Strengthening.</strong>
          <ul style={{ paddingLeft: '30px' }}>
            <li>Provides Monitoring Team 24 hours a day and 7 days a week from Mastersystem MSSP. Partnering with customers in our 24/7 service monitoring provides and security appliances that continuously provide protection, enabling proactive detection and rapid response to threat control and analysis.</li>
            <li>To follow AWS best practices, AWS Landing Zone architecture is designed to enforce separation of duties by creating distinct organization units and accounts for core AWS services and applications. This structure is automated using AWS Control Tower, enabling customers to adhere to AWS security best practices, implement Amazon Guardrails, and apply stringent organization-wide controls.</li>
            <li>Leveraged AWS GuardDuty, AWS Security Hub and AWS Trust Advisor to fortify the client cybersecurity posture and protect against evolving threats.</li>
            <li>To Ensured regulatory compliance, we implemented of AWS Identity and Access Management (IAM) policies, AWS CloudTrail, and AWS IAM Access Analyzer for meticulous auditing and logging of activities.</li>
            <li>Leveraged AWS Config and AWS Security Hub to maintain continuous compliance with NITS, AWS Foundational Security Best Practice.</li>
            <li>Integration dan collaboration with Centralized management for CDN and Web Application Firewalls (WAF) to protect customer web application on AWS against DDoS attacks and other internet-based threats.</li>
            <li>Integrated customer Enterprise-Grade Next-Generation Firewall (NGFW) on AWS to enhance security for VPN clients, ensuring secure remote access and network protection.</li>
            <li>With an AWS solution, data is protected through encryption both at rest and in transit.</li>
          </ul>

          <strong>Service Availability and Monitoring.</strong>
          <ul style={{ paddingLeft: '30px' }}>
            <li>Deployed Amazon CloudWatch Dashboards for operational visibility and provide real-time monitoring and insights into system performance.</li>
            <li>Used CloudWatch Alarms with Amazon SNS to notify IT teams of anomalies or downtimes, enabling swift incident response.</li>
          </ul>

          <br /><br />
          <h3>Business Outcome</h3>
          Through AWS and Managed Security Services, the client gains 99% security system
          uptime for security posture, 50% improved operational efficiency, up to 75% ensure
          compliance with financial regulations, and optimized costs. This transformation
          empowers the organization to innovate securely and deliver responsive, compliant,
          and scalable financial services across Indonesia.

          <br /><br />
          <h3>Conclution</h3>
          The successful implementation of AWS Managed Security Services marks a
          significant milestone in the client's digital transformation journey. By modernizing IT
          operations, enhancing security and compliance, and optimizing costs, the
          organization is now better positioned to navigate the complexities of the financial
          services landscape. Through Mastersystem Managed Service and Security Services
          the client not only achieved greater operational resilience and regulatory alignment
          but also unlocked new opportunities for innovation and growth. This strategic
          partnership sets the foundation for continued digital maturity, enabling the client to
          confidently scale, adapt, and lead in Indonesian dynamic financial sector.



        </div>

      </section>
    </>
  )
}

export default AwrapperGovermentBank
