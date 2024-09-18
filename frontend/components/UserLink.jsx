"use client";
import React, { useState } from "react";
import { usePortfolio } from "../portfolioContext.js";
import PortfolioComponent from "./PortfolioComponent";
import { useRouter } from "next/navigation";
const UserLink = () => {
  const { portfolioData, setPortfolioData } = usePortfolio();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [link, setLink] = useState("");
  const handleformSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/linkedin/get-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: link }),
        }
      );
      const data = await response.json();
      setLoading(false);
      setPortfolioData(data);
      console.log(data);
      if (portfolioData) {
        router.push("/portfolio");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(link);
  };

  return (
    <div className="bg-[#8EACCD] p-12 w-11/12 lg:w-3/4 rounded-lg mt-8 flex flex-col justify-center  shadow shadow-xl">
      <form
        className="p-2 flex justify-center lg:flex-row flex-col items-center gap-4"
        onSubmit={handleformSubmit}
      >
        <input
          type="text"
          className="w-full lg:w-1/2 h-12 rounded-md p-3 ml-2 outline-none"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter your link here"
        />
        <button className="bg-[#405dbb] hover:bg-[#2e4387] text-white rounded-md h-12 w-1/2 lg:w-1/4">
          {!loading ? "Generate" : "Generating..."}
        </button>
      </form>
      <p className="text-center p-4 text-[#FEF9D9]">
        Transform your LinkedIn into a live, stunning portfolio—automatically
      </p>
      {/* <PortfolioComponent/> */}
    </div>
  );
};

export default UserLink;
