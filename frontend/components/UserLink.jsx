"use client";
import React, { useState } from "react";

const UserLink = () => {
  const [link, setLink] = useState("");
  const handleformSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    console.log(link);
  };
  return (
    <div className="bg-[#8EACCD] p-12 w-3/4 rounded-lg">
      <form
        className="flex justify-center items-center gap-4 "
        onSubmit={handleformSubmit}
      >
        <input
          type="text"
          className="w-1/2 h-12 rounded-md p-3 ml-2 outline-none"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter your link here"
        />
        <button className="bg-[#405dbb] text-white rounded-md h-12 w-1/4">
          Generate
        </button>
      </form>
      <p className="text-center p-4 text-[#FEF9D9]">
        Transform your LinkedIn into a live, stunning portfolio—automatically
      </p>
    </div>
  );
};

export default UserLink;
