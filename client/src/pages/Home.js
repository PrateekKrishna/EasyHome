import React from 'react';
import HouseCard from '../components/HouseCard';



const Home = () => {
  return (
    <div className="bg-primary bg-[#01040f] w-full justify-center overflow-hidden flex flex-wrap gap-[30px] align-center pt-[50px] pb-[50px]">
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id={1}
      />
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id = {2}
      />
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id={3}
      />
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id = {4}
      />
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id={5}
      />
      <HouseCard 
        title = "2bhk"
        price = "10000"
        location= "Ranchi"
        id = {6}
      />
    </div>
  );
};

export default Home;
