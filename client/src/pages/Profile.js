import React, { useState } from "react";
import PopupForm from "../components/PopupForm";
import HouseCard from "../components/HouseCard";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const usr = {
    name: "John Doe",
    email: "btech10105.21@bitmesra.ac.in",
    phoneNumber: "+91 8787878787",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ligula consectetur, eleifend nisi sit amet, dapibus odio. Sed tincidunt eleifend tellus ut fermentum.",
    profilePicture: "profilelogo.webp",
    additionalImage: "facebook.svg",
  };

  const {user} = useAuthContext()
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };
if(user)
  return (
    <div className="bg-[#01040f] min-h-screen">
      <div className="container mx-auto  py-8">
        <div className=" bg-gray-300 rounded shadow-lg p-8">
          <div className="flex flex-col items-center mb-4">
            <img
              src={usr.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-2"
            />
            <h2 className="text-2xl font-bold">{usr.name}</h2>
            <p className="text-gray-600">{usr.email}</p>
            <p className="text-gray-600">{usr.phoneNumber}</p>
          </div>
          <p className="text-gray-700">{usr.bio}</p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <button
          onClick={openPopup}
          className=" bg-[#735F32] h-[40px] w-[200px] hover:bg-[#C69749] text-white font-bold py-2 px-4 rounded"
        >
          Add House
        </button>
        {isOpen && <PopupForm setIsOpen={setIsOpen} />}
      </div>
      <h3 className="text-gray-300 text-center p-8">House added by you</h3>
      <div className="bg-primary bg-[#01040f] w-full justify-center overflow-hidden flex flex-wrap gap-[30px] align-center pt-[50px] pb-[50px]">
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={1} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={2} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={3} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={4} />
      </div>
    </div>
  );
  else
    return (<div className='h-[470px] bg-[#01040f] w-full flex items-center justify-center text-center text-white bg-primary '>You are not logged in</div>)
};

export default Profile;
