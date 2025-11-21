import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

// Use the uploaded screenshot path from this session for the profile photo:
import profilePhoto from "./bg.png";

// Replace these with your actual skill icon files
import figmaIcon from "./figma.png";
import xdIcon from "./experiance.png";
import psIcon from "./ps.png";
import aiIcon from "./generative.png";
import prIcon from "./pr.png";

const AboutSection = () => {
  const skills = [
    { label: "Figma", pct: 100, icon: figmaIcon },
    { label: "Adobe XD", pct: 100, icon: xdIcon },
    { label: "Adobe Photoshop", pct: 85, icon: psIcon },
    { label: "Adobe Illustrator", pct: 60, icon: aiIcon },
    { label: "Adobe Premiere", pct: 70, icon: prIcon },
  ];

  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsInView(true);
      },
      { threshold: 0.25 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // build CSS variables for each ring
  const getRingStyle = (pct) => {
    // clamp to 0..100 then convert to degrees 0..360
    const clamped = Math.max(0, Math.min(100, pct));
    const fillDeg = (clamped / 100) * 360;
    const rotation = -90; // start from top
    // chosen light ash color with alpha:
    const empty = "#D9D9D933"; // the color you requested
    return {
      "--fill-degree": `${fillDeg}deg`,
      "--rotation": `${rotation}deg`,
      "--empty-color": empty
    };
  };

  return (
    <section id="about" className="section about">
      <div className="about-inner">
        <div className="about-photo-wrap">
          <div className="about-ring" aria-hidden />
          <img src={profilePhoto} alt="Profile" className="about-photo" draggable="false" />
        </div>

        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-copy">
            I'm Nibkong Kingsley Ernest, a creative designer and first-class graduate
            of Banking and Finance from the University of Calabar. I'm passionate
            about crafting digital experiences that connect people, ideas, and
            brands. My expertise spans app and web design, logo creation, and modern
            visual communication. I combine analytical thinking from my finance
            background with design creativity to deliver solutions that are both
            strategic and visually engaging. When I'm not designing, I'm exploring
            new trends that inspire innovation and impact.
          </p>

          <a className="btn primary btn-download" href="/resume.pdf" download>
            <span className="btn-icon" aria-hidden>⬇</span>
            Download CV
          </a>
        </div>
      </div>

      <div className={`skills section ${skillsInView ? "skills-visible" : ""}`} ref={skillsRef}>
        <div className="skills-row">
          {skills.map((skill, i) => {
            const ringClass = skill.pct === 100 ? "skill-ring full-ring" : "skill-ring partial-ring";
            return (
              <div className="skill" key={skill.label} data-pct={skill.pct} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="skill-badge">
                  <div className={ringClass} style={getRingStyle(skill.pct)} aria-hidden />
                  <div className="skill-icon-wrapper">
                    <img src={skill.icon} alt={skill.label} className="skill-icon" />
                  </div>
                </div>

                <div className="skill-pct">{skill.pct}%</div>
                <div className="skill-label">{skill.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
