import { JobType } from "../entities/jobType";

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
    <article className="relative bg-white rounded-md px-8 pb-8 pt-12 m-2 hover:shadow-xl transition-shadow duration-150 focus:shadow-xl cursor-pointer ">
      <div
        style={{ backgroundColor: logoBackground }}
        className="absolute top-[-25px] left-[32px] flex items-center justify-center  w-12 h-12 rounded-2xl "
      >
        <img src={logo} alt="" />
      </div>
      <div>
        <span className="text-base text-grey ">
          {postedAt} . {contract}
        </span>
        <h2 className="text-xl text-very_dark_blue py-4">{position}</h2>
        <span className="text-base text-grey ">{company}</span>
        <footer className="pt-11">
          <small className="text-sm font-bold text-violet">{location}</small>
        </footer>
      </div>
    </article>
  );
};

export default JobCard;
