import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
const HomePage = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/dashboard");
  };
    
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };

  

  return (
    <div className="flex md:flex-row flex-col md:items-center md:justify-between min-h-screen bg-[#01040f] md:p-[10%]">
      <div className="container mx-auto px-4 py-8">
        <div className="md:text-left flex flex-col gap-3">
          <h2 className="text-2xl font-bold mb-4 md:text-left text-white">
            Find Your Dream Home
          </h2>
          <p className="text-gray-300 mb-8 md:text-left">
            Browse through our wide selection of houses available for rent in
            various locations.
          </p>
          <button
            onClick={handleSearch}
            className="bg-[#735F32] h-[40px] w-[200px] hover:bg-[#C69749] text-white font-bold py-2 px-4 rounded"
          >
            Search House
          </button>
          <button
            onClick={openPopup}
            className="bg-[#735F32] h-[40px] w-[200px] hover:bg-[#C69749] text-white font-bold py-2 px-4 rounded"
          >
            Add House
          </button>

          {isOpen && <PopupForm setIsOpen={setIsOpen} />}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src="/homelogo.png" alt="House" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HomePage;
