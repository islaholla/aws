import { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram1 from '../../components/image/Aws Blog - AWS MSP (2).jpeg';
import { useLocation } from "react-router-dom";



const AwrapperAwsMsp = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Level Up! Mastersystem Unlocks AWS Managed Service Provider Recognition' />
        <div className=" bg-white">
          <div className="image-diagram">
            <img src={diagram1} alt="" />
          </div>
          <br />
          PT Mastersystem Infotama Tbk is proud to announce our latest achievement as an official AWS Managed Service Provider (MSP). This achievement marks a major milestone in our cloud journey, as well as proof of Mastersystem's ability to deliver AWS Managed Services that prioritize automation, operational excellence, and continuous innovation.
          <br /><br />
          This recognition is awarded by Amazon Web Services (AWS) to partners who have met all AWS assessment standards to ensure reliable, results-oriented service quality. This designation is not merely a certification, but rather a form of recognition from AWS to partners who have demonstrated excellence and consistency in terms of: 

          <br />
          <ul style={{ paddingLeft: '20px' }}>
          <li>1.	In-depth technical expertise and success in supporting customers on AWS</li>
          <li>2.	Strong operational governance and security</li>
          <li>3.	Commitment to continuous improvement through DevOps and automation</li>
          <li>4.	Strong collaboration with AWS to help customers grow safely and efficiently</li>
          </ul>
          <br />
          This success is the result of the hard work and extraordinary dedication of the Mastersystem Cloud & Managed Service team, under the leadership of Joko Gunawan and Raymon Citra as Board of Directors of PT Mastersystem Infotama Tbk, as well as the full support of customers and the AWS Partner team.
          <br />
          As part of the AWS Partner Network, Mastersystem will continue to expand its contribution in helping various organizations accelerate their cloud transformation with trust, speed, and agility.

        </div>

      </section>
    </>
  )
}

export default AwrapperAwsMsp
