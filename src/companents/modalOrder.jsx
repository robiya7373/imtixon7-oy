import { PlusOutlined } from "@ant-design/icons";
import ModalBodyImg from "../assets/icons/modalimg1.png";
import { message } from "antd";

const ModalOrder = ({ onOrder }) => {

    const onMessage = () => { 
        message.success("Success")
        onOrder()
    }

  return (
    <div className=" modal__order fixed top-0 left-0 w-full h-[100%] bg-black bg-opacity-25" onClick={() => onOrder()}>
  <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
    <button className="absolute top-2 right-2 p-2 bg-transparent text-green-500 border-none text-2xl transform rotate-45" onClick={() => onOrder()}>
      <PlusOutlined />
    </button>
         <div className=" w-[578px] px-29 pt-[29px] pb-0 flex flex-col items-center bg-green-100 bg-opacity-6 border-b border-green-300 border-opacity-6">
          <img
            src={ModalBodyImg}
            alt="modal image"
            className="modal__body__img"
          />
          <p className="text-gray-700 font-maven-pro text-base font-normal leading-normal my-6">Your order has been received</p>
        </div>
        <div className="modal__order__info flex justify-evenly items-center my-6 relative pb-[18px]">
          <div className="">
            <p className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mb-3">Order Number</p>
            <p className="text-gray-700 font-maven-pro text-base font-semibold leading-normal">19586687</p>
          </div>
          |
          <div className="">
            <p className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mb-3">Date</p>
            <div className="text-gray-700 font-maven-pro text-base font-semibold leading-normal">15 Sep, 2021</div>
          </div>
          |
          <div className="">
            <p className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mb-3">Total</p>
            <p className="text-gray-700 font-maven-pro text-base font-semibold leading-normal">2,699.00</p>
          </div>
          |
          <div className="">
            <p className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mb-3">Payment Method</p>
            <p className="text-gray-700 font-maven-pro text-base font-semibold leading-normal">Cash on delivery</p>
          </div>
        </div>
        <div className="mx-[26px]">
          <h3 className="text-gray-900 font-maven-pro text-base font-semibold leading-normal mb-3">Order Details</h3>
          <div className="order__carts__titles flex pb-[11px] mb-[22px] relative">
            <p className="text-gray-900 font-maven-pro text-base font-medium leading-normal mr-72">Products</p>
            <p className="text-gray-900 font-maven-pro text-base font-medium leading-normal mr-[85px]">Qty</p>
            <p className="text-gray-900 font-maven-pro text-base font-medium leading-normal">Subtotal</p>
          </div>
          <div className=" flex flex-col gap-[10px] w-[520px] h-[150px]">
            <div className="w-full h-[70px] bg-[#ebebeb]"></div>
            <div className="w-full h-[70px] bg-[#ebebeb]"></div>
          </div>
          <div className=" flex items-center my-[10px] m-0">
            <p className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mr-54">Shiping</p>
            <h3 className="text-gray-700 font-maven-pro text-base font-medium leading-normal">$16.00</h3>
          </div>
          <div className=" flex items-center mb-[12px]">
            <h3 className="text-gray-700 font-maven-pro text-sm font-normal leading-normal mr-[230px]">Total</h3>
            <h3 className="text-gray-700 font-maven-pro text-base font-medium leading-normal">$2,699.00</h3>
          </div>
          <p className="max-w-[520px] text-center text-gray-700 font-maven-pro text-sm font-normal leading-4 mb-[19px] pt-[10px] relative">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
          <div className="flex justify-center mb-[29px]">
            <button onClick={() => onMessage()} className="px-4 py-2 text-white font-maven-pro text-base font-bold bg-green-600 border border-green-600 rounded transition duration-500 hover:text-green-600 hover:bg-white hover:border-green-600">Track your order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
