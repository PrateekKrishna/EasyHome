import React, { useEffect, useState } from "react";
import HouseCard from "../components/HouseCard";
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/properties", {
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

  if (user)
    return (
      <div className="bg-primary bg-[#01040f] w-full  overflow-hidden ">
        {/* {console.log(data)} */}
        <SearchBar />
        <div className="flex flex-wrap gap-[30px] align-center pt-[50px] pb-[50px] justify-center">
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
    return (
      <div className="h-[470px] bg-[#01040f] w-full flex items-center justify-center text-center text-white bg-primary ">
        You are not logged in
      </div>
    );
};

export default Dashboard;
