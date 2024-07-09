import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, handleChange, placeholder, value }: Props) => {
  return (
    <input
      className="font-base dark:bg-very_dark_blue caret-violet md:border-r dark:md:border-r-dark_grey pr-2 md:py-5
                pr-3 text-very_dark_blue dark:text-white w-full outline-none  placeholder:text-base placeholder:text-grey"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
    />
  );
};

export default Input;
