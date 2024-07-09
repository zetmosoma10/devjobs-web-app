import { ChangeEvent, FormEvent, useState } from "react";

import { IoSearchSharp } from "react-icons/io5";
import { RiFilter2Fill } from "react-icons/ri";
import Form from "../entities/formDataType";
import MobileForm from "./MobileForm";
import { FaLocationDot } from "react-icons/fa6";
import Input from "./Input";

interface Props {
  formData: Form;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ formData, handleChange, handleSubmit }: Props) => {
  const [showMobileForm, setShowMobileForm] = useState(false);
  const setOnMobileForm = () => {
    setShowMobileForm(true);
  };

  const setOffMobileForm = () => {
    setShowMobileForm(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setOffMobileForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex items-center justify-between mb-8 bg-white dark:bg-very_dark_blue pl-6  md:pl-8 pr-4 py-4 
          rounded-md "
    >
      <div className="flex items-center space-x-4 w-full ">
        <div className="hidden md:block ">
          <IoSearchSharp color="#5964E0" size="20px" />
        </div>
        <Input
          name="title"
          value={formData.title}
          placeholder="Filter by title, companies, expertise…"
          handleChange={handleChange}
        />
      </div>
      <div className="  hidden md:flex md:items-center space-x-4 w-full ml-3">
        <FaLocationDot color="#5964E0" size="20px" />
        <Input
          name="location"
          value={formData.location}
          placeholder="Filter by location…"
          handleChange={handleChange}
        />
      </div>
      <div className=" hidden md:flex md:items-center space-x-4 text-nowrap mx-5">
        <input
          className="bg-grey w-6 h-6 caret-violet dark:bg-dark_grey"
          type="checkbox"
          checked={formData.isFullTime}
          onChange={handleChange}
          name="isFullTime"
          id="checkbox"
        />
        <label
          className="text-base text-very_dark_blue dark:text-white font-bold"
          htmlFor="checkbox"
        >
          Full Time
        </label>
      </div>
      <div
        onClick={setOnMobileForm}
        className="md:hidden text-dark_grey dark:text-white cursor-pointer mx-5"
      >
        <RiFilter2Fill size="20px" />
      </div>
      {/* -------------------------- */}
      {showMobileForm && (
        <MobileForm
          location={formData.location}
          isFullTime={formData.isFullTime}
          handleChange={handleChange}
        />
      )}
      {/* ------------------------------------ */}
      <button className="hidden md:block bg-violet hover:bg-opacity-75 text-white font-bold rounded-md text-base py-4 px-9 ">
        Search
      </button>
      <button className="md:hidden bg-violet hover:bg-opacity-75 text-white font-bold rounded-md text-base p-[14px]">
        <IoSearchSharp size="20px" color="#fff" />
      </button>
    </form>
  );
};

export default SearchForm;
