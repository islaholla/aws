import "./mso.css";
import BreakSection from "../../common/break/Section";
import Hero from "./hero/Hero";
import image from "../../../components/image/test2.jpg";
import { msoBenefits } from "./benefit"; // sesuaikan path


const Mso = () => {
  return (
    <div className="aws-page">
      <Hero />
      <div className="paragraf">
        <BreakSection judul="Empower Your Cloud Operations with Mastersystem MSO" />
      </div>
      <div className="empower-section">
        <div className="container">
          <div className="empower-content">
            <div className="empower-text">
              <p>
                Running workloads in the cloud requires more than just
                infrastructure—it demands proactive monitoring, intelligent
                automation, and reliable support to keep your business moving.
              </p>
              <p>
                Mastersystem’s Managed Service Operations (MSO) combines 24/7
                real-time monitoring, intelligent alerting, and on-demand
                engineering services so you can operate confidently on AWS.
              </p>
              <p>
                From performance optimization and cost management to
                troubleshooting and transformation, MSO helps you simplify
                operations and accelerate your cloud journey.
              </p>
            </div>
            <div className="empower-image">
              {/* Nanti kamu bisa ganti src dengan path gambar yang sesuai */}
              <img src={image} alt="Cloud Operations Illustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="paragraf">
        <BreakSection judul="Why Choose Mastersystem MSO?" />
      </div>
    
      <div className="benefits-section">
        <h3>8 Points of Benefit</h3>
        <div className="benefits-grid">
          {msoBenefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-number">{index + 1}</span>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section">
        <div className="cta-content">
          <h2>
            Discover how Mastersystem MSO can help you gain peace of mind and
            accelerate your AWS success.
          </h2>
          <p>
            With proven frameworks and certified expertise, your cloud
            operations are in safe hands.
          </p>
        </div>
        <a href="/contact" className="cta-button">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Mso;
