import { useState } from "react";
import { Link } from "react-router-dom";
import rightData from "../../../utils/rightData";
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import ProductsCard from "../../../companents/ProductsCard";

const ProductsRight = () => {
  const [data, setData] = useState(1);
  const rightPage = 9;
  const lastIndex = data * rightPage;
  const firstIndex = lastIndex - rightPage;
  const Data = rightData.slice(firstIndex, lastIndex);
  const pagiPages = Math.ceil(rightData.length / rightPage);
  const numbers = [...Array(pagiPages + 1).keys()].slice(1);

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex justify-between">
        <div className=" right__items flex gap-[40px]">
          <p>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>
        <div className="flex items-center gap-[5px] cursor-pointer">
          <p className=" text-[#3d3d3d] text-[15px] font-normal leading-[16px] ">Short by:</p>
          <select name="sort" id="sort">
            <option value="default">
              Default sorting <DownOutlined />
            </option>
            <option value="expensive">Expensive</option>
            <option value="cheap">Cheap</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-wrap gap-[15px] mt-[30px]">
        {Data.map((products) => (
          <ProductsCard key={products.id} products={products}/>
        ))}
      </div>
      <div className="right__pagination">
        <button className="pagi__back__btn" onClick={backBtn}>
          <LeftOutlined />
        </button>
        {numbers.map((number, index) => (
          <li
            className={`pagi__center__numbers ${
              data === number ? "active" : " "
            }`}
            key={index}
          >
            <button className="pagi__link" onClick={() => changeNumber(number)}>
              {number}
            </button>
          </li>
        ))}
        <button className="pagi__next__btn" onClick={nextBtn}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );

  function backBtn() {
    if (data !== 1) {
      setData(data - 1);
    }
  }

  function changeNumber(id) {
    setData(id);
  }

  function nextBtn() {
    if (data !== pagiPages) {
      setData(data + 1);
    }
  }
};

export default ProductsRight;
