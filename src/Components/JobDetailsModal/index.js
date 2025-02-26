import React from "react";

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.company} - {job.location}</p>
        <p className="text-sm font-medium">Salary: {job.salary}</p>
        <p className="mt-2"><strong>Required Skills:</strong> {job.requiredSkills.join(", ")}</p>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
