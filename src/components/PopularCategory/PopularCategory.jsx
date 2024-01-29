import "./PopularCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
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
          <TabList className={"tabs"}>
            <Tab >
              <div className="tab">
                <IoPizzaOutline  className="tab-icons"/>
                Pizzas
              </div>
            </Tab>
            <Tab>
              <div className="tab">
              <PiHamburgerLight  className="tab-icons"/>

                Burgers
              </div>
            </Tab>
            <Tab>
              <div className="tab">
              <LuSalad  className="tab-icons"/>

                Salads
              </div>
            </Tab>
            <Tab>
              <div className="tab">
              <IoFastFoodOutline  className="tab-icons"/>

                Combos
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
