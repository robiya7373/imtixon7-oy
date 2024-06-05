import footerCard from "../../../utils/footerCard";
import FooterLogo from "../../../assets/image/navLogo.png";
import FooterLoc from "../../../assets/icons/footerLoc1.png";
import FooterEmail from "../../../assets/icons/footerEmail.png";
import FooterCall from "../../../assets/icons/footerCall.png";
import {
  footerAcc,
  footerCate,
  footerHelp,
  footerSocials,
} from "../../../utils/footerInfo";

const FooterComp = () => {
  return (
    <div className="footer__comp">
      <div className="flex justify-between bg-[#fbfbfb] px-[23px] py-[25px]">
        <div className=" flex gap-[34px]">
          {footerCard.map((item) => (
            <div className=" news__card relative" key={item.id}>
              <div className=" relative ml-[10px]" key={item.id}>
                <img src={item.image} alt={item.title} />
              </div>
              <h2 className="text-[#3d3d3d] font-mavenpro text-[17px] font-bold leading-[16px] my-[10px] mt-[15px]">{item.title}</h2>
              <p className="max-w-[204px] text-[#727272] font-mavenpro text-[14px] font-normal leading-[22px]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="footer__newsletters">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px]">
            Would you like to join newsletters?
          </h2>
          <div className="relative mt-[18px] mb-[17px]">
            <input type="email" placeholder="enter your email address..." className="p-[12px 11px] outline-none rounded-[6px] border-[none] bg-[#fff] shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.06)] text-[#acacac] font-mavenpro text-[14px] font-normal leading-[16px] w-[354px] relative"/>
            <button className="absolute left-[268px] py-[10.5px] px-[25px] text-[#fff] font-mavenpro text-[18px] font-bold leading-[16px] bg-[#46a358] border-[2px solid #46a358] rounded-r-[6px] transition-all duration-500 hover:bg-[#fff] hover:text-[#46a358]">Join</button>
          </div>
          <p className="max-w-[354px] text-[#727272] font-mavenpro text-[13px] font-normal leading-[22px]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[87px] px-[23px] py-[25px] pb-[19px] bg-[rgba(70, 163, 88, 0.1)]">
        <div className="footer__logo">
          <img src={FooterLogo} alt="footer logo" />
        </div>
        <div className=" flex items-center gap-[70px]">
          <div className=" flex items-center gap-[10px]">
            <img src={FooterLoc} alt="footer location icon" />
            <p className=" text-[#3d3d3d] text-[14px] font-normal leading-[22px]">
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className=" flex items-center gap-[10px]">
            <img src={FooterEmail} alt="footer email icon" />
            <p className=" text-[#3d3d3d] text-[14px] font-normal leading-[22px]">abbosomonboyev1506@gmail.com</p>
          </div>
          <div className=" flex items-center gap-[10px]">
            <img src={FooterCall} alt="footer call icon" />
            <p className="text-[#3d3d3d] text-[14px] font-normal leading-[22px]">+998 33 317 17 18</p>
          </div>
        </div>
      </div>
      <div className="px-[23px] py-[33px] bg-[#fbfbfb] flex gap-[170px]">
        <div className="">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px] mb-[8px]">My Account</h2>
          {footerAcc.map((item) => (
            <p className="text-[#3d3d3d] font-mavenpro text-[14px] font-normal leading-[20px] cursor-pointer my-[10px] transition-colors duration-500 hover:text-[#46a358]" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px] mb-[8px]">Help & Guide</h2>
          {footerHelp.map((item) => (
            <p className="text-[#3d3d3d] font-mavenpro text-[14px] font-normal leading-[20px] cursor-pointer my-[10px] transition-colors duration-500 hover:text-[#46a358]" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px] mb-[8px]">Categories</h2>
          {footerCate.map((item) => (
            <p className="text-[#3d3d3d] font-mavenpro text-[14px] font-normal leading-[20px] cursor-pointer my-[10px] transition-colors duration-500 hover:text-[#46a358]" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="">
          <h2 className="text-[#3d3d3d] font-mavenpro text-[18px] font-bold leading-[16px] mb-[15px]">Social Media</h2>
          <div className="flex gap-[5px]">
            {footerSocials.map((item) => (
              <i className=" w-[30px] h-[30px] text-[#46a358] p-[1px] border-[1px solid #46a358] flex items-center justify-center rounded-[5px] transition-colors duration-500 cursor-pointer" key={item.id}>
                {item.image}
              </i>
            ))}
          </div>
        </div>
      </div>
      <p className="font-mavenpro my-[10px] mx-auto text-center text-[18px] font-normal">© 2023 GreenShop. Abbos Omonboyev.</p>
    </div>
  );
};

export default FooterComp;
