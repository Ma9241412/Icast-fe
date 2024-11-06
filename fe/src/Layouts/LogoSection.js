import React from "react";
import { Image, Space, Grid } from "antd";
import logo from "../Assets/logoicast.png";
import theme from '../Assets/theme.png';
import suparco from '../Assets/suparco.png';
import ist from '../Assets/ist-logo.png';

const { useBreakpoint } = Grid;

const LogoSection = () => {
  const screens = useBreakpoint();
  const logoWidth = screens.lg ? 200 : screens.md ? 250 : 150;

  return (
    <div className="logo-section">
      {/* Left Logo - ICAST */}
      <div className="logo-left">
        <Image
          preview={false}
          src={logo}
          width={screens.xs ? 150 : logoWidth}
          alt="ICAST Logo"
          className="logo-image"
        />
      </div>
      
      {/* Center Theme Image */}
      {screens.md && (
        <div className="logo-center">
          <Image src={theme} alt="Theme Logo" style={{ maxWidth: 400 }} />
        </div>
      )}

      {/* Right Logos - Suparco and IST */}
      {screens.md && (
        <div className="logo-right">
          <Space size="small">
            <Image width={100} src={suparco} alt="Suparco Logo" />
            <Image width={150} src={ist} alt="IST Logo" />
          </Space>
        </div>
      )}
    </div>
  );
};

export default LogoSection;
