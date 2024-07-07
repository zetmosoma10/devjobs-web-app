import { useState } from "react";
import jobDataArr from "../../data.json";
import JobCard from "./JobCard";

const JobCardGrid = () => {
  const [jobData, setjobData] = useState(jobDataArr);

  return (
    <div className="max-container">
      <div className="grid  custome-grid">
        {jobData.map((jobCard) => (
          <JobCard key={jobCard.id} job={jobCard} />
        ))}
      </div>
    </div>
  );
};

export default JobCardGrid;
