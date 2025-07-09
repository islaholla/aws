import "./mso.css";
import BreakSection from "../../common/break/Section";
import Hero from "./hero/Hero";
import image from "../../../components/image/test2.jpg";

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
      <div className="">
        <div className="paragraf bg-white">
          <div className="benefits-section">
            <h3>8 Points of Benefit</h3>
            <div className="benefits-grid">
              {[
                "Incident Management and Resolution, Ensure rapid detection and resolution of operational incidents through standardized processes, minimizing disruption to your business operations and reducing downtime.",
                "Real-time Performance and Health Monitoring, Continuously monitor the health, performance, and availability of your cloud infrastructure with 24/7 visibility and proactive alerts to identify issues before they impact end users.",
                "Backup and Recovery Oversight, Manage and monitor backup policies, retention settings, and recovery procedures to safeguard critical data and ensure fast restoration in the event of a failure or loss.",
                "Security Compliance Checks, Conduct regular security posture assessments and compliance reviews to align your environment with industry standards, regulations, and best practices.",
                "Cost Optimization, Analyze usage patterns, identify cost-saving opportunities, and provide actionable recommendations to maximize the efficiency of your cloud spend and forecast budget trends.",
                "Single Point of Contact, Offer a centralized communication channel for all operational needs, allowing you to escalate issues, request support, or track progress without engaging multiple teams.",
                "IT Service Management, Leverage structured processes for incident, problem, change, and service request management.",
                "Comprehensive Reporting and Insight, Provide detailed reports and dashboards with operational metrics, performance trends, and compliance status to support data-driven decision-making and continuous improvement.",
              ].map((text, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-number">{index + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
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
