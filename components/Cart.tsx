import React from "react";
import { BsFillCartDashFill } from "react-icons/bs";

const Cart = ({ handleShow, totalUniqueItems, items }: any) => {
  return (
    <>
      <div className="mx-4">
        {!items ? (
          ""
        ) : (
          <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
            {totalUniqueItems}
          </span>
        )}
        <button onClick={handleShow} className=" hover:text-white">
          <BsFillCartDashFill size={50} />
        </button>
      </div>
    </>
  );
};

export default Cart;
