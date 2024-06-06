import React, { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import rightData from "../utils/rightData"; // Adjust the path to where rightData is located

const SearchModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredData(
      rightData.filter((item) =>
        item.title.toLowerCase().startsWith(value)
      )
    );
  };

  return (
    <div
      className="fixed left-[300px] top-9 w-[900px] h-[500px] bg-black opacity-95 rounded-[20px] z-[999]"
      onClick={() => onClose()}
    >
      <div
        className="absolute flex px-10 top-14 left-1/2 bg-transparent transform -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[600px] relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-[60px] py-3 bg-[#ebebeb] text-black border-2 border-[#46a358] rounded-full outline-none"
          />
          <button className="absolute top-1 right-[40px] px-2 py-1 text-[#46a358] bg-transparent border-none text-3xl">
            <SearchOutlined />
          </button>
          <button
            className="absolute top-1 right-[5px] p-1 bg-transparent text-[#46a358] border-none text-3xl transform rotate-45"
            onClick={() => onClose()}
          >
            <PlusOutlined />
          </button>
        </div>
      </div>
      {searchTerm && (
        <div className="flex flex-wrap justify-center mt-20 overflow-auto h-[300px] p-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="m-4 p-4 bg-white rounded shadow">
                <img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
                <h3 className="mt-2 text-lg">{item.title}</h3>
                <p className="text-green-500">${item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-white">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchModal;
