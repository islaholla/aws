import "./catalog.css";

const Catalog = () => {
  const catalogData = [
    {
      category: "Monitoring & Alerting",
      core: true,
      seHourly: true,
      description:
        "24x7 Real-time monitoring of infrastructure components and alert notifications",
    },
    {
      category: "Self Service Portal",
      core: true,
      seHourly: true,
      description: "Ticket Tracking System",
    },
    {
      category: "Incident & Problem",
      core: true,
      seHourly: true,
      description: "Handling incidents related to infrastructure components",
    },
    {
      category: "Reporting",
      core: true,
      seHourly: true,
      description:
        "Standard reports based on Monitoring native and ticketing summary",
    },
    {
      category: "Change & Release",
      core: false,
      seHourly: true,
      description: "All changes & deployments",
    },
    {
      category: "Security & Compliance",
      core: false,
      seHourly: true,
      description: "Assessments & enforcement",
    },
    {
      category: "Backup",
      core: false,
      seHourly: true,
      description: "Backup policy setup, DR planning & testing",
    },
    {
      category: "Cost Optimization",
      core: false,
      seHourly: true,
      description: "Cost simulation, forecasting, and implementation",
    },
    {
      category: "Advisory",
      core: false,
      seHourly: true,
      description: "Assigned TAM, SDM, CSM, Expert Engineer",
    },
    {
      category: "Tiering System",
      core: false,
      seHourly: true,
      description: "Redeemable hourly for scope services",
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
            CORE (Proactive Monitoring & Alerting) is the foundation of our Managed Service Operations, providing real-time of 24/7 Proactive Monitoring & Alerting services for the Customer's entire cloud infrastructure. This service is designed so that every component from compute, storage, network, backup and security posture is monitored in real-time through a centralized monitoring system.
          </p>
        </div>
        <div className="intro-card">
          <h4>Service Engineering</h4>
          <p>
            Service Engineering is a flexible, on-demand support model designed to complement your Managed Service Operations. Engineering Services are designed to complement our CORE Proactive Monitoring & Alerting by providing flexible, expert-driven support tailored to your priorities. With predictable pricing and a dedicated team of certified professionals, this service helps accelerate transformation and maintain operational excellence.
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
                  </div>
                </td>
                <td className="catalog-td">
                  <div className="wrap">
                    <span
                      className={`catalog-badge ${
                        item.seHourly ? "catalog-badge-yes" : "catalog-badge-no"
                      }`}
                    >
                      {item.seHourly ? "Yes" : "No"}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>

      {/* section */}
      <div >
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
      </div>
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
    </div>
  );
};

export default Catalog;
