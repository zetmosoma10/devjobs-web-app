import { ChangeEvent } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Input from "./Input";

interface Props {
  location: string;
  isFullTime: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MobileForm = ({ location, isFullTime, handleChange }: Props) => {
  return (
    <div
      className="absolute shadow-2xl top-[100px] left-0 right-0 z-20 bg-white dark:bg-very_dark_blue 
        rounded-md p-6 space-y-6 md:hidden mx-auto"
    >
      <div className="flex items-center space-x-4 w-full pb-6 border-b dark:border-b-dark_grey">
        <FaLocationDot color="#5964E0" size="20px" />
        <Input
          name="location"
          value={location}
          placeholder="Filter by location…"
          handleChange={handleChange}
        />
      </div>
      <div className="flex items-center space-x-4 text-nowrap ">
        <input
          className="bg-grey w-6 h-6 caret-violet dark:bg-dark_grey"
          type="checkbox"
          checked={isFullTime}
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
      <button className=" bg-violet hover:bg-opacity-75 w-full text-white font-bold rounded-md text-base py-4 px-9 ">
        Search
      </button>
    </div>
  );
};

export default MobileForm;
