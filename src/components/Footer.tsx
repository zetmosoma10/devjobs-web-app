interface Props {
  position: string | undefined;
}

const Footer = ({ position }: Props) => {
  return (
    <footer className="flex items-center justify-between bg-white mt-12 py-5 px-10">
      <div>
        <p className="font-bold text-xl text-very_dark_blue">{position}</p>
        <small className="text-base text-dark_grey mt-3">So Digital Inc.</small>
      </div>
      <a
        href="#"
        className="font-bold text-white bg-violet py-4 px-6 rounded-[5px]"
      >
        Apply Now
      </a>
    </footer>
  );
};

export default Footer;
