import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "./FiltersTab.css";
const FiltersModal = () => {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="text-[14px] flex gap-2 border py-3 px-4 rounded-2xl hover:shadow-md duration-200"
      >
        <span className="text-xl">
          <PiSlidersHorizontalBold></PiSlidersHorizontalBold>
        </span>{" "}
        Filters
      </button>

      {/*=================================Filters Modal area=================================*/}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <form method="dialog flex items-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl left-4 top-[20px]">
              ✕
            </button>
            <h1 className="text-xl font-semibold text-center pb-4 border-b">
              Filters
            </h1>
          </form>
          {/*=================================Filters Type of place Tab area=================================*/}
          <div className="border-b py-6">
            <h2 className="text-xl font-semibold pb-4">Type of place</h2>
            <Tabs className="">
              <TabList className="grid grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden">
                <Tab className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                  Any Types
                </Tab>
                <Tab className="cursor-pointer py-4 md:py-7 text-center text-gray-600 border-s border-e border-gray-200">
                  Room
                </Tab>
                <Tab className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                  Entire home
                </Tab>
              </TabList>

              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </Tabs>
          </div>
          <div className="border-b py-6">
          <h2 className="text-xl font-semibold pb-4">Price range</h2>
            <input type="range" className="range" />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FiltersModal;
