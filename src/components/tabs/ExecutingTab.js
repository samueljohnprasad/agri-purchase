import React from "react";
import { TabGroup } from "@statikly/funk";
import GeneratePo from "./GeneratePo";
const tabs = ["Undo Batch", "Assign Suppliers", "Generate PO"];
function ExecutingTab() {
  return (
    <section>
      <div>
        <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
          <TabGroup.TabList>
            {tabs.map((tab, index) => {
              return (
                <TabGroup.Tab
                  index={index}
                  className="mx-4 px-12 py-2 duration-150"
                  activeClassName="bg-gray-900 text-gray-100"
                  inactiveClassName="bg-gray-600 text-gray-200"
                >
                  {tab}
                </TabGroup.Tab>
              );
            })}
          </TabGroup.TabList>
          <TabGroup.TabPanel
            index={0}
            className="transition-all transform px-4 py-2"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            Undo Batch
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={1}
            className="transition-all transform px-4 py-2"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            Assign Suppliers
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={2}
            className="transition-all transform px-4 py-2"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <GeneratePo />
          </TabGroup.TabPanel>
        </TabGroup>
      </div>
    </section>
  );
}

export default ExecutingTab;
