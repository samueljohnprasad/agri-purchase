import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import customerData from "../../utils/customerData";
import UserDataDisplay from "./UserDataDisplay";
import { ToIndex } from "es-abstract/es2018";

const list = customerData();

function GeneratePo() {

  const [state, setState] = useState(false);

  const toggle = (index) => {
    if (state === index) {
      return setState(false);
    }

    setState(index);
  };
  return (
    <section className="py-4 space-y-2 h-full">
      <div className="flex items-center space-x-16 border-b-2 ">
        <p>Executing Agri-Input Orders</p>
        <p>Batched By</p>
      </div>

      <div className="space-y-2">
        {list.map((item, index) => (
          
            <UserDataDisplay
              item={item}
              FontAwesomeIcon={FontAwesomeIcon}
              index={index}
              toggle={toggle}
              state={state}
            ></UserDataDisplay>
         
        ))}
      </div>
    </section>
  );
}

export default GeneratePo;
