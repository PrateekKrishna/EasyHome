import { AuthContext } from "../context/authContext.js";
import { useContext } from "react"; 

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw Error('useAuthContext must be used inside an authContextProvider')
    }

    return context;
}