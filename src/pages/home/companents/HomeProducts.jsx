import ProductsLeft from "./ProductsLeft";
import ProductsRight from "./ProductsRight";

const HomeProducts = () => {
  return (
    <div className="flex justify-between mx-auto my-[40px] gap-9">
      <ProductsLeft />
      <ProductsRight />
    </div>
  );
};

export default HomeProducts;
