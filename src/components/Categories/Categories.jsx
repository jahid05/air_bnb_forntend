import Container from "../Container/Container";
import { GiIsland, GiWindmill } from "react-icons/gi";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import FiltersModal from "../FiltersModal/FiltersModal";

const Categories = () => {
  const categories = [
    {
      label: "Beach",
      icon: TbBeach,
      description: "This property is close to the beach!",
    },
    {
      label: "Windmills",
      icon: GiWindmill,
      description: "This property is has windmills!",
    },
    {
      label: "Modern",
      icon: MdOutlineVilla,
      description: "This property is modern!",
    },
    {
      label: "Countryside",
      icon: TbMountain,
      description: "This property is in the countryside!",
    },
    {
      label: "Pools",
      icon: TbPool,
      description: "This is property has a beautiful pool!",
    },
    {
      label: "Islands",
      icon: GiIsland,
      description: "This property is on an island!",
    },
  ];
  return (
    <Container>
      <div className="flex justify-between items-center pt-24 pb-4 overflow-x-auto">
        {/*=================================Categories area=================================*/}
        <div className="mx-auto flex gap-10">
          {categories.map((category) => (
            <CategoryBox
              className=""
              key={category.label}
              label={category.label}
              icon={category.icon}
            />
          ))}
        </div>
        {/*=================================Filters area=================================*/}
        <FiltersModal/>
      </div>
    </Container>
  );
};

export default Categories;
