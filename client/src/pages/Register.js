import RegisterCard from "../components/RegisterCard";

const Register = () => {
  return (
    <div className="flex  items-center justify-center md:justify-between min-h-screen bg-[#01040f] md:p-[10%]">
      <div className="hidden md:block md:max-w-md md:w-full md:p-6">
        <h2 className="text-left text-white text-4xl mb-[10%]">Easy Home</h2>
        <p className="text-white ">The best place to rent house.</p>
      </div>
      <RegisterCard />
    </div>
  );
};

export default Register;
