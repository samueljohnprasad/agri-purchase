import React, { useState } from "react";
import Modal from "./Modal";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function TableBody({ products, FontAwesomeIcon }) {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <React.Fragment>
      <tbody>
        {products.map((order, index) => {
          const { category, description, image, quantity } = order;
          return (
            <tr className="border-b-2">
              <td className="text-center py-4">{index + 1}.</td>
              <td className="text-center">{category}</td>
              <td className="text-center">{image}</td>
              <td className="text-center">{description}</td>
              <td className="text-center">{quantity}</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => setDisplayModal({ category, description })}
                  icon={faExternalLinkAlt}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
      {displayModal && (
        <Modal
          category={displayModal.category}
          description={displayModal.description}
          setDisplayModal={setDisplayModal}
        />
      )}
    </React.Fragment>
  );
}

export default TableBody;
