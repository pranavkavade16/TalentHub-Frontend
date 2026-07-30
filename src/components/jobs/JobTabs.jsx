const tabs = [
  {
    key: "details",
    label: "Job Details",
  },
  {
    key: "company",
    label: "About Company",
  },
  {
    key: "similar",
    label: "Similar Jobs",
  },
];

const JobTabs = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-tabs mb-4">
      {tabs.map((tab) => (
        <li key={tab.key} className="nav-item">
          <button
            className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default JobTabs;
