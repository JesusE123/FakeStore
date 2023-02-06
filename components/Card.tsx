import React, { useState } from "react";
import Image from "next/image";

import Swal from "sweetalert2";

function Card({
  title,
  description,
  price,
  element,
  image,
  index,
  additem,
}: any) {
  const addToCart = () => {
    additem(element);
    Swal.fire({
      icon: "success",
      title: "Se ha agreado correctamente",
      text: "Su producto ya se encuentra disponible en el carrito",
    });
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-700 object-fill hover:scale-125 duration-150">
        <Image src={image} className="object-contain h-52 w-96" width={100} height={50} alt="productos" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 truncate">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
            {description}
          </p>
          <div className="d-flex justify-content-between">
            <span className="font-bold mt-2">${price}</span>
            <button
              onClick={addToCart}
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
