import React from "react";
import { TabGroup } from "@statikly/funk";
const styles = {
  className: "h-12 px-12 transition-colors duration-150",
  activeClassName: "bg-gray-800 text-white",
  inactiveClassName: "text-white bg-gray-600",
};

function Tabs({ index, tab }) {
  return (
    <TabGroup.Tab
      index={index}
      className={styles.className}
      activeClassName={styles.activeClassName}
      inactiveClassName={styles.inactiveClassName}
    >
      {tab.tabName}
    </TabGroup.Tab>
  );
}

export default Tabs;
