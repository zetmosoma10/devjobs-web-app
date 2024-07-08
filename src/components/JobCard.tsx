import { JobType } from "../entities/jobType";
import LogoBadge from "./LogoBadge";

const JobCard = ({
  postedAt,
  contract,
  position,
  company,
  location,
  logo,
  logoBackground,
}: JobType) => {
  return (
    <article className="relative bg-white dark:bg-very_dark_blue rounded-md px-8 pb-8 pt-12 m-2 hover:scale-105 transition-all duration-100 focus:scale-105 cursor-pointer ">
      <div className="absolute top-[-25px] left-[32px] ">
        <LogoBadge logo={logo} logoBackground={logoBackground} />
      </div>
      <div>
        <span className="text-base text-grey ">
          {postedAt} . {contract}
        </span>
        <h2 className="text-xl text-very_dark_blue dark:text-white py-4">
          {position}
        </h2>
        <span className="text-base text-grey ">{company}</span>
        <footer className="pt-11">
          <small className="text-sm font-bold text-violet">{location}</small>
        </footer>
      </div>
    </article>
  );
};

export default JobCard;
