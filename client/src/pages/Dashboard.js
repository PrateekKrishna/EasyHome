import React from "react";
import HouseCard from "../components/HouseCard";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
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
};

export default Dashboard;
