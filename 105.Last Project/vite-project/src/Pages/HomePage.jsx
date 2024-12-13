// import React, { useState } from "react";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
// const [isLoading, setIsloading] = useState(false);
const HomePage = () => {

  return (
    <div className="bg-[#303030]">
      <Carousel />
      <Cards />
    </div>
  );
};

export default HomePage;
