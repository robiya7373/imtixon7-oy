import { useContext } from "react";
import CardContext from "../../../context/cardContext";
import Card from './cart'
import { useSelector } from "react-redux";


const BasketProductsLeft = () => {
// const { cardItems} = useContext(CardContext)
const { data } = useSelector((state) => state.cart);


  return (
    <div className="">
      <div className="basket__left__content flex max-w-[750px] items-center relative py-[10px]">
        <h2 className="text-gray-700 font-maven-pro text-base font-medium leading-[16px] mr-[230px]">Products</h2>
        <h2 className="text-gray-700 font-maven-pro text-base font-medium leading-[16px] mr-[106px]">Price</h2>
        <h2 className="text-gray-700 font-maven-pro text-base font-medium leading-[16px] mr-[96px]">Quantity</h2>
        <h2 className="text-gray-700 font-maven-pro text-base font-medium leading-[16px]">Total</h2>
      </div>
      <div className="w-[750px] h-[230px] overflow-x-auto mt-[11px]">
        {data.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default BasketProductsLeft;
