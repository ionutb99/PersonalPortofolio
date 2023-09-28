import React, { useEffect, useState } from "react";
import "./ScrollTimeline.css";

const ScrollTimeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      const newScrollPercentage = (scrollY / (pageHeight - windowHeight)) * 100;
      const clampedPercentage = Math.min(100, Math.max(0, newScrollPercentage));

      setScrollPercentage(clampedPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-timeline">
      <div
        className="timeline-fill"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollTimeline;
