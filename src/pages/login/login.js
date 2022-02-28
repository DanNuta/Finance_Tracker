import style from "./login.module.css"
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handle = (e) =>{
        e.preventDefault()

        const login = {
            email: email,
            password: password
        }

        console.log(login)

        setEmail("");
        setPassword("")

    }

    return ( 
        <form onSubmit={handle}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email} />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} />


            <button>Submit</button>
        </form>
     );
}
 
export default Login;