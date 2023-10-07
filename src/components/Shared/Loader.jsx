import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <div className="absolute z-10 top-1/2 left-1/2">
        <PuffLoader color="#FF385C" />
      </div>
    </div>
  );
};

export default Loader;
