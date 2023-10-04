import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";

const Main = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Categories/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
