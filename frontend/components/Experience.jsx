const Experience = ({ experienceData = [] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
      {experienceData.length > 0 ? (
        experienceData.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <div className="flex items-center mb-4">
              {exp?.companyLogoUrl && (
                <img
                  src={exp.companyLogoUrl}
                  alt={`${exp?.companyName || "Company"} Logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {exp?.title || "Title not available"}
                </h3>
                <p className="text-gray-600">
                  {exp?.companyName || "Company name not available"}
                </p>
                <p className="text-gray-500">
                  {exp?.timePeriod?.startDate?.month || "N/A"}/
                  {exp?.timePeriod?.startDate?.year || "N/A"} -{" "}
                  {exp?.timePeriod?.endDate?.month || "Present"}/
                  {exp?.timePeriod?.endDate?.year || "Present"}
                </p>
              </div>
            </div>
            {exp?.description && (
              <p className="text-gray-600 mt-2">{exp.description}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No experience data available.</p>
      )}
    </div>
  );
};
export default Experience;
