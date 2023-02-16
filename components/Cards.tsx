import React, { useState } from "react";


import Card from "./Card";


const Cards = ({ posts }: any) => {

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((element: any, index: any) => {
          return (
            <Card
              key={index}
              title={element.title}
              price={element.price}
              description={element.description}
              element={element}
              image={element.image}
             
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
