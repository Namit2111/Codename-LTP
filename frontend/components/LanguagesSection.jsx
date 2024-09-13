import React from "react";

const LanguagesSection = ({ portfolioData }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Languages</h2>
      <ul className="space-y-4">
        {portfolioData.languages.map((lang, index) => (
          <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{lang.name}</h3>
            <p className="text-gray-600">
              Proficiency:{" "}
              <span
                className={`font-medium ${getProficiencyClass(
                  lang.proficiency
                )}`}
              >
                {lang.proficiency}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper function to determine the class based on proficiency level
const getProficiencyClass = (proficiency) => {
  switch (proficiency) {
    case "NATIVE_OR_BILINGUAL":
      return "text-green-500";
    case "PROFESSIONAL_WORKING":
      return "text-blue-500";
    case "LIMITED_WORKING":
      return "text-yellow-500";
    case "BASIC":
      return "text-red-500";
    default:
      return "text-gray-600";
  }
};

export default LanguagesSection;
