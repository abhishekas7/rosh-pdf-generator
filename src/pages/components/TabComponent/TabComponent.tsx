import React, { useState } from 'react';

const TabComponent = ({ tabs="", activeTab="", tabBgColor="", onTabChange="", tabClass="", labelClass="" , activeTabClass ="" }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab || 0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="text-center justify-center items-center flex flex-col">
      <ul className={`flex ${tabBgColor} mb-[15px]`}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${tabClass}  ${index === selectedTab ? `${activeTabClass} active` : '' } ${labelClass}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default TabComponent;