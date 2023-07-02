import React from "react";
import HouseCard from "../components/HouseCard";
import SearchBar from "../components/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const {user} = useAuthContext()
  
  if(user)
  return (
    <div className="bg-primary bg-[#01040f] w-full  overflow-hidden ">
      <SearchBar />
      <div className="flex flex-wrap gap-[30px] align-center pt-[50px] pb-[50px] justify-center">
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={1} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={2} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={3} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={4} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={5} />
        <HouseCard title="2bhk" price="10000" location="Ranchi" id={6} />
      </div>
    </div>
  );
  else
    return (<div className='h-[470px] bg-[#01040f] w-full flex items-center justify-center text-center text-white bg-primary '>You are not logged in</div>)
};

export default Dashboard;
