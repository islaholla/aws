import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram Danamon satu.png';
import diagram2 from '../../components/image/Diagram Danamon dua.png';
import { useLocation } from "react-router-dom";



const AwrapperDanamon = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Enhancement and Improvement AWS Landing Zone' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          The Bank accelerated its digital transformation by adopting a secure, scalable  and  manageable  cloud  infrastructure  through  the  implementation  of  AWS Landing Zone. This strategic initiative lays the foundation for modern banking  services, operational agility and regulatory compliance in the cloud. The Bank  currently has an AWS Landing Zone, the Bank has 7 accounts, but all accounts  have not been assigned to their respective OUs.

          <br /> <br />
          <h4>        Customer Challange
          </h4>
          To  support  security  in  today's  digital  era,  the  availability  of  services  is  very  important, be it a Data Centre, Server devices or other supporting services, so  that customers  feel comfortable and happy using  these services. As  the Bank  transitioned to a cloud-first model, it faced some key challenges that had to be  overcome  to  ensure  a  secure,  compliant  and  effective  AWS  Landing  Zone
          implementation.  These  challenges  were  both  technical  and  organisational,  reflecting  the  complexity  of  modern  banking  operations  in  a  regulated  environment.


          <br /> <br />
          <h4>Solution</h4>
          PT. Mastersystem Infotama Tbk as Amazon AWS Partner, provides
          improvements to the existing AWS Landing Zone with AWS Best Practices
          standard. Which is where the Landing Zone becomes feasible in terms of
          compliance and governance from the Bank. The following Account Structure
          improved from Mastersystem from the previous hierarchy at the same level for
          all AWS accounts:      <br /> <br />
          <div className="image-diagram">
            <img src={diagram} alt="" />
          </div>
          <br />
          AWS Landing Zone which was previously created manually, Mastersystem made
          improvements to the AWS Landing Zone using the AWS Control Tower Service
          with the following High Level Diagram:
          <div className="image-diagram2">
            <img src={diagram2} alt="" />
          </div>
          <br />
          As part of the governance enhancement, AWS Control Tower is activated in
          the Management Account to upgrade from the previous AWS Landing Zone setup.
          This enables automated, scalable governance for a multi-account environment.
          Within the AWS Organization, Service Control Policies (SCPs) are enabled to
          enforce account-level restrictions and align with the Bank’s security and
          compliance standards. IAM Identity Center is used to centrally manage user
          access with Single Sign-On (SSO) and Role-Based Access Control (RBAC),
          and Multi-Factor Authentication (MFA) is enforced across all users.
          In the Audit Account, key AWS security services such as AWS Security
          Hub, Amazon GuardDuty, AWS CloudTrail, and Amazon Inspector are activated
          to provide centralized threat detection and auditing.
          The Log Archive Account is set up as the central logging repository using Amazon
          S3, collecting logs from all accounts in the organization for auditing and
          compliance.
          The Network Account continues to host shared networking services,
          including NAT Gateway, Transit Gateway, and Site-to-Site VPN, which are shared
          with workload accounts.
          This structure ensures centralized, secure, and efficient cloud management using
          AWS Organizations.
          <br /><br />
          <h4>Benefit and Result</h4>
          From the enhancement and improvement of AWS Landing Zone by AWS Control
          Tower, The Bank has met the standardization of compliance and governance
          based on AWS Best Practices. The Bank was able to save up to 80% time for OU
          and AWS Account creation, SCP setup, Logging, IAM Automation & integration as
          well as in AWS Services validation & testing.



        </div>

      </section>
    </>
  )
}

export default AwrapperDanamon
