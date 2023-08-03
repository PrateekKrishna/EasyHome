import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext';
import DeleteButton from '../components/DeleteButton.js'
import UpdateButton from '../components/UpdateButton';
import PopupForm from '../components/PopupForm';
import {BASE_URL} from "../utils/base.js"

const HouseDetails = () => {
  const params = useParams()
  // console.log(params.id);
  const navigate = useNavigate()
  const {user} = useAuthContext()
  const [data, setData] = useState({})
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };


  const getData = async () =>{
    try {
      const res = await axios.get(`${BASE_URL}/properties/${params.id}`,  {
        headers: { Authorization: `Bearer ${user.token}`},
      });
      setData(res.data.message)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteThis = async ()  =>{
    try {
      await axios.delete(`${BASE_URL}/properties/${params.id}`, {
        headers: { Authorization: `Bearer ${user.token}`},
      })
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
    
  }

  // const updateThis = async () =>{

  // }
  
  useEffect(()=>{
    getData()
    // eslint-disable-next-line
  }, [user])

  return (
    <div className="flex flex-col lg:flex-row">
      {console.log(data)}
      <div className="w-full lg:w-1/2">
        <img
          src={data.photo}
          alt="House"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-700 mb-4">
          {data.description}
        </p>
        {/* <ul className="list-disc pl-6">
          <li>4 bedrooms</li>
          <li>3 bathrooms</li>
          <li>Spacious living room</li>
          <li>Modern kitchen</li>
          <li>Beautiful backyard</li>
          <li>Garage for 2 cars</li>
        </ul> */}
        <div className="mt-4">
          <p className="text-lg font-bold mb-2">Price: ₹{data.price}p/m</p>

          {/* <button className="mb-2 bg-[#8B9A46] hover:bg-[#EEEEEE] text-white hover:text-black font-bold py-2 px-4 rounded">
            Contact
          </button> */}
          
        </div>
         <DeleteButton onClick={deleteThis} />

         <UpdateButton onClick={openPopup} />
         {isOpen && <PopupForm setIsOpen={setIsOpen} type='update' id={params.id} />}
      </div>
    </div>
  );
};

export default HouseDetails;
