import React from "react";
import "./experience.css";

const Experience = () => {
  const abSoftFileLink =
    "https://drive.google.com/file/d/1zMvOgTo7I7EvVthiGs_EWFTkxJxAE-7X/view?usp=drive_link";
  
    return (
    <div className="experience_container">
      <div className="exp_section">
        <h2>AB Soft</h2>
        <p>Position: QA Manual</p>
        <p>Period: April 2021 - February 2023</p>
        <p>Duration: 1 year and 11 months</p>
        
        <p>
          <a className="linkfile"
            href={abSoftFileLink}
            target="_black"
            rel="noopener noreferrer"
            download 
          >Recommendation Letter</a>
           {' '} &#11123;
        </p>
        
      </div>

      <div className="exp_section">
        <h2>SMILEFOOD</h2>
        <p>Position: Manager of Sales</p>
        <p>Period: April 2019 - February 2021</p>
        <p>Duration: 1 year and 11 months </p>
      </div>

      <div className="exp_section">
        <h2>Odesa Maternity hospital 5</h2>
        <p>Position: Doctor Assistant</p>
        <p>Period: August 2017 - July 2020</p>
        <p>Duration: 3 years</p>
      </div>
    </div>
  );
};

export default Experience;
