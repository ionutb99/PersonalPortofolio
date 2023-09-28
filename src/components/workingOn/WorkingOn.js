import React, { useState } from "react";
import "./workingOn.css";
import GithubIcon from "@material-ui/icons/GitHub";
import { SubdirectoryArrowRightOutlined } from "@material-ui/icons";
import { workingProject } from "../../helpers/projectList/projectList";

export const WorkingOn = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const currentProject = isFlipped ? workingProject[1] : workingProject[0];

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="working">
      <h2 className="workingTitle">Currently working on...</h2>
      <span className="workingDesc">
        ~ <b>{currentProject.name} </b> ~ a full stack app ,made in React,
        using mongoDb , HTML, CSS, and authentication tools.
      </span>
      <img
        src={currentProject.img}
        alt="workingImage"
        className={`workingImage ${isFlipped ? "flipped" : ""}`}
        onClick={handleImageClick}
      />
      <span className="workingSpan"> GitHub Repository </span>
      <a
        href={currentProject.github}
        className="workingGithub"
        target="_blank"
        rel="noreferrer"
      >
        <SubdirectoryArrowRightOutlined className="arrowWorkingIcon" />{" "}
        <GithubIcon className="gitHubWorkingIcon" />
      </a>
    </div>
  );
};
