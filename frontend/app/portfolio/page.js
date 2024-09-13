"use client";
import React from "react";
import { PortfolioProvider } from "./../../portfolioContext";
import PortfolioComponent from "./../../components/PortfolioComponent";
const page = () => {
  return (
    <div>
      {/* <PortfolioProvider> */}
      <PortfolioComponent />
      {/* </PortfolioProvider> */}
    </div>
  );
};

export default page;
