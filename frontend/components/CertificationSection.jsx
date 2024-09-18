import React from "react";

const CertificationsSection = ({ portfolioData }) => {
  return (
    <div className="mb-8">
      <h2 className="quicksand text-2xl font-semibold text-gray-700 mb-4 text-center">
        Certifications
      </h2>
      <div className="space-y-4">
        {portfolioData.certifications.map((cert, index) => {
          // Safely extract logo URL and other properties
          const logoUrl = cert.company?.logo?.com?.linkedin?.common?.VectorImage
            ?.artifacts?.[2]?.rootUrl
            ? `${cert.company.logo.com.linkedin.common.VectorImage.artifacts[2].rootUrl}${cert.company.logo.com.linkedin.common.VectorImage.artifacts[2].fileIdentifyingUrlPathSegment}`
            : "https://via.placeholder.com/150"; // Placeholder image if logo URL is missing

          return (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 shadow-md"
            >
              {/* Certification Logo */}
              {/* <img
                src={logoUrl}
                alt={cert.company?.name || "Certification Logo"}
                className="h-16 w-16 object-cover rounded-full"
              /> */}
              {/* Certification Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {cert.name || "Certification Name"}
                </h3>
                <p className="text-gray-600">
                  {cert.company?.name || "Company Name"}
                </p>
                <p className="text-gray-500">
                  {cert.timePeriod?.startDate?.month}/
                  {cert.timePeriod?.startDate?.year || "Year"}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationsSection;
