import "./catalog.css";

const Catalog = () => {
  const catalogData = [
    {
      category: "Real-time Performance & Health Monitoring",
      core: true,
      seHourly: true,
      description:
        "24x7 Real-time monitoring of infrastructure components and alert notifications",
      coreDescription: "",
      seDescription: "with Deep-dive investigation & remediation",
    },
    {
      category: "Self Service Portal",
      core: true,
      seHourly: false,
      description: "Ticket tracking system",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Incident Management & Resolution",
      core: false,
      seHourly: true,
      description: "Handling incidents related to infrastructure components",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Reporting",
      core: true,
      seHourly: true,
      description:
        "Standard reports based on Monitoring native and ticketing summary",
      coreDescription: "STANDARD",
      seDescription: "ANALYSIS AND EVALUATION",
    },
    {
      category: "Change & Release",
      core: false,
      seHourly: true,
      description: "All changes & deployments",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Security Compliance Checks",
      core: false,
      seHourly: true,
      description: "Assessments & recommendation",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Backup & Recovery Oversight",
      core: false,
      seHourly: true,
      description:
        "Backup policy setup, planning & testing, validation result backup and monitoring",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Cost Optimization",
      core: false,
      seHourly: true,
      description: "Optimize simulation, Forecasting, and Cost insight",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Advisory Single Point of Contact",
      core: false,
      seHourly: true,
      description: "Assigned TAM, SDM, CSM, Expert Engineer",
      coreDescription: "",
      seDescription: "",
    },
    {
      category: "Tiering System Pricing Model",
      core: false,
      seHourly: true,
      description:
        "Predictable annual pricing, Tiering System based on Customer needs",
      coreDescription: "Predictable annual pricing",
      seDescription: "Tiering System based on Customer needs",
    },
  ];

  const whyCore = [
    {
      icon: "🚦",
      title: "Real-time Monitoring",
      desc: "Stay informed about the Customer infrastructure's status with 24/7 proactive monitoring and alert notifications, allowing swift awareness and action to act.",
    },
    {
      icon: "📑",
      title: "Essential Reporting",
      desc: "Receive standard reports, ensuring transparency in infrastructure performance, ticket summaries, and resource utilization.",
    },
    {
      icon: "🚩",
      title: "Early Warning System",
      desc: "Immediate alerts for infrastructure anomalies, helping you avoid disruptions and maintain operational stability.",
    },
    {
      icon: "💡",
      title: "Affordable Visibility",
      desc: "Ideal for customers with budget constraints, CORE delivers essential infrastructure monitoring without sacrificing quality and reliability.",
    },
    {
      icon: "📡",
      title: "Reliable Infrastructure Insight",
      desc: "Gain continuous, real-time visibility into your infrastructure, ensuring issues are identified early before impacting your business.",
    },
  ];

  const whySe = [
    {
      icon: "🔧",
      title: "Hands-on Troubleshooting",
      desc: "Access dedicated engineering experts to quickly diagnose, troubleshoot, and resolve complex issues beyond basic alerts.",
    },
    {
      icon: "🎯",
      title: "Flexible Support Model",
      desc: "Adjust engineering support hours monthly based on changing business requirements, ensuring you only pay for what you need.",
    },
    {
      icon: "🚀",
      title: "Expert Advisory",
      desc: "Benefit from highly skilled cloud engineers capable of guiding migrations, optimizations, security enhancements, and technical best practices.",
    },
    {
      icon: "📈",
      title: "Continuous Improvement",
      desc: "Regular comprehensive reports and insights enabling informed decisions for continuous operational and infrastructure improvement.",
    },
    {
      icon: "💳",
      title: "Budget Control & Efficiency",
      desc: "Flexible hourly service tiers empower you to manage and control expenses effectively, aligning service hours precisely with your budget and priorities.",
    },
  ];

  return (
    <div className="catalog-container">
      <h3 className="catalog-title">Service Catalog</h3>
      <div className="intro-section">
        <div className="intro-card">
          <h4>CORE</h4>
          <p>
            CORE (Proactive Monitoring & Alerting) is the foundation of our
            Managed Service Operations, providing real-time 24/7 Proactive
            Monitoring & Alerting services for the Customer's entire cloud
            infrastructure. This service is designed so that every component
            from compute, storage, network, backup, and security posture is
            monitored in real-time through a centralized monitoring system.
          </p>
        </div>
        <div className="intro-card">
          <h4>Service Engineering</h4>
          <p>
            Service Engineering is a flexible, on-demand support model designed
            to complement your Managed Service Operations. Engineering Services
            are designed to complement our CORE Proactive Monitoring & Alerting
            by providing flexible, expert-driven support tailored to your
            priorities. With predictable pricing and a dedicated team of
            certified professionals, this service helps accelerate
            transformation and maintain operational excellence.
          </p>
        </div>
      </div>

      <div className="catalog-table-wrapper">
        <table>
          <thead className="catalog-thead">
            <tr>
              <th className="catalog-th">Category</th>
              <th className="catalog-th text-center">CORE</th>
              <th className="catalog-th text-center">Service Engineering</th>
            </tr>
          </thead>
          <tbody className="catalog-tbody">
            {catalogData.map((item, index) => (
              <tr key={index} className="catalog-tr">
                <td className="catalog-td-category">
                  <div>
                    <div className="catalog-category-name">{item.category}</div>
                    <div className="catalog-category-desc">
                      {item.description}
                    </div>
                  </div>
                </td>
                <td className="catalog-td">
                  <div className="wrap">
                    <span
                      className={`catalog-badge ${
                        item.core ? "catalog-badge-yes" : "catalog-badge-no"
                      }`}
                    >
                      {item.core ? "Yes" : "No"}
                    </span>
                    {item.coreDescription && (
                      <div className="additional-desc core-desc">
                        {item.coreDescription}
                      </div>
                    )}
                  </div>
                </td>
                <td className="catalog-td">
                  <div className="wrap">
                    <div
                      className={`catalog-badge ${
                        item.seHourly ? "catalog-badge-yes" : "catalog-badge-no"
                      }`}
                    >
                      {item.seHourly ? "Yes" : "No"}
                    </div>
                    {item.seDescription && (
                      <div className="additional-desc se-desc">
                        {item.seDescription}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{/* Additional Note */}
      <div className="prerequisite-note">
        <div className="note-icon">⚠️</div>
        <p>
          <strong>Prerequisite:</strong> Customers must subscribe to the{" "}
          <span className="highlight-core">CORE package</span> before accessing
          Service Engineering options.
        </p>
      </div>
      {/* Why CORE */}
      <div className="why-block">
        <h3>Why CORE?</h3>
        <div className="why-list">
          {whyCore.map((item, index) => (
            <div key={index} className="why-item">
              <div className="why-icon">{item.icon}</div>
              <div className="why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Service Engineering */}
      <div className="why-block">
        <h3>Why Service Engineering?</h3>
        <div className="why-list">
          {whySe.map((item, index) => (
            <div key={index} className="why-item">
              <div className="why-icon">{item.icon}</div>
              <div className="why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

{/* Case Study Section */}
<div className="case-study-section">
  <h3 className="case-title">When do I need CORE or Service Engineering?</h3>
  <p className="case-intro">Let’s explore with real-world scenarios:</p>

  {/* CASE 1: CORE */}
  <div className="case-card core-case">
    <div className="case-header">
      <span className="case-badge core">CORE Use Case</span>
      <h4 className="case-subtitle">🚦 Proactive Monitoring for Peace of Mind</h4>
    </div>
    <div className="case-content">
      <p>
        <strong className="case-label">Challenge:</strong>
        <br />
        A retail company managing critical business applications on AWS Cloud frequently faced unnoticed server downtime due to limited in-house monitoring capabilities. They have no dedicated team to constantly monitor infrastructure health, and previously experienced unnoticed downtime impacting business continuity.
      </p>

      <p>
        <strong className="case-label">Solution (CORE):</strong>
        <br />
        Mastersystem’s CORE service was deployed, providing:
        <ul className="case-list">
          <li>24x7 real-time monitoring and alerting for all critical servers.</li>
          <li>Immediate notifications via AWS native services when anomalies occur.</li>
          <li>Monthly standard reports (infrastructure health, resource usage, cost reports, and AWS Ticket summaries).</li>
        </ul>
      </p>

      <p>
        <strong className="case-label">Outcome:</strong>
        <br />
        After deploying Mastersystem’s CORE service, they gained real-time, 24/7 monitoring with instant alerts whenever a problem arose, significantly reducing the risk of unexpected outages. With automatic notifications and clear monthly reports on usage, inventory, and alerts, the customer now enjoys improved infrastructure visibility, reduced downtime, and greater operational confidence—allowing their internal team to remain focused on strategic initiatives instead of routine monitoring.
      </p>
    </div>
  </div>

  {/* CASE 2: SERVICE ENGINEERING */}
  <div className="case-card se-case">
    <div className="case-header">
      <span className="case-badge se">SERVICE ENGINEERING</span>
      <h4 className="case-subtitle">🛠️ Expert Support Exactly When Needed</h4>
    </div>
    <div className="case-content">
      <p>
        <strong className="case-label">Background:</strong>
        <br />
        Following the successful implementation of CORE monitoring, the same retail company experienced ongoing database performance issues that required immediate expert attention beyond standard alerts. They lack internal expertise for deep troubleshooting and database optimization. Without sufficient internal technical expertise, they opted to utilize Mastersystem’s Service Engineering as an add-on.
      </p>

      <p>
        <strong className="case-label">Solution (Service Engineering):</strong>
        <br />
        The customer upgraded by adding Service Engineering to the existing CORE:
        <ul className="case-list">
          <li>Expert engineers quickly responded, conducted a deep-dive root cause analysis, and identified misconfiguration and optimization opportunities.</li>
          <li>Performed immediate incident resolution and infrastructure remediation.</li>
          <li>Implemented proactive database and infrastructure optimization to prevent recurrence.</li>
        </ul>
      </p>

      <p>
        <strong className="case-label">Outcome:</strong>
        <br />
        Within hours, experienced cloud engineers conducted in-depth root-cause analysis, resolved critical issues, and implemented optimized configurations to enhance database performance. As a result, persistent alerts were drastically reduced, overall system reliability increased, and their team received valuable knowledge-sharing from our certified experts. Service Engineering now provides this customer with flexible, hourly-based support whenever complex troubleshooting, optimizations, or expert consultation is required.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Catalog;
