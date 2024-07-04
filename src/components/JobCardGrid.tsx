import { useState } from "react";
import jobDataArr from "../../data.json";
import JobCard from "./JobCard";

const JobCardGrid = () => {
  const [jobData, setjobData] = useState(jobDataArr);

  return (
    <div className="grid max-container custome-grid">
      {jobData.map((jobCard) => (
        <JobCard key={jobCard.id} job={jobCard} />
      ))}
    </div>
  );
};

export default JobCardGrid;
