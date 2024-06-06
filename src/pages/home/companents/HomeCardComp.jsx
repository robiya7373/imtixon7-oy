import cardData from "../../../utils/cardData";
import { Link } from "react-router-dom"

const HomeCardComp = () => {
  return (
    <div className="homeCardComp">
      <div className=" flex gap-[28px] mb-[138px]">
        {cardData.map((item) => (
          <Link to={item.title} className=" bg-[#fbfbfb] flex px-[20px] py-[15px]" key={item.id}>
            <div className=" w-[250px] h-[300px] mt-[-60px]">
                <img src={item.image} alt={item.title} className="w-[350px] h-[300px]" />
            </div>
            <div className="">
                <h2 className="max-w-[180px] text-[#3d3d3d] font-mavenpro text-[20px] font-bold leading-[26px] text-right float-right">{item.title}</h2>
                <p className="max-w-[350px] text-right text-[#727272] font-mavenpro text-[16px] font-normal leading-[24px] my-[29px] mx-auto mt-[19px] float-right">{item.text}</p>
                <button className="px-[30px] py-[12px] text-white bg-[#46a358] border-2 border-[#46a358] rounded-[6px] text-[16px] font-bold leading-[20px] float-right transition-all duration-500 hover:bg-white hover:text-[#46a358]">Find More</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCardComp;
