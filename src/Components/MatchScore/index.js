import React from "react";

const MatchScore = ({ score }) => {
  let bgColor = "bg-red-500"; 
  if (score >= 80) bgColor = "bg-green-500";
  else if (score >= 50) bgColor = "bg-yellow-500";

  return (
    <div className={`text-white text-sm py-1 px-3 rounded-full ${bgColor} w-max mt-2`}>
      Match Score: {score}%
    </div>
  );
};

export default MatchScore;
