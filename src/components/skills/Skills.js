import React from "react";
import "./skills.css";
import LanguagesImg from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import BackendImg from "../../assets/app-design.png";
import { useNavigate } from "react-router-dom";

export const Skills = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/certifications");
    }, 500);
  };

  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <span className="skillDesc">
        Proficient in both frontend and backend development, with expertise in
        creating responsive, interactive, and efficient web applications.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Front-End</h2>
            <p>ReactJS, HTML, CSS, NPM, BootStrap</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={BackendImg} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Back-End</h2>
            <p>NodeJS, ExpressJS, MongoDB, MySQL</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={LanguagesImg} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Languages</h2>
            <p>JavaScript, HTML, CSS, Java[beginner]</p>
          </div>
        </div>
      </div>
      <button onClick={handleClick} type="button" className="worksBtn">
        Certifications
      </button>
    </section>
  );
};
