import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UserDataDisplay from "./UserDataDisplay";

function GeneratePo({ tab }) {
  console.log("tab", tab);
  const { list } = tab;
  const [toggler, setToggler] = useState(false);

  const toggle = (index) => {
    if (toggler === index) {
      return setToggler(false);
    }

    setToggler(index);
  };
  return (
    <section className="py-4 space-y-2 h-full">
      <div className="flex items-center space-x-16 border-b-2 ">
        <h3>{`${tab.tabName} Agri-Input Orders`}</h3>
        <p>Batched By</p>
      </div>

      <div className="space-y-2">
        {list.map((user, index) => (
          <UserDataDisplay
            key={index}
            user={user}
            FontAwesomeIcon={FontAwesomeIcon}
            index={index}
            toggle={toggle}
            toggler={toggler}
          ></UserDataDisplay>
        ))}
      </div>
    </section>
  );
}

export default GeneratePo;
