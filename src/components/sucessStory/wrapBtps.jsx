import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import { useLocation } from "react-router-dom";



const WrapBtps = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Awan Datawarehouse Migration' />
        <div className=" bg-white">
          <h4>Executive Summary</h4>
          PT Bank BTPN Syariah, need to modernize their current data warehouse
          system. They choose AWS as their new data warehouse platform due to it’s
          resilience, scalability and agility that help PT Bank BTPN syariah launch a
          better service dan operational agility to help their customers.
          <br /> <br />
          <h4>        Case Study
          </h4>
          PT Bank BTPN Syariah, currently use AWAN DWH which host current ETL
          and analytic which help them to gain more insight about their customer.
          By moving their current data warehouse to AWS, they gain better speed,
          agility, resilience for their data.
          Before moving to AWS, for on-premises environment, their AWAN data
          warehouse infrastructures had a lot of servers, storages, networks devices,
          etc. This creates more hidden costs that uncountable during operational.
          Furthermore, their data warehouse has a lot of duplication and
          unnecessary redundancy which add burden to the IT departments to
          manage all the infrastructures.
          The existing workloads ranging from servers, applications, and databases
          are not scalable and had a lot of manual redundancy that makes a lot of
          difficulties to manage and control since the data processing process is very
          fragmented and scattered on silo, from Operational Data Stores, DORA,
          and COMIS. Due to this environment, it takes hours to stage the data after
          it got extracted from the batching process. It goes from one application to
          the other and goes to another application which causes delay and time lag
          in the processing scenarios. For instance, the starting in the data source,
          the core banking data goes into ETL or data processing application and
          then goes to the data staging in the Operational Data Stores and Data
          Warehouse application. After that, it goes through Data Mart application
          that consists of a number application such as system data marts, user data
          marts, and downstream data marts which creates another delay. After it
          goes to the data mart, it goes to another BI, upstream, and downstream
          application which takes time to process all of the data.
          So with those pain-points in mind, BTPN Syariah engage with
          Mastersystem Infotama as AWS Advanced Consulting Partner, with the
          expertise in both cloud and on-premises datacenter to help with the
          solutions.
          <br /> <br />
          <h4>Solution</h4>
          Mastersystem Infotama and AWS Indonesia engaged, planned, and
          architected a new cloud-based environment for BTPN Syariah AWAN DWH.
          The new Data Preprocessing and Processing using serverless services that
          comprises AWS Glue, Step Function, and AWS Lambda. The new data
          processing platform will cover the 3 stages layer, ODS, DORA, and COMIS
          that does not need to manage clusters. After it successfully processed, the
          data will go to the Data Warehouse Services which is Amazon Redshift.
          <br /> <br />
          <h4>Result and Benefits</h4>
          BTPNS can accelerate their data processing faster from the 3 stages layer
          and reduce the processing time significantly to 30% reduction rate and able
          to load all of the staged or processed data cleanly in the new Data
          Warehouse and Analytics Platform.
          <br /><br />
          <h4>Next Step</h4>
          BTPNS is planning to extend their data warehouse platform into a richer
          data lake house architecture in which it incorporates business intelligence,
          Machine Learning, big data processing, database processing inside a unified
          data lake platform that will modernize and differentiate BTPNS from their
          other competitors as one of the most advanced digital banking services in
          Indonesia.
          Mastersystem and BTPNS will continue working together to provide
          professional class AWS Services. Enhanced Customer Experience and
          accelerating Performance Excellency which is critical to customer overall
          success.ss.


        </div>

      </section>
    </>
  )
}

export default WrapBtps
