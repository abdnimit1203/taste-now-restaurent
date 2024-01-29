import "./PopularCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburgerLight } from "react-icons/pi";
import { LuSalad } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Sliders from "../Sliders/Sliders";

const PopularCategory = () => {
  return (
    <div>
      <h2 className="mid">
        Our Popular <span className="primary">Categories</span>{" "}
      </h2>
      <div className="mid">
        <Tabs>
          <TabList>
            <Tab>
              <div className="tabs">
                <IoPizzaOutline />
                Pizzas
              </div>
            </Tab>
            <Tab>
              <div className="tabs">
              <PiHamburgerLight />

                Burgers
              </div>
            </Tab>
            <Tab>
              <div className="tabs">
              <LuSalad />

                Salads
              </div>
            </Tab>
            <Tab>
              <div className="tabs">
              <IoFastFoodOutline />

                Pizzas
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <Sliders/>
          </TabPanel>
          <TabPanel>
            <Sliders/>
          </TabPanel>
          <TabPanel>
          <Sliders/>
          </TabPanel>
          <TabPanel>
          <Sliders/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PopularCategory;
