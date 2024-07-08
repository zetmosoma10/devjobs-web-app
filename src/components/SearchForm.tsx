import { RiFilter2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form
      className="flex items-center justify-between mb-8 bg-white dark:bg-very_dark_blue pl-6  md:pl-8 pr-4 py-4 
         space-x-7  rounded-md "
    >
      <div className="flex items-center space-x-4 w-full">
        <div className="hidden md:block">
          <IoSearchSharp color="#5964E0" size="20px" />
        </div>
        <input
          className="font-base dark:bg-very_dark_blue caret-violet md:border-r dark:md:border-r-dark_grey pr-2 md:py-5 text-very_dark_blue dark:text-white w-full outline-none  placeholder:text-base placeholder:text-grey"
          placeholder="Filter by title, companies, expertise…"
          type="text"
        />
      </div>
      <div className="  hidden md:flex md:items-center space-x-4 w-full ">
        <FaLocationDot color="#5964E0" size="20px" />
        <input
          className="font-base dark:bg-very_dark_blue w-full caret-violet md:border-r dark:md:border-r-dark_grey pr-2 md:py-5 text-very_dark_blue dark:text-white outline-none placeholder:text-base placeholder:text-grey"
          placeholder="Filter by location…"
          type="text"
        />
      </div>
      <div className=" hidden md:flex md:items-center space-x-4 text-nowrap ">
        <input
          className="bg-grey w-6 h-6 caret-violet dark:bg-dark_grey"
          type="checkbox"
          name=""
          id="checkbox"
        />
        <label
          className="text-base text-very_dark_blue dark:text-white font-bold"
          htmlFor="checkbox"
        >
          Full Time
        </label>
      </div>
      <div className="md:hidden text-dark_grey cursor-pointer">
        <RiFilter2Fill size="20px" />
      </div>
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
