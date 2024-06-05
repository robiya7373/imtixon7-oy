import React from "react";
import { Carousel } from "antd";
import sliderData from "../utils/sliderData";

const SliderComp = () => {
  return (
    <Carousel
      autoplay
      className="slider mt-[12px] m-auto bg-[#f7f7f7] "
    >
      {sliderData.map((item) => (
        <div className="slider__content" key={item.id}>
          <div className="slider__info">
            <p className="text-gray-600 font-cera-pro text-[14px] font-medium leading-[16px] tracking-[1.4px] mt-[50px]">{item.txt}</p>
            <h1 className="max-w-[580px] text-[#3d3d3d] text-[70px] font-black leading-[70px] my-[7px] mx-0 mb-[5px]">
              {item.title} <span className=" text-green-500">Planet</span>
            </h1>
            <p className="max-w-[557px] text-custom-gray-727 font-maven-pro text-[14px] font-normal leading-[24px]">{item.text}</p>
            <button className="text-white font-maven-pro text-[16px] font-bold leading-[20px] px-[27px] py-[10px] border-2 border-green-500 rounded-[6px] bg-green-500 my-[44px] mb-[65px] transition duration-500 hover:bg-white hover:text-green-500">SHOP NOW</button>
          </div>
          <div className="slider__image">
            <img src={item.image} alt="slider image" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SliderComp;
