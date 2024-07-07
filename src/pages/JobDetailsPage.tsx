import { useParams } from "react-router-dom";
import jobDataArr from "../../data.json";
import { useEffect, useState } from "react";

import { JobType } from "../entities/jobType";

const JobDetailsPage = () => {
  const [jobDetail, setJobDetail] = useState<JobType>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const job = jobDataArr.find((job) => job.id === parseInt(id));
      setJobDetail(job);
    }
  }, [id]);

  return (
    <div>
      <div className="max-container">
        <article className="bg-white text-dark_grey p-12 rounded-md mt-52 md:mt-32 ">
          <header className="flex items-center justify-between">
            <div>
              <span>
                {jobDetail?.postedAt} . {jobDetail?.contract}
              </span>
              <h2 className="font-bold text-3xl text-very_dark_blue mt-2 mb-3">
                {jobDetail?.position}
              </h2>
              <small className="font-bold text-sm text-violet">
                {jobDetail?.location}
              </small>
            </div>
            <a
              href="#"
              className="font-bold text-white bg-violet py-4 px-6 rounded-[5px]"
            >
              Apply Now
            </a>
          </header>
          <div className="mt-10">
            <p>{jobDetail?.description}</p>
            <div className="mt-10">
              <h3 className="font-bold text-xl text-very_dark_blue mb-7">
                Description
              </h3>
              <p>{jobDetail?.requirements.content}</p>
              <ul className="list-disc list-inside mt-6 space-y-2 ">
                {jobDetail?.requirements.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl text-very_dark_blue mb-6">
                Requirements
              </h3>
              <p>{jobDetail?.role.content}</p>
              <ol className="list-decimal list-inside mt-6 space-y-2">
                {jobDetail?.role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>
      <footer className="flex items-center justify-between bg-white mt-12 py-5 px-10">
        <div>
          <p className="font-bold text-xl text-very_dark_blue">
            {jobDetail?.position}
          </p>
          <small className="text-base text-dark_grey mt-3">
            So Digital Inc.
          </small>
        </div>
        <a
          href="#"
          className="font-bold text-white bg-violet py-4 px-6 rounded-[5px]"
        >
          Apply Now
        </a>
      </footer>
    </div>
  );
};

export default JobDetailsPage;
