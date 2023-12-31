import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios'
import {BASE_URL} from "../utils/base.js"
export const useCreateProperty = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const createProperty = async (formData) => {
    setIsLoading(true);
    setError(null);
    if (!user) {
      setError("User must be logged in");
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/properties`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
      })
      setIsLoading(false)
      console.log(response.data);
      navigate('/dashboard')
    } catch (error) {
      setError(error)
      setIsLoading(false)
      console.log(error);
    }
  };
  return { createProperty, isLoading, error };
};
