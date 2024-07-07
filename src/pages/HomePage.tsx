import JobCardGrid from "../components/JobCardGrid";
import SearchForm from "../components/SearchForm";

const HomePage = () => {
  return (
    <>
      <div className="max-container absolute left-0 right-0 top-[100px] md:top-[115px]">
        <SearchForm />
      </div>
      <div className="mt-24 pb-8 md:mt-28 lg:mt-36">
        <JobCardGrid />
      </div>
    </>
  );
};

export default HomePage;
