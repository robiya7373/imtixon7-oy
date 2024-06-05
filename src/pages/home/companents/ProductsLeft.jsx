import { categoryData, categorySize } from "../../../utils/categoryData";
import PriceRange from "./PriceRange";
import SuperSaleLogo from "../../../assets/image/superSale.png";
import SuperSaleImg from "../../../assets/image/SuperSaleImg.png";

const ProductsLeft = () => {
  return (
    <div className="productsLeft">
      <div className="bg-[#fbfbfb] p-[14px] px-[24px] w-[310px]">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-gray-700 text-[18px] font-bold font-cera-pro leading-[16px]">
            Categories
          </h2>
          {categoryData.map((item) => (
            <div
              className="flex justify-between cursor-pointer font-cera-pro text-[15px] font-normal leading-[40px] text-gray-600 transition duration-500 hover:text-green-500 hover:font-bold"
              key={item.id}
            >
              <p className="list__text">{item.title}</p>
              <p className="list__number">{item.number}</p>
            </div>
          ))}
        </div>
        <div className="my-[36px] mx-auto">
          <PriceRange />
          <p className="text-[#3d3d3d] font-mavenpro text-[15px] font-normal leading-[16px] mt-[15px]">
            <span className="text-[#46a358] font-mavenpro text-[15px] font-bold leading-[16px]"></span>
          </p>
          <button className="mx-0 my-4 px-[25px] py-2 text-white font-mavenpro text-[16px] font-bold leading-[20px] bg-[#46a358] border-2 border-[#46a358] rounded-[6px] transition-all duration-500">Filter</button>
        </div>
        <div className="mb-[19px] flex flex-col gap-[12px]">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px]">Size</h2>
          {categorySize.map((item) => (
            <div className="flex justify-between gap-[20px] text-[#3d3d3d] font-mavenpro text-[15px] font-normal leading-[40px] cursor-pointer transition-all duration-500" key={item.id}>
              <p className="size__text">{item.title}</p>
              <p className="size__number">{item.number}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="superSale max-w-[1140px] w-[100%] mx-auto">
        <div className="mx-[22px]">
          <img src={SuperSaleLogo} alt="super sale logo" />
        </div>
        <h1 className="text-center text-[#3d3d3d] font-mavenpro text-[23px] font-bold leading-[16px] z-[1] my-[6px] mx-auto mt-[11px]">UP TO 75% OFF</h1>
        <div className=" flex w-[310px] h-[315px]">
          <img src={SuperSaleImg} alt="super sale image" className="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProductsLeft;
