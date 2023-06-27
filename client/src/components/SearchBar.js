import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search location"
        className="w-64 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-[#735F32] hover:bg-[#C69749] text-white font-bold py-2 px-4 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
