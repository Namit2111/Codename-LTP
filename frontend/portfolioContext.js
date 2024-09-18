// context/PortfolioContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("portfolioData");
      return savedData
        ? JSON.parse(savedData)
        : {
            certifications: [],
            education: [],
            experience: [],
            projects: [],
            honors: [],
            languages: [],
            skills: [],
            summary: "",
          };
    } else {
      return {
        certifications: [],
        education: [],
        experience: [],
        projects: [],
        honors: [],
        languages: [],
        skills: [],
        summary: "",
      };
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    }
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
