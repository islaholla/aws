import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperTelco = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Managed Security Services for Telecommunication Company' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          This case study explores how Mastersystem Infotama Managed Service Security
          Provider (MSSP) helped a leading telecommunications provider in Indonesia
          through the implementation of AWS Managed Services. Driven by the need for
          innovation, the client sought a cloud-based solution to modernize IT operations.
          By leveraging AWS technologies, the client has positioned itself for sustained
          growth, innovation, and enhanced service delivery in Indonesian competitive
          telecommunications landscape.

          <br /> <br />
          <h3>        Challange
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Security monitoring and incident response in a cloud environment for Business Intelligence (BI) workload.</li>
            <li>Reducing operational overhead while managing security risks.</li>
            <li>Company also seeks to optimize security costs by leveraging AWS-native solutions rather than relying on expensive third-party security tools.</li>
          </ul>


          <br /> <br />
          <h3>Solution</h3>
          <h4>Mastersystem MSSP Security Services</h4>
          To address security needs, Mastersystem MSSP services adopted AWS-native
          security tools into its existing operations. These efforts encompass:
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>Continuous 24/7 by Mastersystem MSSP SOC Team.</li>
            <li>Utilize AWS GuardDuty and AWS Security Hub to fortify the client cybersecurity posture and protect against evolving threats especially on their production workload.</li>
            <li>Ensured regulatory compliance through the implementation of AWS Identity and Access Management (IAM) policies, AWS CloudTrail, and AWS IAM Access Analyzer for meticulous auditing and logging of activities.</li>
            <li>Automated incident response playbooks will be created using AWS Lambda to ensuring rapid containment of security incidents. This will include predefined responses for financial fraud attempts, unauthorized API access, and insider threats.</li>
            <li>We utilize AWS Config to maintain continuous compliance with CIS, ISO 27001 regulations. These services will automate compliance audits, generate security reports, and enforce governance policies.</li>
            <li>Role-based access controls will be implemented using AWS IAM, enforcing least-privilege policies to restrict access to critical systems. Multi-factor authentication (MFA) will be required for all privileged users, and access logs will be monitored via AWS CloudTrail.</li>
            <li>Centralized management and analysis of security logs is done by the customer and other SOC partner, while our team takes care of timely actions and incident management.</li>
            <li>Implemented Amazon CloudWatch Dashboards to provide real-time monitoring and insights into system performance.</li>
            <li>Implemented Amazon CloudWatch Alarms to trigger automated responses and notify IT teams of potential issues using Amazon SNS.</li>
          </ul>

          <br /><br />
          <h3>Result and Benefit</h3>
          By utilizing AWS-Native service and Mastersystem MSSP Security Service delivered
          measurable improvements, including:
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              Continuous 24/7 by Mastersystem MSSP SOC Team: Providing around-the-clock threat detection, analysis, and incident response to ensure immediate action on any security anomaly, reducing Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR).
            </li>

            <li>
              Improved Security System Uptime: Minimized system downtime through proactive monitoring and timely issue resolution, achieving a 99.99% service availability rate. This will significantly reduce the risk of financial data breaches, fraud, and cyberattacks, ensuring the security of client investments. Automated incident response will further minimize business disruptions caused by security threats.
            </li>

            <li>
              Reduction Costs & Operational Efficiency: Leveraging AWS-native security services will reduce up to 40% compare with third-party security tool expenses while enhancing security automation. 50% increase in security team efficiency, this will lower operational costs associated with manual threat detection and incident response, allowing security teams to focus on strategic security initiatives rather than routine monitoring.
            </li>

            <li>
              Enhanced Security: Strengthened the security posture with continuous vulnerability assessments, automated patch management, and robust access controls, ensuring compliance with industry standards and safeguarding critical data, resulting up to 75% improvement in security score.
            </li>
          </ul>
          With these results, through strategic collaboration with an AWS-focused MSSP, the
          telecom provider successfully transformed its cloud operations, significantly reduced
          costs, improved security, and enhanced service delivery. The implementation of a
          fully managed AWS environment enabled the company to streamline its IT
          operations, focus on innovation, and maintain a competitive edge in the dynamic
          telecommunications sector. This case study highlights the effectiveness of leveraging
          AWS cloud solutions and expert MSSP services to drive digital transformation in the
          telecom industry.



        </div>

      </section>
    </>
  )
}

export default AwrapperTelco
