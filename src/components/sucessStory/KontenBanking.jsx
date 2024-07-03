import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram from '../../components/image/diagram.png';
import { useLocation } from "react-router-dom";



const KontenBanking = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Migrating Banking Support System to the Cloud' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          The Company is Indonesia&#39;s one of the largest bank by assets. The
          Company, which is majority-owned by Its Holding Group, is the one of the
          largest payment bank in terms of transaction value under the Indonesian
          Central Securities Depository. The Company engage with Mastersystem
          Infotama a major IT consultancy and an Amazon Web Services (AWS)
          Partner, to help prepare the infrastructure to migrate workload of their
          Corporate Banking Application, namely Next Generation Business
          application (NGB) from the on premises monolith environment to the cloud
          microservices environment, in this case AWS, while still heeding and
          implementing best practices guided by the AWS Well Architected
          Framework, in all its aspects., while maintaining application performance
          and availability at the lowest possible cost.          <br /> <br />
          <h4>        Customer Challenges
          </h4>

          As a main part of The Company Strategy for going forward, The Company
          need to build initiatives to utilize Capital Allocation Towards Most Profitable
          Segments, by the means of expanding its CASA Franchises, Accelerate
          new customer acquisition, increase fee income contribution, balanced risk
          culture, as well as continue leading operational efficiency, The Company
          needed to invest in new technology to support its objectives. Cloud
          infrastructure is the main choice to support the above targets, because it
          can be an answer and solution for innovation and appropriate technology
          investment in accordance with The Company commitment. Cloud solutions
          answer several innovation needs such as, Migration to microservices
          architecture, more stable and resilient infrastructure, better scalability and
          flexibility, increase adoption and integration to new technologies, and faster
          time to market. AWS Cloud was chosen due to its global footprint, including
          the AWS Jakarta Region that enabling The Company to use the same
          solution and comply with Indonesian Financial Regulations. The Company
          is working with Mastersystem Infotama as an AWS Advanced Consulting
          Partner, which is expected to help financial services organizations to
          migrate to AWS Cloud.          <br /> <br />
          <h4>Solution</h4>
          Mastersystem Infotama and Amazon AWS Indonesia planned and
          architected a new cloud-based environment for The Company.
          Mastersystem Infotama help The Company to re-platform on-premises
          monolith application platform to AWS managed service Red Hat Openshift
          Service on AWS (ROSA) , a microservices container platform on AWS
          Cloud. In its implementation, Red Hat Openshift Service on AWS (ROSA)
          continues to heed the pillars of the AWS Well-Architected Framework, such
          as to design the ROSA environment using the best practices for
          infrastructure security, reliability, operational excellence, performance, cost
          optimization, and sustainability.

        </div>

      </section>
    </>
  )
}

export default KontenBanking
