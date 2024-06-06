import NavLogo from "../assets/image/navLogo.png";
import rootMenu from "../utils/rootMenu";
import BtnIcon from "../assets/icons/BtnIcon1.png";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Modal from "./modal";
import { createPortal } from "react-dom";
import IconImg1 from "../assets/icons/navIcon1.png";
import SearchModal from "./searchModal";
import HomePage from "../pages/home/index.jsx";
import ShopPage from "../pages/shop/index.jsx";
import BlogsPage from "../pages/blogs";
import PlantsPage from "../pages/plants/index.jsx";
import BasketPage from "../pages/basket/index.jsx";
import CheckoutPage from "../pages/checkout/index.jsx";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Root = () => {
  const [login, setLogin] = useState("Login");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { data } = useSelector((state) => state.cart);

  return (
    <div className="root">
      <div className="max-w-[1140px] w-[100%] mx-auto relative">
        <div className="root__nav flex items-center justify-between fixed w-[75%] top-0 bg-white py-6 z-[999]">
          <Link to="/">
            <img src={NavLogo} alt="nav logo" className="cursor-pointer" />
          </Link>
          <div className="flex gap-[50px]">
            {rootMenu.map((item) => (
              <ul
                className="nav__link cursor-pointer text-base font-normal text-[#3d3d3d] transition-[0.5s] relative"
                key={item.id}
              >
                <Link
                  to={item.path}
                  className="nav__link cursor-pointer text-base font-normal text-[#3d3d3d] transition-[0.5s] relative"
                >
                  {item.title}
                </Link>
              </ul>
            ))}
          </div>
          <div className="flex gap-[30px] items-center">
            <button
              className="p-[2px 3px] bg-transparent border-none"
              onClick={() => setSearch(true)}
            >
              <img
                src={IconImg1}
                alt="search icon"
                className="cursor-pointer"
              />
            </button>
            <Link
              to="/savat"
              className="relative border-none text-[22px] bg-transparent"
            >
              <ShoppingCartOutlined />
              {data.length > 0 && (
                <span className="w-[15px] h-[15px] p-px bg-green-500 text-white absolute text-[12px] top-[-5px] right-[-8px] flex font-bold justify-center items-center rounded-[10px]">
                  {data.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-[4px] p-[8px] rounded-[6px] bg-green-500 border-none text-white text-[16px] font-medium"
            >
              <img src={BtnIcon} alt="button icon" />
              <p>{login}</p>
            </button>
          </div>
        </div>
        {open &&
          createPortal(
            <Modal onCancel={() => setOpen(false)} setLogin={setLogin} />,
            document.body
          )}
        {search &&
          createPortal(
            <SearchModal
              onClose={() => setSearch(false)}
              setSearch={setSearch}
            />,
            document.body
          )}
        <div className="router">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/plant" element={<PlantsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/savat" element={<BasketPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Root;
