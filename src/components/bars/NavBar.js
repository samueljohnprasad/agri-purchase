import React from "react";
import { TabGroup } from "@statikly/funk";
import Tabs from "./Tabs";
import TabPanels from "./TabPanels";
import ExecutingTab from "../tabs/ExecutingTab";
import PendingData from "../../utils/pendingData";
import FinishedData from "../../utils/finishedData";
import GeneratePo from "../tabs/GeneratePo";

const list = PendingData();
const tabArr = [
  { tabName: "Executing", panel: ExecutingTab },
  { tabName: "Pending", tbles: GeneratePo, list },
  { tabName: "Executed", tbles: GeneratePo, list },
  { tabName: "Finished", tbles: GeneratePo, list: FinishedData() },
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
            <Tabs key={index} tab={tab} index={index} />
          ))}
        </TabGroup.TabList>

        {tabArr.map((tab, index) => (
          <TabPanels key={index} index={index} tab={tab} />
        ))}
      </TabGroup>
    </div>
  );
}

export default NavBar;
