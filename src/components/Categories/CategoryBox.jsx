/* eslint-disable react/prop-types */

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div
      className="flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        pb-2
        border-b-2
        border-transparent
        text-gray-500
        hover:border-b-2
        hover:border-gray-500
        transition
        duration-200
        cursor-pointer"
    >
      <Icon size={26} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryBox;
