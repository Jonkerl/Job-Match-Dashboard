import React, { useState } from "react";
import MatchScore from "../MatchScore";
import JobDetailsModal from "../JobDetailsModal";

const userSkills = ["React", "JavaScript"]; 

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = () => {
    const missingSkills = job.requiredSkills.filter(skill => !userSkills.includes(skill));

    if (missingSkills.length > 0) {
      alert(`You are missing skills: ${missingSkills.join(", ")}. Consider upskilling.`);
    } else {
      alert("Application submitted successfully!");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-sm font-medium">Salary: {job.salary}</p>

      <MatchScore score={job.matchScore} />

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          View Details
        </button>
        <button
          onClick={handleApply}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Apply Now
        </button>
      </div>

      {isModalOpen && <JobDetailsModal job={job} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default JobCard;
