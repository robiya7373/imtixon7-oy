import React, { useContext, useState } from "react";
import CardContext from "../../../context/cardContext";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/CardSlice";

const cart = ({ item }) => {
  // const { removeItem } = useContext(CardContext);
  const [cardcount, setCardCount] = useState(1);
  const [total, setTotal] = useState(item.price);

  const minusCount = () => {
    setTotal(item.price - cardcount);
    setCardCount(cardcount === 1 ? 1 : cardcount - 1);
  };
  const plusCount = () => {
    setTotal(item.price * cardcount);
    setCardCount(cardcount + 1);
  };

  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };
  return (
    <div className="cartItem__cards">
      <div className="w-[730px] flex items-center bg-[#fbfbfb] mb-[10px]">
        <div className="w-[70px] h-[70px] mr-[14px]">
          <img
            src={item.image}
            alt=""
            className=" w-full h-full object-cover first-letter:rounded-[8px]"
          />
        </div>
        <h4 className="text-gray-700 font-maven-pro text-base font-medium leading-[16px] mr-[106px] max-w-[100px]">
          {item.title}
        </h4>
        <p className="text-gray-600 font-maven-pro text-base font-medium leading-[16px] mr-[78px]">
          ${item.price}
        </p>
        <div className="flex items-center gap-[11px] mr-[70px]">
          <button
            onClick={minusCount}
            className="border border-green-600 py-[9px] px-[7px] flex justify-center items-center rounded-full bg-green-600 text-white transition duration-500 hover:border-green-600 hover:bg-white hover:text-green-600"
          >
            <MinusOutlined />
          </button>
          <p className="text-gray-700 font-maven-pro text-base font-normal leading-[10px]">
            {item.quantity}
          </p>
          <button
            onClick={plusCount}
            className="border border-green-600 py-[9px] px-[7px] flex justify-center items-center rounded-full bg-green-600 text-white transition duration-500 hover:border-green-600 hover:bg-white hover:text-green-600"
          >
            <PlusOutlined />
          </button>
        </div>
        <h3 className="mr-[45px] text-green-600 font-maven-pro text-base font-bold leading-[16px]">
          ${item.totalPrice}
        </h3>
        <div className="">
          <button
            onClick={() => handleRemoveItem(item.id)}
            className=" border-none bg-transparent text-[18px] p-[8px]"
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
