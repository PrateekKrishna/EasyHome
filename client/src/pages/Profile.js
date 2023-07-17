import React, { useState, useEffect } from "react";
import PopupForm from "../components/PopupForm";
import HouseCard from "../components/HouseCard";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from 'axios'
import { BASE_URL } from "../utils/base";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };

  const usr = {
    name: "John Doe",
    email: "btech10105.21@bitmesra.ac.in",
    phoneNumber: "+91 8787878787",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ligula consectetur, eleifend nisi sit amet, dapibus odio. Sed tincidunt eleifend tellus ut fermentum.",
    profilePicture: "profilelogo.webp",
    additionalImage: "facebook.svg",
  };
  const [profile, setProfile] = useState({});
  const {user} = useAuthContext()
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/userprop`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setData(response.data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    // eslint-disable-next-line
  }, [user]);
  
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setProfile(response.data.message);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    // eslint-disable-next-line
  }, [user]);

if(user)
  return (
    <div className="bg-[#01040f] min-h-screen">
      {/* {console.log(data)} */}
      <div className="container mx-auto  py-8">
        <div className=" bg-gray-300 rounded shadow-lg p-8">
          <div className="flex flex-col items-center mb-4">
            <img
              src={usr.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-2"
            />
            <h2 className="text-2xl font-bold">{profile?.name}</h2>
            <p className="text-gray-600">{profile?.email}</p>
            <p className="text-gray-600">{profile?.phone}</p>
          </div>
          {/* <p className="text-gray-700">{usr.bio}</p> */}
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
      {data.map((item) => (
            <HouseCard
              title={item.title}
              price={item.price}
              location={item.location}
              id={item._id}
              image={item.photo}
            />
          ))}
      </div>
    </div>
  );
  else
    return (<div className='h-[470px] bg-[#01040f] w-full flex items-center justify-center text-center text-white bg-primary '>You are not logged in</div>)
};

export default Profile;
