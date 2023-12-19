import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainP from "./pages/MainP";
import EducationP from "./pages/EducationP";
import ExperienceP from "./pages/ExperienceP";
import SkillsP from "./pages/SkillsP";
import ContactP from "./pages/ContactP";
import AboutMeP from "./pages/AboutMeP";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainP />} />
          <Route path="/about_me" element={<AboutMeP />} />
          <Route path="/education" element={<EducationP />} />
          <Route path="/experience" element={<ExperienceP />} />
          <Route path="/skills" element={<SkillsP />} />
          <Route path="/Contact" element={<ContactP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
