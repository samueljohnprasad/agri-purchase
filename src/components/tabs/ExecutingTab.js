import React from "react";
import { TabGroup } from "@statikly/funk";
import GeneratePo from "./GeneratePo";
import TabPanels from "../bars/TabPanels";
import Tabs from "../bars/Tabs";

const tabs = [
  { tabName: "Undo Batch" },
  { tabName: "Assign Suppliers" },
  { tabName: "Generate PO", panel: GeneratePo },
];
function ExecutingTab() {
  return (
    <section>
      <div>
        <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
          <TabGroup.TabList>
            {tabs.map((tab, index) => (
              <Tabs index={index} tab={tab} />
            ))}
          </TabGroup.TabList>
          {tabs.map((tab, index) => (
            <TabPanels tab={tab} index={index} />
          ))}
        </TabGroup>
      </div>
    </section>
  );
}

export default ExecutingTab;
