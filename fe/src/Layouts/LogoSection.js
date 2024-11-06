import React from "react";
import { Image, Space, Grid } from "antd";
import logo from "../Assets/logoicast.svg";
import theme from '../Assets/theme.svg';
import suparco from '../Assets/suparco.png';
import ist from '../Assets/ist-logo.png';
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const LogoSection = () => {
  const screens = useBreakpoint();
  const logoWidth = screens.lg ? 150 : screens.md ? 250 : 150;

  return (
    <div className="logo-section">
      {/* Left Logo - ICAST */}
      <div className="logo-left">
      <Link to="/">
  <Image
    preview={false}
    src={logo}
    width={screens.xs ? 150 : logoWidth}
    alt="ICAST Logo"
    className="logo-image"
  />
</Link>
      </div>
      
      {/* Center Theme Image */}
      {screens.md && (
        <div className="logo-center">
          <Image width={350} preview={false} src={theme}  alt="Theme Logo"  />
        </div>
      )}

      {/* Right Logos - Suparco and IST */}
      {screens.md && (
        <div className="logo-right">
          <Space size="small">
          <Link to="https://suparco.gov.pk/">
          <Image preview={false} width={80} src={suparco} alt="Suparco Logo" />
          </Link>
          <Link to="https://www.ist.edu.pk/">
          <Image preview={false}  width={110}  src={ist} alt="IST Logo" />

          </Link>
          </Space>
        </div>
      )}
    </div>
  );
};

export default LogoSection;
