import React, { useState } from "react";
import "./SideBar.css";
import Button from "../../BaseComponents/Ui/Button/Button";

interface Tabs {
  name: string;
  content?: React.ReactNode;
}

interface SidebarProps {
  username: string;
  items: Tabs[];
}

const SideBar: React.FC<SidebarProps> = ({ items, username }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <div className="sidebar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{username}</p>
          <img
            style={{ borderRadius: "100px" }}
            src="https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/64f59ec35154a0229ab89e42_64f21188d4dab2b32b8f3a95_64f20f14a753c1ed93d8ed09_image%252520(12).jpeg"
            alt=""
            width={30}
          />
        </div>
        <ul className="sidebar-list">
          {items.map((item, index) => (
            <li
              key={item.name}
              className="sidebar-item"
              onClick={() => handleTabClick(index)}
            >
              <a>{item.name} </a>
              <img src={`${process.env.PUBLIC_URL}/icons/arrow.png`} alt="" />
            </li>
          ))}
          <li className="sidebar-item-logout">
            <h3>Logout</h3>
            <img
              src={`${process.env.PUBLIC_URL}/icons/log-out.png`}
              width={24}
              alt=""
            />
          </li>
        </ul>
        <div className="tab-content">{items[activeTabIndex].content}</div>
      </div>
    </>
  );
};

export default SideBar;
