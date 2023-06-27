import React, { useState } from "react";

const PopupForm = ({ setIsOpen }) => {
  const [houseDetails, sethouseDetails] = useState({
    title: "",
    location: "",
    price: "",
    contact: "",
    description: "",
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(houseDetails);
  };

  const handleChange = (e) => {
    sethouseDetails({ ...houseDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
      <div className="bg-gray-300 rounded-lg p-6 md:w-[500px] w-[85%] bg-opacity-95">
        <h2 className="text-xl mb-4 text-center">Add House Details</h2>

        <form onSubmit={handleSubmit}>
          {/* Add your form fields here */}
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title
            </label>
            <input
              onChange={handleChange}
              value={houseDetails.title}
              type="text"
              name="title"
              id="title"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-2">
              Location
            </label>
            <input
              onChange={handleChange}
              value={houseDetails.location}
              type="text"
              name="location"
              id="location"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input
              onChange={handleChange}
              value={houseDetails.price}
              type="text"
              name="price"
              id="price"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-2">
              Your contact details
            </label>
            <input
              onChange={handleChange}
              value={houseDetails.contact}
              type="text"
              name="contact"
              id="contact"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={houseDetails.description}
              type="text"
              name="description"
              id="description"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Add more form fields as needed */}

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
