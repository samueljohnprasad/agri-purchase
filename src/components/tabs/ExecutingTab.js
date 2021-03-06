import React from "react";
import { TabGroup } from "@statikly/funk";
import GeneratePo from "./GeneratePo";
import TabPanels from "../bars/TabPanels";
import Tabs from "../bars/Tabs";
import customerData from "../../utils/customerData";
const list = customerData();

const tabs = [
  { tabName: "Generate PO", panel: GeneratePo, list:list},
  { tabName: "Undo Batch" },
  { tabName: "Assign Suppliers" },
 
];
function ExecutingTab() {
  return (
    <section>
      <div>
        <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
          <TabGroup.TabList>
            {tabs.map((tab, index) => (
              <Tabs key={index} index={index} tab={tab} />
            ))}
          </TabGroup.TabList>
          {tabs.map((tab, index) => (
            <TabPanels key={index} tab={tab} index={index}  />
          ))}
        </TabGroup>
      </div>
    </section>
  );
}

export default ExecutingTab;
