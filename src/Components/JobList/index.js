import React from "react";
import JobCard from "../JobCard";

const JobList = ({ jobs }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-center col-span-2">Loading jobs...</p>
      )}
    </div>
  );
};

export default JobList;
