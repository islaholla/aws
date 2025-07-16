import "./catalog.css";

const Catalog = () => {
  const catalogData = [
    {
      category: "Monitoring & Alerting",
      core: true,
      seHourly: false,
      description:
        "24x7 Real-time monitoring of infrastructure components and alert notifications",
    },
    {
      category: "Self Service Portal",
      core: true,
      seHourly: false,
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

  return (
    <div className="catalog-container">
      <h3 className="catalog-title">Service Catalog</h3>

      <div className="catalog-table-wrapper">
        <table>
          <thead className="catalog-thead">
            <tr>
              <th className="catalog-th">Category</th>
              <th className="catalog-th text-center">CORE</th>
              <th className="catalog-th text-center">SE Hourly</th>
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
    </div>
  );
};

export default Catalog;
