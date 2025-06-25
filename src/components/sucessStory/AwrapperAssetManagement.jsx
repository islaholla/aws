import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperAssetManagement = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Managed Security Enhancement for Asset Management Company' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          One Indonesian Investment Management Company is rapidly evolving, requiring
          secure, cost-effective, and highly available IT operations to support financial
          transactions and portfolio management. This case study explores how
          Mastersystem Infotama Managed Service Security Provider (MSSP) helped a
          leading Indonesian investment company optimize daily IT operations, implement
          backup strategies, enhance security reporting, and improve cost efficiency.
          Additionally, the company leveraged Amazon AWS to deploy new workloads
          efficiently to support its growing digital investment platforms.

          <br /> <br />
          <h3>        Challange
          </h3>
          The company requires a comprehensive security solution that provides 24/7
          security monitoring to detect and mitigate potential threats proactively. This
          includes real-time threat detection and automated incident response to minimize
          financial and reputational risks. Additionally, the company must ensure continuous
          compliance with regulatory frameworks, avoiding fines and legal liabilities.
          A strict identity and access management (IAM) strategy is also necessary to prevent
          unauthorized access to sensitive investment and trading data. Furthermore, cloud
          workload protection must be implemented to secure applications and
          infrastructure hosted on AWS. By leveraging Mastersystem MSSP services, the
          company aims to automate security processes, reduce human intervention, and
          enhance operational efficiency. Optimize security costs by leveraging AWS-native
          solutions rather than relying on expensive third-party security tools.


          <br /> <br />
          <h3>Solution</h3>
          <h4>Mastersystem MSSP Security Services</h4>
          To address its security needs, the asset management company adopted
          Mastersystem MSSP with the following key implementations:
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Provide continues 24/7 Incident Response Teams Monitoring of Mastersystem MSSP.</li>
            <li>• Implemented AWS GuardDuty, AWS Security Hub, and AWS CloudTrail to provide continuous security event monitoring across AWS accounts, identifying potential threats such as unauthorized access, malware, or abnormal network activity on production workload account.</li>
            <li>• Automated incident response playbooks we created using AWS Lambda and AWS Systems Manager, to ensuring rapid containment of security incidents. This will include predefined responses for financial fraud attempts, unauthorized API access, and insider threats.</li>
            <li>• Utilize AWS Config to maintain continuous compliance with CIS, ISO 27001 regulations. These services will automate compliance audits, generate security reports, and enforce governance policies.</li>
            <li>• Implemented Role-based access controls using AWS IAM, enforcing least- privilege policies to restrict access to critical systems. Multi-factor authentication (MFA) will be required for all privileged users, and access logs will be monitored via AWS CloudTrail.</li>
            <li>• AWS Security Hub and AWS Systems Manager we used to monitor and secure Amazon EC2 instances. Workload encryption and runtime protection measures will be enforced to prevent unauthorized modifications.</li>
            <li>• Web Application Firewalls (WAF) are used to protect customer web application against DDoS attacks and other internet-based threats.</li>
            <li>• Integrated Sophos Next-Generation Firewall (NGFW) on AWS to enhance security for VPN clients, ensuring secure remote access and network protection.</li>
            <li>• We have implemented AWS Direct Connect as the primary connection and AWS Site-to-Site VPN as the backup connection between corporate datacenter and AWS Virtual Private Clouds (VPCs). This service establishes a secure connection between local networks by providing a highly available and managed private solution to secure network traffic for access users and on-premises backup solutions to AWS Cloud.</li>
          </ul>

          <br /><br />
          <h3>Expected Benefit</h3>
          By leveraging AWS-native security and Managed Services Security, companies can
          expect:
          <br />
          <strong>• Security & Risk Reduction</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              Company gains 99% security system uptime for proactive threat detection
              and real-time mitigation capabilities. This significantly 90% reduce the risk of
              financial data breaches, fraud, and cyberattacks, ensuring the security of
              client investments. 50% increase in security team efficiency with automated
              incident response will further minimize business disruptions caused by
              security threats.
            </li>
          </ul>
          <br />
          <strong>• Compliance & Regulatory Readiness</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              With AWS-native is 100% compliance with industry security standards
              compliance solutions will ensure continuous security posture monitoring,
              helping the company meet regulatory obligations without extensive manual
              intervention. Audit-ready security reports generated automatically,
              simplifying regulatory compliance and reducing audit preparation time.
            </li>
          </ul>
          <br />
          <strong>• Cost & Operational Efficiency</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              Leveraging AWS-native security services will reduce up to 30-40% compare
              with third-party security tool expenses while enhancing security automation.
              This will lower operational costs associated with manual threat detection
              and incident response, allowing security teams to focus on strategic security
              initiatives rather than routine monitoring.
            </li>
          </ul>

          <br /><br />
          <h3>Conclution</h3>
          By strategically using AWS and Mastersystem AWS Managed Service Security, the
          client transformed IT infrastructure, improving cost efficiency, security, and
          scalability. As Indonesia investment sector continues to grow, AWS remains a critical
          partner in enabling digital transformation, ensuring operational excellence, and
          supporting new investment opportunities.



        </div>

      </section>
    </>
  )
}

export default AwrapperAssetManagement
