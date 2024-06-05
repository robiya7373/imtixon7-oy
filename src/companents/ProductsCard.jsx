import React, { useContext } from "react";
import CardContext from "../context/cardContext";
import { AppstoreAddOutlined } from "@ant-design/icons";

const ProductsCard = ({ products }) => {
  const { addToCard } = useContext(CardContext);
  return (
    <div className=" relative mb-[70px]">
      <div className=" w-[250px] h-[250px]">
        <img src={products.image} alt={products.title} className="w-[100%] h-[100%] object-cover rounded-[8px]" />
      </div>
      <h4 className=" text-[#3d3d3d] text-[16px] font-normal leading-[16px] my-[31px] mt-[6px]">{products.title}</h4>
      <h5 className=" text-[#46a358] text-[18px] font-bold leading-[16px]">${products.price}</h5>
      <div className=" absolute right-[10px] bottom-[10px]">
        <button className=" border-none bg-transparent text-[20px] transition-[0.5s] hover:text-[#46a358]" onClick={() => addToCard(products)}>
          <AppstoreAddOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
