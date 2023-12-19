import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="education_container">
      {/* <h1 className='header_education'>Education</h1> */}

      <div className="education">
        <h2>AIT-tr.de GmbH</h2>
        <p>Field of study: QA Engineer and Frontend developer</p>
        <p>Start date: July 2023</p>
        <p>End date: March 2024</p>
      </div>

      <div className="education">
        <h2>Euro-Schulen</h2>
        <p>Field of study: German language B2</p>
        <p>Start date: September 2023</p>
        <p>End date: March 2024</p>
      </div>

      <div className="education">
        <h2>Volkshochschule</h2>
        <p>Field of study: German language B1 </p>
        <p>Start date: November 2022</p>
        <p>End date: May 2023</p>
      </div>

      <div className="education">
        <h2>Hillel IT School</h2>
        <p>Field of study: QA Manual </p>
        <p>Start date: May 2020</p>
        <p>End date: December 2020</p>
      </div>

      <div className="education">
        <h2>Odessa National Medical University</h2>
        <p>Field of study: Obstetrics and Gynecology </p>
        <p>Start date: September 2011</p>
        <p>End date: July 2020</p>
      </div>
    </div>
  );
};

export default Education;
