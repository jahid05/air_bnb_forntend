import avatar from "../../assets/avatar.png";
import { FaBars } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const Avatar = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        {/* <button className="text-[14px] font-semibold text-gray-700 hover:bg-gray-100 duration-200 p-3 rounded-full">Airbnb your home</button> */}
        <button className="text-xl text-gray-500 hover:bg-gray-100 duration-200 p-3 rounded-full">
          <TbWorld></TbWorld>
        </button>
        <div className="flex items-center border border-gray-300 hover:shadow-md duration-200 p-1 rounded-full">
          <span className="text-md text-gray-500 px-3">
            <FaBars />
          </span>
          <img className="w-[32px] opacity-60" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
