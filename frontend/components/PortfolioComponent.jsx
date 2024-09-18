"use client";
import React, { useEffect } from "react";
import CertificationsSection from "./CertificationSection";
import { usePortfolio } from "../portfolioContext.js";
import LanguagesSection from "./LanguagesSection";
import SkillsSection from "./SkillsSection";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
const PortfolioComponent = () => {
  const { portfolioData } = usePortfolio();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <div className="text-center mt-8 w-full">
          <h1 className="quicksand text-4xl font-bold text-gray-800">
            {portfolioData.firstName.toUpperCase() +
              " " +
              portfolioData.lastName.toUpperCase()}
          </h1>
          <p className="text-[#424242] tracking-wider text-sm">
            {portfolioData.headline}
          </p>
          <p className="mt-3 text-md text-gray-600">{portfolioData.summary}</p>
        </div>

        {/* Education Section */}
        <Education educationData={portfolioData.education} />

        {/* Experience Section */}
        <Experience experienceData={portfolioData.experience} />

        {/* Projects Section */}
        <Projects projects={portfolioData.projects} />

        {/* Skills Section */}
        <SkillsSection skills={portfolioData.skills} />

        {/* Certifications Section */}
        <CertificationsSection portfolioData={portfolioData} />

        {/* Languages Section */}
        <LanguagesSection portfolioData={portfolioData} />
      </div>
    </div>
  );
};

export default PortfolioComponent;
