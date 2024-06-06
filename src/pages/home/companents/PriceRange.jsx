import React from "react";

let minPrice = 0;
let maxPrice = 1000;

const PriceRange = () => {
  return <div className="price__range">
    <h2 className="text-[#3d3d3d] font-maven-pro text-[18px] font-bold leading-[16px] mb-[20px]">Price Range</h2>
    <input type="range" className=" w-[220px]"/>
    <p className="text-[#3d3d3d] font-maven-pro text-[18px] font-bold leading-[16px] mb-[20px]">Price: ${minPrice} - ${maxPrice}</p>
  </div>
}

export default PriceRange;
