import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const list = [
  {
    category: "Seeds",
    image: "Product Image",
    description: "Chin Sakata 651(1500 seeds)",
    qty: "26",
  },
  {
    category: "Seeds",
    image: "Product Image",
    description: "Chin Sakata 651(1500 seeds)",
    qty: "26",
  },
  {
    category: "Seeds",
    image: "Product Image",
    description: "Chin Sakata 651(1500 seeds)",
    qty: "26",
  },
];
function TableData({ isOpen, FontAwesomeIcon }) {
  return (
    isOpen && (
      <table className="min-w-max w-full table-auto">
        <thead className="bg-gray-800 text-gray-100">
          <th className="py-2">Sr No.</th>
          <th>Agri-Input Category</th>
          <th>Product Image</th>
          <th>Description</th>
          <th>Product Qty</th>
        </thead>
        <tbody>
          {list.map((order, index) => {
            return (
              <tr className="border-b-2">
                <td className="text-center py-4">{index + 1}.</td>
                <td className="text-center">{order.category}</td>
                <td className="text-center">{order.image}</td>
                <td className="text-center">{order.description}</td>
                <td className="text-center">{order.qty}</td>
                <td>
                  <FontAwesomeIcon
                    // onClick={() => setShowModal(true)}
                    icon={faExternalLinkAlt}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* {showModal ? <Modal setShowModal={setShowModal} /> : <></>} */}
      </table>
    )
  );
}

export default TableData;
