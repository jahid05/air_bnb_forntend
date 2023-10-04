import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div>
            <div className="h-12 flex items-center rounded-full border text-gray-600 text-[14px] font-semibold hover:shadow-md duration-200">
                <button className="px-5">Anywhere</button>
                <button className="px-5 border-s border-gray-300">Any week</button>
                <button className="px-5 border-s border-gray-300 font-normal">Add guests</button>
                <button className="p-2 me-2 rounded-full bg-theme-color text-gray-100 text-lg"><FaSearch></FaSearch></button>
            </div>
        </div>
    );
};

export default Search;