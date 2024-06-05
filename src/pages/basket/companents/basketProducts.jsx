import BasketProductsRight from "./BasketRight";
import BasketProductsLeft from "./basketLeft";

const BasketProducts = () => {
  return (
    <div className=" mb-[115px] flex justify-between">
      <BasketProductsLeft />
      <BasketProductsRight/>
    </div>
  );
};

export default BasketProducts;
