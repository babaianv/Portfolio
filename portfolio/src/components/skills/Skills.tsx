import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills_container">
      
        <div className="tech_skill skill_category">
          <h2 className="header_skills">Tech-skills:</h2>
          <p className="list">
            • Testing Types: System Integration Testing, API Testing, Regression
            Testing, Functional Testing, UI Testing, Localization Testing,
            Cross-Browser Testing <br />
            • Test Documentation: Test Plan, Test Cases, Test Suite, Checklists,
            Coverage Matrix, Bug Reports, Enhancement <br />
            • Testing Software: <br />- Proficient in using testing and project
            management tools, including JIRA, TestRail, Redmine. <br /> - Experience
            with Selenium for web application testing. <br /> - Proficient in using
            Postman for API testing. <br /> - Familiarity with Appium for mobile
            application testing. <br />
            • Programming Skills (Intermediate Level): HTML, CSS, Java,
            JavaScript, React, TypeScript, Node.js <br />
            • Tools and Technologies: Salesforce, Chrome DevTools, Git and GitHub, Mockito
            for Java testing, and MongoDB. <br />
            • Database: Experience working with MySQL, SQL
          </p>
        </div>
      
      
        <div className="management skill_category">
          <h2 className="header_skills">Management:</h2>
          <p className="list">
            I have over a year of project management experience. My
            responsibilities included studying documentation, holding meetings
            with the business regarding project timelines, preparing
            documentation for testing, and providing daily reports.
          </p>
          <p className="list">
            <br />
            •SCRUM <br />
            •AGILE <br />
            •Project Planning <br />
            •Risk Management
            </p>
        </div>
     
        <div className="soft_skills skill_category">
          <h2 className="header_skills">Soft skills:</h2>
          <p className="list"> <br />
          •Adaptability <br />
          •Attention to Detail <br />
          •Team Collaboration <br />
          •Time Management <br />
          •Leadership <br />
          •Critical Thinking <br />
          •Self-Motivation
          </p>
        </div>

        <div className="language skill_category">
          <h2 className="header_skills">Languages:</h2>
          <p className="list"> <br />
          •English: Professional working proficiency <br />
          •German: Limited working proficiency  <br />
          •Romanian: Limited working proficiency <br />
          •Ukrainian: Native or bilingual proficiencyNative <br />
          •Russian: Native or bilingual proficiencyNative <br />
          </p>
        </div>
     
    </div>
  );
};

export default Skills;
