import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const SearchModal = ({ onClose }) => {
  
  return (
    <div className=" fixed left-0 top-0 w-full h-screen bg-black opacity-90" onClick={() => onClose()}>
      <div className=" absolute flex px-10 top-14 left-1/2 bg-transparent transform -translate-x-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
        <div className=" max-w-[600px] relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-5 py-2 bg-[#ebebeb] text-black border-2 border-[#46a358] rounded-full outline-none"
          />
          <button className=" absolute top-1 right-10 px-2 py-1 text-[#46a358] bg-transparent border-none text-3xl">
            <SearchOutlined />
          </button>
          <button className=" absolute top-3 right-10 p-1 bg-transparent text-[#46a358] border-none text-3xl transform rotate-45" onClick={() => onClose()}>
            <PlusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

