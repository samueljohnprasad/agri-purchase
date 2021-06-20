import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

const list = [
  {
    name: "AGUY13042020_1042",
    by: "Alex Lee",
    time: "Mon, 13 Apr, 10:42 AM",
    file: "AGUY13042020_1042.csv",
  },
  {
    name: "AGUY13042020_1043",
    by: "Alex Lee",
    time: "Mon, 13 Apr, 10:42 AM",
    file: "AGUY13042020_1043.csv",
  },
  {
    name: "AGUY13042020_1044",
    by: "Alex Lee",
    time: "Mon, 13 Apr, 10:42 AM",
    file: "AGUY13042020_1044.csv",
  },
  {
    name: "AGUY13042020_1045",
    by: "Alex Lee",
    time: "Mon, 13 Apr, 10:42 AM",
    file: "AGUY13042020_1045.csv",
  },
];

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
          <div>
            key={index}
            <div>
              <p>{item.name}</p>
              <FontAwesomeIcon
                icon={''}
                onClick={() => toggle(index)}
              />
            </div>
            <div className="">
              <p className="text-sm">{item.by}</p>
              <p className="text-xs">{item.time}</p>
            </div>
            <div className="flex items-center space-x-4 w-1/4 justify-between">
              <FontAwesomeIcon icon={''} className="text-green-700" />
              <p>{item.file}</p>
              <a href="../../random.csv" download="../../random.csv">
                <FontAwesomeIcon icon={''} ><i class="fas fa-file-download"></i></FontAwesomeIcon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneratePo;
