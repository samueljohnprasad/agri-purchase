import React from "react";
import { TabGroup } from "@statikly/funk";
import Tabs from "./Tabs";
import TabPanels from "./TabPanels";
import ExecutingTab from "../tabs/ExecutingTab";
const tabArr = [
  { tabName: "Pending",},
  { tabName: "Executing", panel: ExecutingTab  },
  { tabName: "Executed",  },
  { tabName: "Finished", },
];
function NavBar() {
  return (
    <div>
      <div>
        <h1>Agri-Input Purchase Requests</h1>
      </div>
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          {tabArr.map((tab, index) => (
            <Tabs tab={tab} index={index}/>
          ))}
        </TabGroup.TabList>

        {tabArr.map((tab, index) => (
          <TabPanels index={index} tab={tab}/>
        ))}
      </TabGroup>
    </div>
  );
}

export default NavBar;
