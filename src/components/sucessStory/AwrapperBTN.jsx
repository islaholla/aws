import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BTN.png';
import { useLocation } from "react-router-dom";



const AwrapperBTN = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Secure Scalable and Cost Effective Testing Environment on AWS Cloud' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          One  of  State  Owned Bank  in  Indonesia  has  a  need  to  meet  Compliance  and  Governance  standards.  Providing  services  that  are  always  there  for  bank  customers and providing convenience for the bank IT team in terms of services,  data center  facilities and also enabling security of server resources in a short  time is the main concern.

          <br /> <br />
          <h4>        Customer Challange
          </h4>
          As the Bank embarked on its cloud transformation journey, several key
          challenges had to be overcome to ensure a secure, compliant and scalable AWS
          Landing Zone implementation.
          And here is basic compliance and security governance to IT standardization,
          which includes:
          a. Identity & Access Management (Role Authorization)
          b. Resource Organization & Hierarchy Management (Resource Management)
          c. Cost/Billing Management (Financial Management)
          d. Network Architecture (Enterprise Network Design)

          <br /> <br />
          <h4>Solution</h4>
          PT. Mastersystem Infotama Tbk as Amazon AWS Partner, provides AWS
          Landing Zone using AWS Control Tower as a solution to fulfil the needs of the
          Bank. Landing Zone is a well-architected, multi-account AWS environment
          that's based on security and compliance best practices.
          The following is the High Level Diagram offered for the account structure on the
          AWS Landing Zone :      <br /> <br />
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>
          <br />
          The Management Account is the primary account within an AWS Organization,
          responsible for managing the overall billing, organizational structure, and
          governance policies of all member accounts. Within the Management Account,
          AWS Organizations is configured to centrally manage multiple AWS accounts
          used by the Bank. Through Organizations, the Bank can define Organizational
          Units (OUs), apply Service Control Policies (SCPs), and streamline account
          provisioning and access governance.
          To simplify and secure access management across all AWS accounts, AWS IAM
          Identity Center (formerly AWS SSO) is integrated into the environment. IAM
          Identity Center allows centralized identity and access management by connecting
          to the Bank’s identity provider. This enables fine-grained role-based access
          control (RBAC) for teams across different accounts, ensuring that users can
          seamlessly access only the AWS resources and accounts they are authorized for
          via a single sign-on experience.
          In addition to the Management Account, the AWS Organization includes several
          specialized accounts:
          • Audit Account: Used by security and compliance teams to monitor activity
          across accounts using tools such as AWS Security Hub, AWS Config, and
          Amazon GuardDuty.
          • Log Archive Account: Serves as a centralized location for storing logs
          (CloudTrail, VPC Flow Logs) from all accounts for compliance, auditing,
          and troubleshooting.
          • Shared and Network Account: Hosts shared infrastructure services such
          as AWS Direct Connect and Transit Gateway, used across multiple
          workload accounts to ensure consistent and secure network connectivity.
          <br /><br />
          <h4>Benefit and Result</h4>
          By implementing AWS Landing Zone, the Bank improved 75% for operational
          performance and agility, workload scalability, leveraging Cloud infrastructure
          also provides increased availability for users which can help optimize and
          streamline business activities without neglecting the security of services residing
          on cloud infrastructure.
          A key enabler of this success is the integration of AWS IAM Identity Center, which
          has streamlined user access management across multiple AWS accounts. With
          centralized single sign-on (SSO) and role-based access control (RBAC), the Bank
          has eliminated the operational overhead of managing separate IAM users in each
          account. This has led to:
          • Faster onboarding of teams and users,
          • Improved access governance and compliance,
          • Reduced risk of misconfigured permissions or unauthorized access,
          • Simplified auditability for security and compliance teams.
          Together, these improvements have empowered the Bank to scale securely in the
          cloud, maintain strong security posture, and enhance user productivity while
          adhering to regulatory and operational requirements.



        </div>

      </section>
    </>
  )
}

export default AwrapperBTN
