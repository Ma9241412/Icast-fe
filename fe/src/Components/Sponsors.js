import React from "react";
import { Typography, Image } from "antd";
import { Link } from "react-router-dom";

import img from "../Assets/BARIA.jpg";
import img1 from "../Assets/HEC.jpg";
import img2 from "../Assets/IEEE.jpg";
import img3 from "../Assets/ISNET.jpg";
import img4 from "../Assets/NCGSA.jpg";
import img5 from "../Assets/NPU.jpg";
import img6 from "../Assets/PSF.jpg";
import img7 from "../Assets/SGAC.jpg";
import img8 from "../Assets/Icesco.jpg";
import img9 from "../Assets/Mino-Space.png";
import img10 from "../Assets/apsco.png";
import img11 from "../Assets/tsa.png";
import img12 from "../Assets/azercosmos-logo-0.png";
import img13 from "../Assets/keo-scientific-1200x630-1.jpg";
import img14 from "../Assets/uraan.jpg";



import "../Styles/SponsorStyles.css";

const { Title } = Typography;

const sponsors = [
  { name: "HEC", logo: img1, link: "https://www.hec.gov.pk/" },
  { name: "NCGSA", logo: img4, link: "https://ncgsa.org.pk/" },
  { name: "IEEE", logo: img2, link: "https://www.ieee.org/" }, 
  { name: "ISNET", logo: img3, link: "https://isnet.org.pk" },
  { name: "ICESCO", logo: img8, link: "https://icesco.org/en/" },
  { name: "BRAIA", logo: img, link: "https://braia.nwpu.edu.cn/english/Home.htm" },
  { name: "MINOSPACE", logo: img9, link: "https://www.minospace.cn/" },
  { name: "PSF", logo: img6, link: "https://psf.gov.pk/" },
  { name: "URAAN PAKISTAN", logo: img14, link: "https://uraanpakistan.pk/" },
  { name: "APSCO", logo: img10, link: "http://www.apsco.int/" }, 
  { name:"TSA", logo: img11, link: "https://tua.gov.tr/en/" }, 
  { name:"AZERCOSMOS", logo: img12, link: "https://azercosmos.az/en" }, 
  { name: "SGAC", logo: img7, link: "https://spacegeneration.org/" },
  { name: "NPU", logo: img5, link: "https://en.nwpu.edu.cn/" },
  { name: "KEO SCIENTIFIC", logo: img13, link: "https://keoscientific.com/" },
  // { name: "ISA", logo: img15, link: "https://keoscientific.com/" },
];


const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <Title
        style={{
          fontSize: "46px",
          fontWeight: "bold",
          textAlign: "left",
          color: "white",
          fontFamily: "Inter, sans-serif",
          padding: "0 50px",
          marginBottom: "40px",
        }}
      >
        Partners & Sponsors
      </Title>

      <div className="sponsor-marquee">
        <div className="sponsor-track">
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <div className="sponsor-item" key={i}>
              <Link to={sponsor.link} target="_blank" rel="noopener noreferrer">
                <div className="sponsor-logo-circle">
                  <Image
                    preview={false}
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </div>
              </Link>
              <div className="sponsor-name">{sponsor.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
