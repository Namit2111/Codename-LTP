
const Education = ({ educationData }) => {
  return (
    <div className="mt-8 min-h-dvh">
      <h2 className="quicksand text-2xl font-semibold text-gray-700 mb-4 text-center">
        Education
      </h2>
      {educationData.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
          <h3 className="text-lg font-bold text-gray-800">{edu.degreeName}</h3>
          <p className="text-gray-600">{edu.fieldOfStudy}</p>
          <p className="text-gray-600">{edu.schoolName}</p>

          {edu.timePeriod && (
            <p className="text-gray-500">
              {edu.timePeriod.startDate.month}/{edu.timePeriod.startDate.year} -{" "}
              {edu.timePeriod.endDate.month}/{edu.timePeriod.endDate.year}
            </p>
          )}

          <p className="text-gray-500">Grade: {edu.grade}</p>
          {/* {edu.school?.logoUrl && (
            <img
              src={edu.school.logoUrl}
              alt={`${edu.schoolName} Logo`}
              className="w-16 h-16 object-contain mt-2"
            />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Education;
