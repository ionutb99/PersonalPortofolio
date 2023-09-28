import React from "react";
import "./certifications.css";
import logo from "../../assets/logo-page.png";
import backHome from "../../assets/backHome.png";
import JavaScript from "../../assets/JavaScript.PNG";
import Java1 from "../../assets/UltimateJava1.PNG";
import Java2 from "../../assets/UltimateJava2.PNG";
import { useNavigate } from "react-router-dom";

export const Certifications = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/PersonalPortofolio");
    }, 500);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenuCertifications">~ My Certifications ~</div>
        <img
          onClick={handleClickHome}
          src={backHome}
          alt="Logo2"
          className="logo2"
        ></img>
      </nav>
      <div className="certifications">
        <img src={JavaScript} alt="" />
        <img src={Java1} alt="" />
        <img src={Java2} alt="" />
      </div>
    </div>
  );
};
