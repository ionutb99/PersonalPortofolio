import React from "react";
import "./intro.css";
import bg from "../../assets/image22.png";
import ResumePDF from "../../assets/CV.pdf";
import { CloudDownload } from "@material-ui/icons";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ionut</span> <br />
          Frontend Developer
        </span>
        <p className="introPara">
          Ionut, a 23-year-old novice frontend developer. With a passion for
          crafting <br /> visually appealing web interfaces, he's diving into
          HTML, CSS, and JavaScript.
        </p>
        <a
          href={ResumePDF}
          download="IonutBuzila-Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            <b>Resume</b>
            <br />
            <CloudDownload />
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
