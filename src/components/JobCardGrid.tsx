import { Link } from "react-router-dom";
import JobType from "../entities/jobType";
import JobCard from "./JobCard";

interface Props {
  jobsData: JobType[];
}

const JobCardGrid = ({ jobsData }: Props) => {
  return (
    <div className="max-container">
      <div className="grid  custome-grid">
        {jobsData.length > 0 ? (
          jobsData.map((jobCard) => (
            <Link to={`jobDetails/${jobCard.id}`} key={jobCard.id}>
              <JobCard {...jobCard} />
            </Link>
          ))
        ) : (
          <h3 className="text-4xl font-semibold text-very_dark_blue dark:text-white my-8">
            No jobs found.
          </h3>
        )}
      </div>
    </div>
  );
};

export default JobCardGrid;
