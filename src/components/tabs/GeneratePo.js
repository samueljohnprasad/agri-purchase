import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload,faFileExcel ,faSortDown} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import customerData from "../../utils/customerData";


const list =customerData()

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
          <div  key={index}
          className="flex w-full space-x-12 bg-gray-200 text-gray-600 px-4 py-3"
           >
           
            <div className="w-1/4 flex items-center justify-between pr-8">
              <p>{item.name}</p>
              <FontAwesomeIcon
                icon={faSortDown}
                onClick={() => toggle(index)}
              />
            </div>
            <div className="">
              <p className="text-sm">{item.by}</p>
              <p className="text-xs">{item.time}</p>
            </div>
            <div className="flex items-center space-x-4 w-1/4 justify-between">
              <FontAwesomeIcon icon={faFileExcel} className="text-green-700" />
              <p>{item.file}</p>
              <a href="../../random.csv" download="../../random.csv">
                <FontAwesomeIcon icon={faFileDownload} ><i class="fas fa-file-download"></i></FontAwesomeIcon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneratePo;
