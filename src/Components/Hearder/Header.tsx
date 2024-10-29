import React from "react";
import "./Header.css";


interface HeaderProps {
    children: React.ReactNode;
  }


const Header:React.FC<HeaderProps> = ({children}) => {
  return (
    <header className="header">
      <div className="cercel-top-right"></div>
      {children}
      <div className="cercel-bottom-left"></div>
    </header>
  );
};

export default Header;
