import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperBSI = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Securely Manage Apps from Multiple Business Unit on AWS' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          One of Syariah Bank in Indonesia engage with Mastersystem Infotama, a major IT
          consultancy and an Amazon Web Services (AWS) Partner, to help them design and
          implement infrastructure in AWS to manage their Identity and Access Management
          in AWS Cloud before running and migrating apps to AWS.

          <br /> <br />
          <h4>        Customer Challange
          </h4>
          One of the customer challenge is managing multiple applications from different
          business unit/owner. Security vulnerabilities also pose a serious risk of data
          breaches and compliance failures, while the lack of a high-availability strategy
          increases the likelihood of downtime, potentially eroding customer trust and
          damaging market reputation.
          By adopting AWS, specifically through an AWS Landing Zone, the customer can
          establish a secure, scalable, and well-managed cloud foundation. AWS Landing
          Zone provides a standardized multi-account setup with built-in security guardrails,
          automated governance, and compliance best practices. Services like AWS Auto
          Scaling ensure seamless scalability, while AWS Identity and Access Management
          (IAM), AWS Security Hub, and AWS Control Tower enforce security and regulatory
          policies. Additionally, AWS’s global infrastructure and multi-AZ architecture
          enhance high availability and disaster recovery. With AWS, the customer can
          mitigate operational risks, improve agility, and maintain market trust, ensuring
          long-term success.


          <br /> <br />
          <h4>Solution</h4>
          To address the customer's challenges, Mastersystem Infotama are implementing
          an AWS Landing Zone with a multi-account architecture to enhance security,
          governance, and operational efficiency. This setup enforces security best practices
          using AWS Identity and Access Management (IAM), AWS Security Hub, and
          automated compliance policies, ensuring a robust security posture.      <br /> <br />
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>
          <br />
          The AWS Landing Zone is created using AWS Control tower while AWS Organization
          is required as the accounts orchestrator. By Using AWS Organization, customer can
          centrally manage multiple account and apps in AWS. To ensure a secure
          environment, an AWS Service is employed to create access rights and grant these
          access rights to related users. This goal can be achieved by utilize the AWS IAM
          Identity Center. Additionally, a secure environment provides protection against
          activity logs in the environment. To address this, AWS CloudTrail Trail Log and VPC
          Flow Log are used, which are stored in Amazon S3. Regarding network security, 3rd
          party Firewall is deployed in Amazon EC2 to inspect network traffic in this
          environment. Amazon GuardDuty is also used as an intelligent threat detection
          system, monitoring malicious and unauthorized activities in existing accounts and
          workloads. All the security and network related logs are stored in a centralize place.
          Communication network between environment in AWS is established by using AWS
          Transit Gateway. To connect to the on-premise data center, Amazon Direct Connect
          and Site-to-Site VPN are the solutions that used in this case. After landing zone is
          deployed, the next step is to create an environment to deploy the desired workload,
          in this case is a GenAI workload.
          One of the workload environment consists of Amazon ECS Cluster as a container
          services that can use auto-scaling. Managed Stream for Kafka Cluster to store GenAI
          historical data that Orchestrator generates in RDS through Kafka topics. Amazon
          Bedrock GenAI core services to provide AWS-maintained LLMs. Database using RDS
          PostgreSQL. AWS KMS to manage encryption keys. AWS Certificate Manager to
          manage SSL certificate, Amazon Sagemaker as a Web-based IDE running on PVC
          private network to run jupyter notebook for RDS connection related to data
          processing.

          <br /><br />
          <h4>Outcome</h4>
          With this solution, the customer gains a centralized and scalable environment to
          efficiently manage multiple applications from various business owners. The AWS
          Landing Zone with a multi-account architecture enables organized governance and
          streamlined management while maintaining robust security and compliance across
          diverse workloads. This structure ensures that each business owner can operate
          independently within their own account while adhering to consistent security
          policies.



        </div>

      </section>
    </>
  )
}

export default AwrapperBSI
