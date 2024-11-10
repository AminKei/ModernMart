import React, { useState } from "react";
import "./TabBar.css"; // Import the CSS file

type Display = "grid" | "flex";

interface Tab {
  name: string;
  content?: React.ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
  ThemSho?: Display;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, ThemSho }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div className="tab-bar" style={{ display: ThemSho }}>
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
