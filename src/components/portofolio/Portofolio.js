import React from "react";
import "./portofolio.css";
import { projects } from "../../helpers/projectList/projectList";
import { Typography } from "@mui/material";
import GithubIcon from "@material-ui/icons/GitHub";
import { useState } from "react";
import { SubdirectoryArrowRightOutlined } from "@material-ui/icons";

export const Portofolio = () => {
  const [flippedImages, setFlippedImages] = useState([]);

  const toggleFlip = (index) => {
    const newFlippedImages = [...flippedImages];
    newFlippedImages[index] = !newFlippedImages[index];
    setFlippedImages(newFlippedImages);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portofolio</h2>
      <span className="worksDesc">
        Here are some personal projects I have worked on over time.
      </span>
      <div className="worksImgs">
        <>
          {projects.map((project, index) => (
            <div
              className={`worksImgContainer ${
                flippedImages[index] ? "flipped" : ""
              }`}
              key={index}
            >
              <div className="worksImgFront" onClick={() => toggleFlip(index)}>
                <img src={project.img} alt="" />
              </div>
              <div className="worksImgBack" onClick={() => toggleFlip(index)}>
                <ul className="ul">
                  <li key={index}>
                    <Typography variant="h4" className="skillsName">
                      {project.name}
                    </Typography>
                    <Typography variant="body1" className="skillsText">
                      {" "}
                      <b>Skills:</b> {project.skills}
                    </Typography>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SubdirectoryArrowRightOutlined className="rightIcon" />
                      <GithubIcon className="githubIcon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </>
      </div>

      <button className="worksBtn">See More</button>
    </section>
  );
};
