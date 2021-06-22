import React from "react";
import { TabGroup } from "@statikly/funk";

const styles = {
  className: "transition-all transform px-4 py-2",
  activeClassName: "opacity-100 duration-500 translate-x-0",
  inactiveClassName: "absolute opacity-0 -translate-x-2",
};


function TabPanels({ index, tab }) {
  return (
    <TabGroup.TabPanel
      index={index}
      className={styles.className}
      activeClassName={styles.activeClassName}
      inactiveClassName={styles.inactiveClassName}
    >
      {(tab.panel && <tab.panel />) || <h1>{tab.tabName}</h1>}
    </TabGroup.TabPanel>
  );
}

export default TabPanels;
