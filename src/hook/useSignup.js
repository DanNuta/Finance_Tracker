import { useState } from "react";
import {projectAuth} from "../firebase/config";

const useSignup = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const signup = async (email, password, displayName) =>{
        setError(null)
        setLoading(true)
        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            if(!res){
                throw new Error("Nu sa putut crea contul")
            }
            await res.user.updateProfile({displayName: displayName})
            setError(null)
            setLoading(false)
        }catch(err){
            console.log(err.messege)
            setError(err.messege)
            setLoading(false)
        }

    }
    return {error, loading, signup}
}
 
export default useSignup;