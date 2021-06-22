import React from "react";
import {
  faFileDownload,
  faSortDown,
  faSortUp,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons";
import TableData from "./TableData";
function UserDataDisplay({ item, FontAwesomeIcon, toggle, index, state }) {
  return (
    <React.Fragment>
      <div
        key={index}
        className="flex w-full space-x-12 bg-gray-200 text-gray-600 px-4 py-3"
      >
        <div className="w-1/4 flex items-center justify-between pr-8">
          <p>{item.name}</p>
          <FontAwesomeIcon
            icon={state === index ? faSortUp : faSortDown}
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
          <a href="www.google.com" download="">
            <FontAwesomeIcon icon={faFileDownload}>
              <i class="fas fa-file-download"></i>
            </FontAwesomeIcon>
          </a>
        </div>
      </div>
      {state === index ? (
        <TableData FontAwesomeIcon={FontAwesomeIcon} isOpen={true} />
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default UserDataDisplay;