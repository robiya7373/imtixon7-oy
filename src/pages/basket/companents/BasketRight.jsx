import { Link } from "react-router-dom";

const BasketProductsRight = () => {
    return <div className="">
        <div className="">
            <h2 className="basket__right__title text-[#3d3d3d] font-maven-pro text-[18px] font-bold leading-[16px] pb-[10px] relative">Cart Totals</h2>
            <p className="text-[#3d3d3d] font-maven-pro text-[14px] font-normal leading-[16px] mt-[11px] mb-[8px]">Coupon Apply</p>
            <div className="basket__right__inputs">
                <input type="text" placeholder="Enter coupon code here" className="absolute py-[13px] px-[10px] w-[304px] outline-none border border-[#46a358] rounded-[3px] text-[#a5a5a5] font-maven-pro text-[14px] font-normal"/>
                <button className="relative right-0 left-[210px] bottom-0 py-[13.5px] px-[25.6px] border border-[#46a358] rounded-l-none rounded-r-[3px] bg-[#46a358] text-white font-maven-pro text-[15px] font-bold leading-[16px] transition duration-500 custom-button">Apply</button>
            </div>
            <div className="flex justify-between items-center w-[304px] mt-[30px] mb-[15px]">
                <p className="text-[#3d3d3d] font-maven-pro text-[15px] font-normal leading-[16px]">Subtotal</p>
                <h3 className="basket__right__subtotal__price">$2,683.00</h3>
            </div>
            <div className="flex justify-between items-center w-[304px]">
                <p className="text-[#3d3d3d] font-maven-pro text-[15px] font-normal leading-[16px]">Coupon Discount</p>
                <h3 className="text-[#3d3d3d] font-maven-pro text-[15px] font-normal leading-[16px]">(-) 00.00</h3>
            </div>
            <div className="flex justify-between items-center mt-[21px] mb-[8px]">
                <p className="text-[#3d3d3d] font-maven-pro text-[15px] font-normal leading-[16px]">Shipping</p>
                <h3 className="text-[#3d3d3d] font-maven-pro text-[15px] font-medium leading-[16px]">$16.00</h3>
            </div>
            <div className=" flex justify-end">
                <p className="text-[#46a358] font-maven-pro text-[12px] font-normal leading-[16px] cursor-pointer">View shipping charge</p>
            </div>
            <div className="flex justify-between items-center mt-[26px] mb-[29px]">
                <h3 className="text-[#3d3d3d] font-maven-pro text-[15px] font-bold leading-[16px]">Total</h3>
                <h3 className="text-[#3d3d3d] font-maven-pro text-[18px] font-medium leading-[16px]">$2,699.00</h3>
            </div>
            <Link to={"/checkout"}><button className="py-[12px] px-[75px] text-white font-maven-pro text-[15px] font-bold leading-[16px] bg-[#46a358] border-2 border-[#46a358] rounded-[3px] transition duration-500 hover:bg-[#fff] hover:text-[#46a358] hover:border-[#46a358]">proceed To Checkout</button></Link>
            <p className="text-center mt-[14px] text-[#46a358] font-maven-pro text-[15px] font-normal leading-[16px] cursor-pointer"><Link to={"/shop"}>Continue Shopping</Link></p>
        </div>
    </div>
}

export default BasketProductsRight;