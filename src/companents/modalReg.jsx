import { Link } from "react-router-dom";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons"

const ModalReg = () => {

  return (
    <div className="py-[52px] px-[100px] pb-[40px] hidden">
      <div className=" flex justify-center items-center gap-[10px]">
        <Link to={"/login"}><button className="text-[#3d3d3d] font-maven-pro text-[20px] font-medium leading-[16px] border-none bg-transparent cursor-pointer">Login</button></Link>
        <p>|</p>
        <Link to={"/register"}><button className="text-[#46a358] font-maven-pro text-[20px] font-medium leading-[16px] border-none bg-transparent cursor-pointer">Register</button></Link>
      </div>
      <p className="text-center mt-[35px] font-maven-pro text-[13px] text-[#3d3d3d] font-normal leading-[16px]">
        Enter your email and password to register.
      </p>
      <div className="modal__reg__inputs my-[14px] mx-auto flex flex-col gap-[16px]">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Enter your email address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
      </div>
      <button type="submit" className="my-[30px] mx-auto mb-[36px] w-full py-[15px] px-0 rounded-lg border-none bg-[#46a358] text-white font-maven-pro text-[16px] font-bold leading-[16px] border border-[#46a358] transition duration-500 hover:bg-[#fff] hover:text-[#46a358]">
        Register
      </button>
      <div className=" relative">
        <p className="reg__or mx-auto text-[#3d3d3d] font-maven-pro text-[13px] font-normal leading-[16px] px-[10px] z-10 bg-white max-w-max">Or register with</p>
      </div>
      <div className="flex flex-col gap-y-[15px] my-[27px] mx-auto mb-[38px]">
        <button className="flex gap-[10px] justify-center items-center py-[10px] px-0 text-[#46a358] bg-white border border-[#eaeaea] rounded-lg font-maven-pro font-medium leading-[16px] text-[13px] transition duration-500 hover:bg-[#46a358] hover:text-white google">
          <GoogleOutlined />
          <p className="social__btn__text">Login with Google</p>
        </button>
        <button className="flex gap-[10px] justify-center items-center py-[10px] px-0 text-[#46a358] bg-white border border-[#eaeaea] rounded-lg font-maven-pro font-medium leading-[16px] text-[13px] transition duration-500 hover:bg-[#46a358] hover:text-white facebook">
          <FacebookFilled />
          <p className="social__btn__text">Login with Facebook</p>
        </button>
      </div>
    </div>
  );
};

export default ModalReg;
