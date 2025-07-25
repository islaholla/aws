import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/Diagram BSI.png';
import { useLocation } from "react-router-dom";



const AwrapperTelecom = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='AWS Managed Service Operations for Telecomunication Company' />
        <div className=" bg-white">
          <h3>Executive Summary</h3>
          This case study explores the successful digital transformation of a leading telecommunications provider in Indonesia through the implementation of AWS Managed Services. Driven by the need for innovation, the client sought a cloud-based solution to modernize its IT operations. As an AWS Managed Service Provider (MSP), we delivered a comprehensive infrastructure optimization, cost optimization and security enhancements. By leveraging AWS technologies, the client has positioned itself for sustained growth, innovation, and enhanced service delivery in Indonesia’s competitive telecommunications landscape.

          <br /> <br />
          <h3>        Managed Services Solution
          </h3>
          The client adopted Mastersystem Managed Service Operations (MSO) with the following key implementations:
          <br />
          <h4>1. IT Operations Management.</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Used AWS Lambda to automate routine tasks and reduce IT workload.</li>
            <li>• Leveraged AWS Terraform for automated infrastructure provisioning and scaling.</li>
          </ul>
          <br />
          <h4>2. Cost Optimization with AWS Savings Plans and Reserved Instances</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Adopted AWS Savings Plans and Reserved Instances (RIs) to reduce compute costs for long-term workloads.</li>
            <li>• Integrated 3rd party FinOps tools such as Datadog Cloud Cost Management to provides visibility, tracking and forecasting on AWS cost usage.</li>
          </ul>
          <br />
          <h4>3. Backup and Disaster Recovery Enhancement</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Conducted backup restore operations to validate disaster recovery readiness. This activity is carried out once a month.</li>
          </ul>
          <br />
          <h4>4. Security and Compliance Strengthening</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Leveraged AWS GuardDuty and AWS Security Hub to fortify the client’s cybersecurity posture and protect against evolving threats.</li>
            <li>• Ensured regulatory compliance through the implementation of AWS Identity and Access Management (IAM) policies, AWS CloudTrail, and AWS IAM Access Analyzer for meticulous auditing and logging of activities.</li>
          </ul>
          <br />
          <h4>5. Service Availability and Monitoring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Deployed Amazon CloudWatch Dashboards to provide real-time monitoring and insights into system performance.</li>
            <li>• Implemented Amazon CloudWatch Alarms to trigger automated responses and notify IT teams of potential issues using Amazon SNS.</li>
            <li>• Innovation related to data analytics enablement by deploying AWS Lambda to monitor the size of Hbase regions table sizes and visualize it on AWS CloudWatch</li>
          </ul>

          <br /> <br />
          <h3>Result and Benefits</h3>
          By utilizing AWS infrastructure as a core foundation, the company can efficiently develop and deploy new applications while dynamically scaling workloads to accommodate fluctuating resource demands. This strategy enhances resilience, strengthens security, and improves performance while optimizing costs, ensuring that critical financial applications remain highly available and operationally efficient.
          <br />
          The managed service solution delivered measurable improvements, including:
          <ul style={{ paddingLeft: '20px' }}>
            <li>• Improved system uptime: Minimized system downtime through proactive monitoring and timely issue resolution, greatly improve service availability rate and reduce MTTR and MTBR. </li>
            <li>• Reduction in cloud costs: Optimized cloud spending through workload optimization and solution re-architecture with up to 30% cost reduction.</li>
            <li>• Faster service deployment: Infrastructure provisioning time was reduced from days to minutes with Infrastructure as Code and automated workflow</li>
            <li>• Enhanced security: Strengthened the security posture with continuous vulnerability assessments, automated patch management, and robust access controls, ensuring compliance with industry standards and safeguarding critical data, resulting in a 10% improvement in security score.</li>
            <li>• Sustainability initiatives: Fostered environmentally sustainable practices by optimizing resource usage, reducing the number of workloads, and transitioning to greener, Graviton-based instances, leveraging green cloud solutions to minimize the carbon footprint, resulting up to 50% reduction in carbon emissions.</li>
          </ul>

          <br /><br />
          <h3>Conclusion</h3>
          Through strategic collaboration with an AWS-focused MSP, the telecom provider successfully transformed its cloud operations, significantly reduced costs, improved security, and enhanced service delivery. The implementation of a fully managed AWS environment enabled the company to streamline its IT operations, focus on innovation, and maintain a competitive edge in the dynamic telecommunications sector. This case study highlights the effectiveness of leveraging AWS cloud solutions and expert MSP services to drive digital transformation in the telecom industry.


        </div>

      </section>
    </>
  )
}

export default AwrapperTelecom
