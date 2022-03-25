import { useState } from "react";
import style from "./signin.module.css";
import {useSignup} from "../../../src/hook/useSignup";


const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const submitSignUp = (e) =>{
        e.preventDefault()

        const signUp = {
            name: name,
            email: email,
            password: password
        }

       
        
        console.log(signUp)
        setName("")
        setEmail("")
        setPassword("")

    }

    return ( 
        <form onSubmit={submitSignUp}>
            <label htmlFor="nume">Nume</label>
            <input onChange={(e) => setName(e.target.value)} type="text" value={name} />

            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email} />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} />

            <button>Create acount</button>

           

        </form>
     );
}
 
export default Signup;