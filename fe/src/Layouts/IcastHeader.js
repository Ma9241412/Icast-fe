import React from "react";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import "../Styles/IcaseHeaderStyles.css";

const IcastHeader = () => {
  return (
    <header className="header">
      <div className="header-content">
        <LogoSection />
        <MenuSection />
      </div>
    </header>
  );
};

export default IcastHeader;
