import {useNavigate} from 'react-router-dom'

const HouseCard = ({ title, price, image, location, id }) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`house/${id}`)
    }

  return (
    <div className="bg-gray-300 rounded-lg shadow-md overflow-hidden w-[300px] h-[380px] ">
      <img src={"house.jpeg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-800 font-bold">{price}</p>
        <button onClick={handleClick} className="bg-[#8B9A46] text-white py-2 px-4 mt-4 rounded-md hover:bg-[#EEEEEE] hover:text-bold hover:text-black hover:border-gray-950 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HouseCard;
