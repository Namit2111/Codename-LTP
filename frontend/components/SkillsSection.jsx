// Skills.js
import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
