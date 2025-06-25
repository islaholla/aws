import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BRI.png';
import { useLocation } from "react-router-dom";



const AwrapperBRI = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='AWS IAM Service to Secure AWS Multi Account on Government Owned Bank' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          A prominent government-owned bank in Indonesia required an AWS environment  that offered scalability, security, and the ability to be established and dismantled  rapidly to optimize costs. In collaboration with AWS and PT Mastersystem Infotama Tbk, the AWS Landing Zone was developed, providing the fundamental framework  necessary to fulfill these objectives while ensuring security and cost-effectiveness.  By meticulously crafting this Landing Zone, we have successfully developed an AWS
          environment that is not only expeditious and cost-effective, but also ensures  optimal safety. This environment is not only suitable for immediate applications  but also paves the way for future strategic endeavors.

          <br /> <br />
          <h4>        Case Study
          </h4>
          A critical need exists for a secure, scalable, and cost-effective AWS environment to  support the Bank's evolving IT infrastructure. The current reliance on on-premise  equipment presents significant limitations, including restricted allocation due to  production prioritization, lengthy procurement processes that are financially  inefficient for short-term needs, and an inability to dynamically scale resources. To  address these challenges, the Bank is exploring AWS as a potential future  computing capacity provider. This transition necessitates a robust security  framework to ensure seamless integration with the existing production  environment and to mitigate the growing threat of cyberattacks. A key requirement  is to optimize costs by avoiding the over-provisioning inherent in on-premise  solutions, where unused capacity still incurs expenses. Therefore, the chosen AWS  solution must provide on-demand scalability, efficient resource utilization, and  rigorous security measures to safeguard sensitive data and ensure uninterrupted  testing operations.

          <br /> <br />
          <h4>Solution</h4>
          In response to this need, Mastersystem collaborated with Amazon Web Service to
          create a secure, scalable, and cost-effective testing environment tailored to
          customer needs.      <br /> <br />
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>
          <br />
          In the initial phase, addressing the security imperative, the AWS Landing Zone was
          developed as a foundational element for security within the AWS Cloud. The AWS
          Landing Zone is constructed using multiple AWS Services, which are supporting
          services in its creation. Due to the use of multiple accounts in the creation of this
          landing zone, an AWS Organization is required as an account orchestrator. To ensure
          a secure environment, an AWS Service is employed to create access rights and grant
          these access rights to related users. This process utilizes the AWS IAM Identity
          Center. Additionally, a secure environment provides protection against activity logs
          in the environment. To address this, AWS CloudTrail Trail Log and VPC Flow Log are
          used, which are stored in Amazon S3. Regarding network security, AWS Network
          Firewall is employed to safeguard traffic traversing this environment. Amazon
          GuardDuty serves as an intelligent threat detection system, monitoring malicious
          and unauthorized activities in existing accounts and workloads. Following the
          establishment of the initial Landing Zone phase, the subsequent step involves the
          creation of a testing environment. This environment employs RedHat OpenShift on
          AWS, a platform that offers scalable resource availability through its integration with
          Amazon EC2, facilitating seamless scaling. This scaling utilizes all availability zones
          within a single region. ROSA employs a pay-as-you-use licensing model, which is
          advantageous for on-demand environments that are not operational 24/7. The cost
          is incurred only when the license is used and when the environment is turned off,
          there is no cost. The combination of ROSA and EC2 ensures cost-effectiveness and
          time-effectiveness, as they can be completely shut down and rebuilt in a relatively
          short time.
          <br /><br />
          <h4>Benefit and Result</h4>
          Utilizing AWS Landing Zone, AWS Infrastructure, and AWS Managed Service provides
          the Bank with a secure, scalable, and cost-effective AWS environment. This
          combination offers the Bank several advantages that can help accelerate its business.
          The AWS multi-account approach, equipped with AWS Organization, offers the
          Bank several benefits, including the ability to more easily create new AWS accounts

          to separate workloads. In the past, creating a new AWS account was a time-
          consuming process that took hour. However, with AWS Organization, the same

          process is now completed in a matter of tens of minutes. This results in a time
          efficiency ratio of over 60%.
          The AWS Landing Zone, equipped with the AWS IAM Identity Center, offers a
          number of advantages. Previously, if users did not use the single sign-on method, at
          least five account passwords were required. With the IAM Identity Center,

          however, only one password is needed to access various AWS accounts with pre-
          adjusted access rights in the IAM Identity Center via the Permission Set.



        </div>

      </section>
    </>
  )
}

export default AwrapperBRI
