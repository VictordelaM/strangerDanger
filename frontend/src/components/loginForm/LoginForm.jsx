import { login } from "../../functions/fetches";
import "./LoginForm.css"
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const LoginForm = () => {
    const navigate = useNavigate()

    const onSubmit= async (event)=>{
        const status = await login(event)
        // if(status === "ok"){
        //     navigate("/")
        // }
        navigate("/")
    }

    return ( 
        <>
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <div className="usernameLogin">
            {/* <label for="username">Benutzername:</label> */}
            <input type="text" id="usernameInput" name="username" placeholder="username"></input>
            </div>
            <div className="loginPassword">
            {/* <label for="password">Passwort:</label> */}
            <input type="password" id="passwordInput" name="password" placeholder="password"></input>
            </div>
            <div>
            <button className="loginButton" type="submit">Anmelden</button>
            </div>
        </form>
        </>
     );
}
 
export default LoginForm;