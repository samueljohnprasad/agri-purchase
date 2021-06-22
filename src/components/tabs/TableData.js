import React from "react";

import TableBody from "./TableBody";

function TableData({ isOpen, products, FontAwesomeIcon }) {
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
        <TableBody products={products} FontAwesomeIcon={FontAwesomeIcon} />
      </table>
    )
  );
}

export default TableData;
