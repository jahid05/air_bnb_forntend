import { FaAirbnb } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="">
      <button className="flex items-center gap-1 text-[20px] font-semibold text-theme-color">
        <span className="text-4xl"><FaAirbnb></FaAirbnb></span> airbnb
      </button>
    </div>
  );
};

export default Logo;
