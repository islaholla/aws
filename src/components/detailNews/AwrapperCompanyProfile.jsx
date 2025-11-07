import { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram1 from '../../components/image/Company Profile.png';
import diagram2 from '../../components/image/Infrastruktur IT 2.png';
import diagram3 from '../../components/image/Infrastruktur IT 3.png';
import diagram4 from '../../components/image/Infrastruktur IT 4.png';
import { useLocation } from "react-router-dom";



const AwrapperCompanyProfile = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Evolution of Company Profiles: From Static Documents to Instant Digital Access' />
        <div className=" bg-white">
          <h3>From Static Files to Dynamic Profiles</h3>
          <br />
          A company profile is the first impression of a company. Unfortunately, traditional formats such as PDF or PowerPoint are often inconvenient: the files are too large, the display is not responsive on mobile devices, and they quickly become outdated when there are updates.
          <br /><br />
          As a result, compros, which should be dynamic branding tools, often end up as static documents that quickly become outdated. This is where cloud computing offers a solution. By utilizing Amazon S3, compros that were previously static files can be converted into simple, modern, interactive, and always up-to-date websites. No complicated infrastructure is needed, and there are no huge costs involved. Simply upload the files to the cloud, make a few settings, and your digital compro is ready to use.
          <br /><br />

          <h3>        Why Choose Amazon S3 for Compro Digital?
          </h3>
          <div className="image-diagram">
            <img src={diagram1} alt="" />
          </div>
          <br />
          Amazon Simple Storage Service (S3) is a cloud data storage service used by millions of companies around the world. Many people know it only as a “file storage place,” when in fact S3 has much broader features.
          <br /> <br />
          One of the most relevant features for digital company profiles is Static Website Hosting. With this feature, buckets (storage containers in S3) can function like web servers. HTML files, CSS, images, and even videos uploaded to buckets can be directly displayed as websites that anyone can access.
          <br /> <br />
          Why is S3 suitable for digital company profiles?
          <br /> <br />
          <h4>1.	Cost-effective </h4>
          <ul style={{ paddingLeft: '20px' }}>
            You only pay for storage and Data Transfer Out (DTO). For one digital compro, the cost is often only tens of thousands of rupiah per month.
          </ul>
          <br />
          <h4>2.	Easy to use </h4>
          <ul style={{ paddingLeft: '20px' }}>
            No servers, no complicated installation. Just upload your files, activate hosting, and your compro is online.
          </ul>
          <br />
          <h4>3.	Secure</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Equipped with encryption, access control (IAM), and global security standards compliance.
          </ul>
          <br />
          <h4>4.	Reliable</h4>
          <ul style={{ paddingLeft: '20px' }}>
            AWS guarantees data durability of up to 11 nines (99.999999999%), making data loss virtually impossible.
          </ul>
          <br />
          <h4>5.  Professional</h4>
          <ul style={{ paddingLeft: '20px' }}>
            With a company domain and SSL, compro appears more modern and trustworthy.
          </ul>
          <br />
          With Static Website Hosting on S3, company profiles are no longer just static files, but interactive, easily accessible, and always up-to-date websites.

          <br /> <br />
          <h3>Stages of Compro Digital Implementation in Amazon S3</h3>
          <br />
          Here are practical steps based on official AWS guidelines and best practices commonly used by companies:
          <br /> <br />
          <h4>1.	Content Preparation</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Before touching on the technical side, prepare our compro content. Organize materials such as:
            <li>•	Company profile (vision, mission, brief history).</li>
            <li>•	List of services or flagship products.</li>
            <li>•	Project portfolio with supporting images.</li>
            <li>•	Core team profiles with professional photos.</li>
            <li>•	Company contact details and address.</li>
            <li>•	And/or other content tailored to individual needs.</li>
            All of this material should be created in a web-friendly format: text in HTML, images in JPG/PNG, and videos in MP4. If you are not familiar with HTML, simply use a free or lightweight static website template.
          </ul>
          <br />
          <h4>2.	Create an S3 Bucket</h4>
          <ul style={{ paddingLeft: '20px' }}>
            From the AWS Console, create a new bucket with a unique name (example: compro-our-company). Select the nearest region for faster access and to better reach Indonesian audiences, as follows:
            <li>•	Log in to the AWS Management Console.</li>
            <li>•	Search for and select the S3 service.</li>
            <li>•	Click Create Bucket and give it a unique name, for example, “compro-ourcompanyname”.</li>
            <li>•	Select the region closest to your target audience, for example, Asia Pacific (Jakarta / ap-southeast-3) for faster access for users / audiences from the Indonesian region. </li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html).
          </ul>
          <br />
          <h4>3.	Enable Static Website Hosting</h4>
          <ul style={{ paddingLeft: '20px' }}>
            In the bucket settings, enable Static Website Hosting and set index.html as the default page, following these steps:
            <li>•	Go to the bucket Properties tab.</li>
            <li>•	Enable the Static Website Hosting option.</li>
            <li>•	Enter index.html as the default document.</li>
            This step enables your bucket to function as a web server.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
          </ul>
          <br />
          <h4>4.	Allow Public Access</h4>
          <ul style={{ paddingLeft: '20px' }}>
            By default, S3 buckets are private / cannot be accessed by everyone. To make the website accessible to others, you need to:
            <li>•	Disable Block All Public Access.</li>
            <li>•	Add a Bucket Policy that grants GetObject access to everyone (read-only).</li>
            Note: This policy is not dangerous because it only grants read access, while edit rights remain restricted to AWS account owners.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

          </ul>
          <br />
          <h4>5.	Upload Content</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Upload all files to the bucket and ensure that the file structure is organized neatly, such as Upload all necessary files: index.html, the /images folder for images, /videos for videos.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
          </ul>
          <br />
          <h4>6.	Connect to a Domain (Optional but will look more professional)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            To get a more professional look, we can use a company domain (for example, profile.ourcompanyname.co.id), with:
            <li>•	You need to purchase a domain (if you don't already have one) or you can use an existing domain.</li>
            <li>•	Point your domain or subdomain to your S3 bucket using Amazon Route 53.</li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html).
          </ul>
          <br />
          <h4>7.	Accelerate & Secure Access with CloudFront</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Amazon CloudFront functions as a Content Delivery Network (CDN) which:
            <li>•	With CloudFront, compro websites can be accessed more quickly from all over the world.</li>
            <li>•	CloudFront also enables the use of SSL/TLS, so compro can be accessed with the address “https://”.</li>
            <li>•	This is important so that clients feel secure when opening our links.</li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html).
          </ul>
          <br />
          <h4>8.	Content Optimization & Responsiveness</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Compress images, ensure responsive design for optimal display on desktop and mobile. For added interactivity, include a contact form using AWS Lambda + API Gateway—optional but can boost engagement.
          </ul>
          <br />
          <h4>9.	Share with QR Code</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Once our digital compro has a dedicated domain, the next step is to make it easier to share. It's simple: convert the link https://profile.namaperusahaan-kita.co.id into a QR Code. This QR Code can be printed on business cards, brochures, or even displayed at exhibition booths. That way, potential clients can simply scan the barcode to directly open our digital compro, without having to type in the website address.
          </ul>
          <br /> <br />
          Company profiles are no longer PDF files that quickly become outdated. With Amazon S3, compro becomes a dynamic, cost-effective, and always professional digital face of the company.
          <br /> <br />
          PT Mastersystem Infotama Tbk (MSTI) is ready to help make it happen. Through our 24/7 Managed Service, we assist you from design to implementation, ensuring that cloud solutions—including digital compro—run smoothly and provide real value for your business.

        </div>

      </section>
    </>
  )
}

export default AwrapperCompanyProfile
