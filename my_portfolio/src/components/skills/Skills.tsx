import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills_container">
      <div className="tech_skill skill_category">
        <h2 className="header_skills">Tech-skills:</h2>
        <ul className="list">
          <li>
            Testing Types: System Integration Testing, API Testing, Regression
            Testing, Functional Testing, UI Testing, Localization Testing,
            Cross-Browser Testing
          </li>
          <li>
            Test Documentation: Test Plan, Test Cases, Test Suite, Checklists,
            Coverage Matrix, Bug Reports, Enhancement
          </li>
          <li>
            Testing Software:
            <p>
              - Proficient in using testing and project management tools,
              including JIRA, TestRail, Redmine.
            </p>
            <p>- Experience with Selenium for web application testing.</p>
            <p>- Proficient in using Postman for API testing.</p>
            <p>- Familiarity with Appium for mobile application testing.</p>
          </li>
          <li>
            Programming Skills (Intermediate Level): HTML, CSS, Java,
            JavaScript, React, TypeScript, Node.js
          </li>
          <li>
            Tools and Technologies: Salesforce, Chrome DevTools, Git and GitHub,
            Mockito for Java testing, and MongoDB.
          </li>
          <li>Database: Experience working with MySQL, SQL</li>
        </ul>
      </div>

      <div className="management skill_category">
        <h2 className="header_skills">Management:</h2>
        <p className="list">
          I have over a year of project management experience. My
          responsibilities included studying documentation, holding meetings
          with the business regarding project timelines, preparing documentation
          for testing, and providing daily reports.
        </p>
        <ul className="list">
          <li>SCRUM </li>
          <li>AGILE </li>
          <li>Project Planning </li>
          <li>Risk Management </li>
        </ul>
      </div>

      <div className="soft_skills skill_category">
        <h2 className="header_skills">Soft skills:</h2>
        <ul className="list">
          <li>Adaptability </li>
          <li>AGILE </li>
          <li>Attention to Detail </li>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Leadership </li>
          <li>Critical Thinking </li>
          <li>Self-Motivation </li>
        </ul>
      </div>

      <div className="language skill_category">
        <h2 className="header_skills">Languages:</h2>
        <ul className="list">
          <li>English: Professional working proficiency</li>
          <li>German: Limited working proficiency</li>
          <li>Romanian: Limited working proficiency</li>
          <li>Ukrainian: Native or bilingual proficiencyNative</li>
          <li>Russian: Native or bilingual proficiencyNative</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
