import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";
import {  useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/base.js"
export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()
    const login = async (email, password) =>{

        setIsLoading(true)
        setError(null)

        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        //this can even send error message
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate('/')
        }
    }

    return {login, isLoading, error}

}