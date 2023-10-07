import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "./FiltersTab.css";
const FiltersModal = () => {

  const handleButton = (e) =>{
    const value = e.target.innerHTML;
    console.log(value);
  }
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
        <div className="modal-box w-11/12 max-w-3xl relative">
          <form method="dialog flex items-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute text-xl left-4 top-[20px]">
              ✕
            </button>
            <h1 className="text-xl font-semibold text-center pb-4 border-b">
              Filters
            </h1>
          </form>
          {/*=================================Filters Type of place Tab area=================================*/}
          <div className="border-b py-4">
            <h2 className="text-xl font-semibold pb-4">Type of place</h2>
            <div className="">
              <div className="grid grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden">
                <butto className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                  Any Types
                </butto>
                <button className="cursor-pointer py-4 md:py-7 text-center text-gray-600 border-s border-e border-gray-200">
                  Room
                </button>
                <button className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                  Entire home
                </button>
              </div>
            </div>
          </div>
          {/*=================================Filters Price range=================================*/}
          <div className="border-b py-4">
            <h2 className="text-xl font-semibold pb-4">Price range</h2>
            <input type="range" className="range" />
          </div>
          {/*=================================Filters Rooms and beds Tab area=================================*/}

          <div className="border-b py-4">
            <h2 className="text-xl font-semibold pb-4">Rooms and beds</h2>
            <div className="pb-4">
              <p className="pb-2">Bedrooms</p>
              <Tabs className="">
                <TabList className="flex gap-2">
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    Any
                  </Tab>
                  <Tab onClick={handleButton} className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    5
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    2
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    3
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    4
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    5
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    6
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    7
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    8+
                  </Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>
            </div>
            <div className="pb-4">
              <p className="pb-2">Beds</p>
              <Tabs className="">
                <TabList className="flex gap-2">
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    Any
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    1
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    2
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    3
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    4
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    5
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    6
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    7
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    8+
                  </Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>
            </div>
            <div className="pb-4">
              <p className="pb-2">Bathrooms</p>
              <Tabs className="">
                <TabList className="flex gap-2">
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    Any
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    1
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    2
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    3
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    4
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    5
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    6
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    7
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 w-20 text-center rounded-full border">
                    8+
                  </Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>
            </div>
          </div>
          {/*=================================Filters Property type area=================================*/}
          <div className="border-b py-4">
            <h2 className="text-xl font-semibold pb-4">Property type</h2>
            <div className="flex justify-between">
              <div className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="cursor-pointer py-4 md:py-7 text-center text-gray-600">
                <input type="checkbox" className="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FiltersModal;
