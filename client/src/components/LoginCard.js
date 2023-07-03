import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin();
  const navigate = useNavigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    // console.log("Login submitted");
    await login(email, password);
    navigate('/dashboard')
  };
  return (
    <div className="max-w-md w-full p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl text-left font-bold mb-6">Login</h2>
      <p className=" text-left mb-6">Please login to continue</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
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
            disabled = {isLoading}
            type="submit"
            className=" bg-[#8B9A46] hover:bg-[#EEEEEE] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <a
            href="/forgot-password"
            className="text-sm text-blue-500 hover:text-blue-600 focus:outline-none focus:underline"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?
          <a
            href="/register"
            className="text-blue-500 hover:text-blue-600 focus:outline-none focus:underline"
          >
            Sign up
          </a>
        </p>
      </div>
      {error && <div>error</div>}
    </div>
  );
};

export default LoginCard;
