import React from "react";
import "./aboutMe.css";
import me from "../../images/Photo_main.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe_container">
      <div className="imgContainer">
        <img className="imgMe" src={me} alt="imgMe" />
      </div>
      <div className="textContainer">
        <p className="aboutMeInfo">
          Hello again, dear reader. <br />
          In this section, I want to share a bit about my journey of development
          in the field of Information Technology. <br />
          In just 6 months of embarking on my journey in the field of
          Information Technology, I have swiftly progressed from a QA Trainee to
          the esteemed role of QA Project Lead. <br />
          My dedication and proficiency were acknowledged when I received
          nominations as one of the top-performing employees in the company
          during both halves of the year. As a QA Project Lead, I have
          consistently demonstrated my ability to successfully test and oversee
          large-scale projects, ensuring the delivery of high-quality products.{" "}
          <br /> I am driven by a passion for hard work, a commitment to
          excellence, and a thirst for continuous learning and growth. <br />
          Currently, I am actively exploring new opportunities to further apply
          and expand my skills in the IT industry while concurrently enhancing
          my qualifications through QA Automation training at the German school
          AIT.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
