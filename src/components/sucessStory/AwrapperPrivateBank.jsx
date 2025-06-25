import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperPrivateBank = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Managed Security Enhancement for National Private Bank' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          A leading national private bank is the 5th largest bank in Indonesia by assets,
          offering a full range of financial services including retail banking, corporate banking,
          and digital banking solutions. As a tech-forward institution, the bank is a pioneer in
          cloud adoption among Indonesian banks and continues to lead innovation through
          its award-winning digital banking platforms. To support secure cloud adoption, the
          bank partnered with an Mastersystem Infotama Managed Security Service Provider
          (MSSP) to ensure continuous monitoring, compliance readiness, and proactive
          threat response across its AWS environments.

          <br /> <br />
          <h4>        Challange
          </h4>
          The bank cloud expansion strategy introduced several security and operational
          challenges:
          <ul style={{ paddingLeft: '20px' }}>
            <li>Regulatory Demands: Must meet strict requirements from OJK (Indonesia Financial Services Authority), Bank Indonesia, and ISO 27001, including log retention, segmentation, and auditability.</li>
            <li>Growing Attack Surface: Expansion of services on AWS increased the complexity and risk of misconfiguration or targeted attacks.</li>
            <li>Internal SOC Overload: The internal Security Operations Center (SOC) required support to manage cloud-native threats and 24/7 monitoring.</li>
            <li>Multi-Account Complexity: AWS accounts used for dev and production across business units needed centralized governance.</li>
          </ul>


          <br /> <br />
          <h4>Solution</h4>
          The bank engages with Mastersystem MSSP with the following key
          implementations:
          <br />
          <div>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>• Threat Detection & Managed Response.</strong></li>
            </ul>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Our 24/7 Monitoring Team are continuous threat monitoring using Amazon GuardDuty, AWS Security Hub and AWS CloudTrail.</li>
              <li>Provide automated ticketing and triage of incidents respond.</li>
            </ul>

            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>• Compliance & Governance.</strong></li>
            </ul>
            <ul style={{ paddingLeft: '40px' }}>
              <li>We implemented an AWS Landing Zone architecture to separate organizational units and accounts for core AWS services and applications, enforcing separation of duties. AWS Control Tower has automated the creation and management of this structure.</li>
              <li>Centralized weekly, monthly, and ad-hoc reporting mapped to OJK POJK 38/POJK.03/2016, Bank Indonesia regulations, and ISO 27001 control domains.</li>
            </ul>

            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>• Cloud Security Posture Management (CSPM).</strong></li>
            </ul>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Deployment of AWS Config rules and custom policies across all accounts to continuously check against misconfigurations.</li>
              <li>AWS IAM role validation, encryption at rest checks, and network exposure analysis.</li>
            </ul>

            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>• Service Availability and Monitoring.</strong></li>
            </ul>
            <ul style={{ paddingLeft: '40px' }}>
              <li>A secure and redundant connection to on-premises infrastructure is established through AWS Direct Connect.</li>
              <li>Data is encrypted both at rest and in transit by using an AWS service.</li>
              <li>Deployed Amazon CloudWatch Dashboards for operational visibility and provide real-time monitoring and insights into system performance.</li>
              <li>Used CloudWatch Alarms with Amazon SNS to notify IT teams of anomalies or downtimes, enabling swift incident response.</li>
            </ul>
          </div>

          <br /><br />
          <h4>Result and Benefit</h4>
          Through the collaboration with an Mastersystem MSSP, the bank achieved tangible
          improvements across its cloud security operations and regulatory alignment, such
          as:
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              The implementation of continuous threat detection and response led to a significant improvement in incident handling. The MSSP successfully detected and responded to 98% of known threats within defined SLA with a mean time to detect (MTTD) of and a mean time to respond (MTTR) just in minutes. This allowed the bank to move from a reactive to a proactive security posture.
            </li>

            <li>
              As a result of ongoing security hardening and posture assessments, the bank saw a 47% reduction in critical security incidents in the first-time engagement indicating stronger preventive controls and faster mitigation cycles.
            </li>

            <li>
              In terms of compliance, the Mastersystem MSSP reporting and automation significantly reduced manual efforts. The time required to prepare for regulatory audits such as those mandated by OJK and ISO 27001 was reduced by 65%, streamlining communication with internal risk teams and external auditors.
            </li>

            <li>
              Security visibility across cloud assets also improved dramatically. By integrating services like AWS Config, Security Hub, and CloudTrail into a centralized dashboard, the bank achieved 100% visibility across all AWS accounts and workloads.
            </li>

            <li>
              Log management was optimized to meet financial regulatory requirements. The MSSP handled secure ingestion, retention, and access control of log data per month, ensuring integrity and availability for compliance and forensics purposes.
            </li>

            <li>
              Finally, the bank AWS Security Hub posture score increased to 92% indicating a measurable improvement in cloud security maturity and governance across all environments.
            </li>
          </ul>



        </div>

      </section>
    </>
  )
}

export default AwrapperPrivateBank
