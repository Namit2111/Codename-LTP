// context/PortfolioContext.js
'use client';
import { createContext, useState, useContext } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    certifications: [],
    education: [],
    experience: [],
    projects: [],
    honors: [],
    languages: [],
    skills: [],
    summary: "",
  });

  console.log("Received data:", portfolioData); // Print the data received

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
