import React, { useState } from "react";

const RegisterCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle signup logic here
    console.log("Signup submitted");
  };
  return (
    <div className="max-w-md w-full p-6 bg-gray-300 rounded-lg shadow-md">
    <h2 className="text-2xl text-left font-bold mb-6">Signup</h2>
      <p className=" text-left mb-6">Please signup to continue</p>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-[#8B9A46] hover:bg-[#EEEEEE] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Signup
        </button>
      </div>
    </form>
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-500 hover:text-blue-600 focus:outline-none focus:underline"
        >
          Login
        </a>
      </p>
    </div>
  </div>
  );
};

export default RegisterCard;
