interface Props {
  logo: string | undefined;
  logoBackground: string | undefined;
}

const LogoBadge = ({ logo, logoBackground }: Props) => {
  return (
    <div
      style={{ backgroundColor: logoBackground }}
      className="flex items-center justify-center  w-12 h-12 rounded-2xl "
    >
      <img src={logo} alt="" />
    </div>
  );
};

export default LogoBadge;
