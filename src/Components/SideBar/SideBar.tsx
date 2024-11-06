import React from "react";
import "./SideBar.css";
import Button from "../../BaseComponents/Ui/Button/Button";

interface SidebarProps {
  username: string;
  items: { label: string; link: string }[];
  onLogout?: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ items, onLogout, username }) => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {items.map((item) => (
            <li key={item.label} className="sidebar-item">
              <a href={item.link}>{item.label} </a>
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
      </div>
    </>
  );
};

export default SideBar;
