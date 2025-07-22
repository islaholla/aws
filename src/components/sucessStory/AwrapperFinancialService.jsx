import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperFinancialService = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Cloud Transformation Strategy through Managed Service Operation in to-tier financial service provider in Indonesia' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          This case study showcases the digital transformation journey of a prominent Financial Services Industry (FSI) company C in Indonesia, enabled through AWS Managed Services. In response to increasingly complex regulatory requirements, rising customer expectations for real-time services, and the need to strengthen operational resilience, the client turned to cloud modernization as a strategic priority. Partnering with us as their AWS Managed Service Provider (MSP), the organization achieved a secure, agile, and cost-efficient cloud infrastructure. By leveraging the scalability and compliance capabilities of AWS, the client is now positioned to innovate faster, operate with greater efficiency, and maintain a competitive edge in Indonesia’s dynamic financial sector.

          <br /> <br />
          <h3>        Managed Services Solution
          </h3>
          The client adopted Mastersystem Managed Service Operations (MSO) with the following key implementations:
          <h4>1. IT Operations Management</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Used Terraform on AWS to automate infrastructure provisioning and support scalable deployments.</li>
            <li>• Utilized AWS Trusted Advisor to monitor best practices across cost optimization, performance, security, and fault tolerance, supporting proactive operations management.</li>
          </ul>
          <h4>2. Cost Optimization with AWS Savings Plans and Reserved Instances</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Implemented AWS Savings Plans to maximize cost savings on ongoing compute operations.</li>
          </ul>
          <h4>3. Backup and Disaster Recovery Enhancement</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Implemented daily backup routines to support regulatory compliance and ensure business continuity.</li>
          </ul>
          <h4>4. Security and Compliance Strengthening</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Utilized AWS GuardDuty and AWS WAF, integrated with Imperva Incapsula, to strengthen cybersecurity defenses and proactively mitigate emerging threats.</li>
            <li>• Implemented AWS IAM and CloudTrail, to ensure secure access control and maintain compliance through comprehensive activity logging.</li>
          </ul>
          <h4>5. Service Availability and Monitoring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Enabled real-time system monitoring and performance visibility through Amazon CloudWatch Dashboards.</li>
            <li>• Integrated CloudWatch Alarms with SNS to automate notifications for system issues, enabling timely incident management.</li>
          </ul>


          <br /> <br />
          <h3>Result and Benefits</h3>
          By leveraging AWS Managed Services, the client has significantly improved its security posture, operational efficiency, regulatory compliance, and cost-effectiveness. These advancements position the organization to deliver agile, secure, and compliant financial services across the Indonesian market.
          
          <br /><br />
          <h3>Conclusion</h3>
          The implementation of AWS Managed Services represents a pivotal step in the client’s digital transformation journey. By streamlining IT operations, strengthening security and compliance, and driving cost efficiency, the client is now equipped to thrive in the fast-evolving financial services industry. Through our customized Managed Service Operations (MSO), the organization has achieved stronger operational resilience and regulatory adherence while paving the way for ongoing innovation and business growth. This collaboration lays a solid foundation for future digital advancement, empowering the client to scale with confidence and remain competitive in Indonesia’s dynamic financial landscape.
          


        </div>

      </section>
    </>
  )
}

export default AwrapperFinancialService
