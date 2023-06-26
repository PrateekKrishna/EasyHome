import React from 'react';

const HouseDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src="/house.jpeg"
          alt="House"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Beautiful House for Sale</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ligula consectetur, eleifend nisi sit amet, dapibus odio. Sed tincidunt eleifend tellus ut fermentum. Phasellus blandit felis eget eros accumsan convallis. Vivamus vitae ipsum at quam pretium eleifend. Nulla scelerisque diam a metus venenatis lacinia.
        </p>
        <ul className="list-disc pl-6">
          <li>4 bedrooms</li>
          <li>3 bathrooms</li>
          <li>Spacious living room</li>
          <li>Modern kitchen</li>
          <li>Beautiful backyard</li>
          <li>Garage for 2 cars</li>
        </ul>
        <div className="mt-4">
          <p className="text-lg font-bold mb-2">Price: ₹9000p/m</p>
          <button className="bg-[#8B9A46] hover:bg-[#EEEEEE] text-white hover:text-black font-bold py-2 px-4 rounded">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
