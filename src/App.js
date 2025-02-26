import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "./Components/JobList";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        
        const response = await axios.get("/data/jobs.json"); 
        // console.log("Fetched Jobs:", response.data); 
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">AI-Powered Job Match Dashboard</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
