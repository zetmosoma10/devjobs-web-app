import { useParams } from "react-router-dom";
import jobDataArr from "../../data.json";
import { useEffect, useState } from "react";

import JobType from "../entities/jobType";
import Footer from "../components/Footer";
import LogoBadge from "../components/LogoBadge";

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
      <div
        className="absolute left-0 right-0 top-[100px] md:top-[115px] flex flex-col  
        items-center pt-12 pb-8 md:pt-0 md:pb-0  md:flex-row  md:justify-between md:pr-10 bg-white dark:bg-very_dark_blue max-container 
        space-y-6 md:space-y-0 rounded-md overflow-hidden"
      >
        <div className="md:flex md:items-center md:space-x-10 ">
          <div
            style={{ backgroundColor: jobDetail?.logoBackground }}
            className="hidden md:flex md:items-center md:justify-center md:h-[140px] md:p-3"
          >
            <img className="w-[140px]" src={jobDetail?.logo} alt="" />
          </div>
          <div className="md:hidden mt-3 absolute top-[-5px] left-[45%] ">
            <LogoBadge
              logo={jobDetail?.logo}
              logoBackground={jobDetail?.logoBackground}
            />
          </div>

          <div className="text-center md:text-left mt-6 md:mt-0">
            <p className="text-2xl font-bold text-very_dark_blue dark:text-white">
              {jobDetail?.company}
            </p>
            <a href="#" className="text-base text-grey mt-3">
              {`${jobDetail?.company.toLowerCase()}.com`}
            </a>
          </div>
        </div>
        <a
          href="#"
          className="font-bold text-violet dark:text-white bg-light_grey dark:bg-[#c9c9c9] dark:bg-opacity-25
           py-4 px-6 rounded-[5px]"
        >
          Company Site
        </a>
      </div>
      <div className="max-container mt-[300px] md:mt-[250px]">
        <article className="bg-white dark:bg-very_dark_blue text-dark_grey p-12 rounded-md mt-52 md:mt-32 ">
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <span>
                {jobDetail?.postedAt} . {jobDetail?.contract}
              </span>
              <h2 className="font-bold text-3xl text-very_dark_blue dark:text-white mt-2 mb-3">
                {jobDetail?.position}
              </h2>
              <small className="font-bold text-sm text-violet">
                {jobDetail?.location}
              </small>
            </div>
            <a
              href="#"
              className="font-bold w-full mt-12 md:mt-0 md:w-auto text-center text-nowrap text-white bg-violet py-4 px-6 rounded-[5px]"
            >
              Apply Now
            </a>
          </header>
          <div className="mt-10">
            <p>{jobDetail?.description}</p>
            <div className="mt-10">
              <h3 className="font-bold text-xl text-very_dark_blue dark:text-white mb-7">
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
              <h3 className="font-bold text-xl text-very_dark_blue dark:text-white mb-6">
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
      <Footer position={jobDetail?.position} />
    </div>
  );
};

export default JobDetailsPage;
