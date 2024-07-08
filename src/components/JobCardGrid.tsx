import { useState } from "react";
import jobDataArr from "../../data.json";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";

const JobCardGrid = () => {
  const [jobData, setjobData] = useState(jobDataArr);

  return (
    <div className="max-container">
      <div className="grid  custome-grid">
        {jobData.map((jobCard) => (
          <Link to={`jobDetails/${jobCard.id}`} key={jobCard.id}>
            <JobCard {...jobCard} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobCardGrid;
