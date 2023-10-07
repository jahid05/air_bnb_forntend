/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import querySearch from "query-string"
const CategoryBox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  
  const handleCategory = () =>{
    let currentQuery = {}
    if (params) {
      currentQuery = querySearch.parse(params.toString)
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    }
    const url = querySearch.stringifyUrl(
      {
        url: '/',
        query : updatedQuery,
      },
      {
        skipNull: true
      }
    )
    navigate(url)
  }

  return (
    <div onClick={handleCategory} className="flex flex-col items-center justify-center gap-2 p-3 pb-2 border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-gray-500 transition duration-200 cursor-pointer">
      <Icon size={26} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryBox;
