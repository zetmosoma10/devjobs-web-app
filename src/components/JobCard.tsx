interface JobType {
  company: string;
  contract: string;
  location: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
}

interface Props {
  job: JobType;
}

const JobCard = ({ job }: Props) => {
  return (
    <article className="relative bg-white rounded-md px-8 pb-8 pt-12 m-2 hover:shadow-xl transition-shadow duration-150 focus:shadow-xl cursor-pointer ">
      <div
        className={`absolute top-[-25px] left-[32px] flex items-center justify-center bg-red-400 w-12 h-12 rounded-2xl `}
      ></div>
      <div>
        <span className="text-base text-grey ">
          {job.postedAt} . {job.contract}
        </span>
        <h2 className="text-xl text-very_dark_blue py-4">{job.position}</h2>
        <span className="text-base text-grey ">{job.company}</span>
        <footer className="pt-11">
          <small className="text-sm font-bold text-violet">
            {job.location}
          </small>
        </footer>
      </div>
    </article>
  );
};

export default JobCard;
