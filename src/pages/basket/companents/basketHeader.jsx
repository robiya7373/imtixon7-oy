import { Link } from "react-router-dom";

const BasketHeader = () => {
    return <div className="">
        <div className="flex items-center gap-[10px] mt-[36px] mb-[51px]">
            <Link to={"/"}>Home</Link>/
            <Link to={"/shop"}>Shop</Link>/
            <Link to={"/savat"}>Shopping Cart</Link>
        </div>
    </div>
}

export default BasketHeader;