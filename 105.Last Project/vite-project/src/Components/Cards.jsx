import React from "react";
import Card from "./Card";
import CardData from "./Data/CardData";
const Cards = () => {
  return (
    <>
      <div className="w-full justify-evenly gap-2 items-center flex-nowrap flex">
        <Card CardData={CardData} />
      </div>
    </>
  );
};

export default Cards;
