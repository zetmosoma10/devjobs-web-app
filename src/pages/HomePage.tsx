import JobCardGrid from "../components/JobCardGrid";
import SearchForm from "../components/SearchForm";
import allJobsData from "../data.json";
import { useState } from "react";
import Form from "../entities/formDataType";

const HomePage = () => {
  const [formData, setFormData] = useState<Form>({
    title: "",
    location: "",
    isFullTime: false,
  });
  const [filteredJobs, setFilteredJobs] = useState(allJobsData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filtered = allJobsData.filter((job) => {
      const matchesCompany = job.company
        .toLowerCase()
        .includes(formData.title.toLowerCase());
      const matchesTitle = job.position
        .toLowerCase()
        .includes(formData.title.toLowerCase());
      const matchesExpertise = job.requirements.items.some((item) =>
        item.toLowerCase().includes(formData.title.toLowerCase())
      );
      const matchesLocation = job.location
        .toLowerCase()
        .includes(formData.location.toLowerCase());
      const matchesContract = formData.isFullTime
        ? job.contract === "Full Time"
        : true;

      return (
        (matchesCompany || matchesTitle || matchesExpertise) &&
        matchesLocation &&
        matchesContract
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className="max-container absolute left-0 right-0 top-[100px] md:top-[115px]">
        <SearchForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="mt-24 pb-8 md:mt-28 lg:mt-36">
        <JobCardGrid jobsData={filteredJobs} />
      </div>
    </>
  );
};

export default HomePage;
