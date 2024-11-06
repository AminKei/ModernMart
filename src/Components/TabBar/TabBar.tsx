import React, { useState } from "react";
import "./TabBar.css"; // Import the CSS file

interface Tab {
  name: string;
  content?: React.ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
}

const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div className="tab-bar">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-button ${index === activeTabIndex ? "active" : ""}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default TabBar;
