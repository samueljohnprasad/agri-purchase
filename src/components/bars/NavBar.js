import React from "react";
import { TabGroup } from "@statikly/funk";
import ExecutingTab from "../tabs/ExecutingTab";

function NavBar() {
  return (
    <div>
      <div>
        <h1>Agri-Input Purchase Requests</h1>
      </div>
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-gray-800 text-white"
            inactiveClassName="text-white bg-gray-600"
          >
            Pending
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-gray-800 text-white"
            inactiveClassName="text-white bg-gray-600"
          >
            Executing
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-gray-800 text-white"
            inactiveClassName="text-white bg-gray-600"
          >
            Executed
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-gray-800 text-white"
            inactiveClassName="text-white bg-gray-600"
          >
            Finished
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <h1>Pending</h1>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="transition-all transform flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <ExecutingTab />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <h1>Executed</h1>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className="transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Finished
        </TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
}

export default NavBar;
