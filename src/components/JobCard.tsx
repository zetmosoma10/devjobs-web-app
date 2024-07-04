import scootLogo from "../assets/logos/scoot.svg";

const JobCard = () => {
  return (
    <article className="relative bg-white rounded-md px-8 pb-8 pt-12">
      <div className="absolute top-[-25px] left-[32px] flex items-center justify-center bg-red-600 w-12 h-12 rounded-2xl ">
        <img src={scootLogo} alt="" />
      </div>
      <div>
        <span className="text-base text-grey ">5h ago . Full Time</span>
        <h2 className="text-xl text-very_dark_blue py-4">
          Senior Software Engineer
        </h2>
        <span className="text-base text-grey ">Scoot</span>
        <footer className="pt-11">
          <small className="text-sm font-bold text-violet">South Africa</small>
        </footer>
      </div>
    </article>
  );
};

export default JobCard;
