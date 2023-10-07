import { FaAirbnb } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="">
      <Link to='/' className="flex items-center gap-1 text-[20px] font-semibold text-theme-color">
        <span className="text-4xl"><FaAirbnb></FaAirbnb></span> airbnb
      </Link>
    </div>
  );
};

export default Logo;
