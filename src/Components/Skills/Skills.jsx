import React from "react";
import "./Skills.css";
import Project2 from "../../assets/Profile2.jpg";

const Skills = () => {
  return (
    <div className="skills" id='about'>
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-section">
        <div className="skills-left">
          <img src={Project2} alt="" />
        </div>
        <div className="skills-right">
          <div className="skills-para">
            <p>
              With solid foundation in frontend technologies like HTML, CSS,
              Javascript and React.js, I craft engaging and responsive user
              interfaces that deliver seamless experiences across devices.
            </p>
            <p>
              Leveraging the power of Tailwind CSS, I build custom,
              utility-first designs that blend efficiency with attractive
              designs. Whether it's building components or designing layouts
              that adapt to any screen my skills ensure pixel-perfect execution
            </p>
          </div>
          <div className="skills-bar">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="skill">
              <p>Tailwind</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="skills-achievement">
        <div className="achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>80+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>50+</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
