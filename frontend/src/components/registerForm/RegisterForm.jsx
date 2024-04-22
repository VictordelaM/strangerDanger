import { register } from "../../functions/fetches";
import "./registerForm.css";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

const RegisterForm = () => {
    const [usernameExists, setUsernameExists] = useState(false)
    const [emailExists, setEmailExists] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        const res = await register(event)
        console.log({res})
        if(res.length > 0){
            setUsernameExists(res.includes('username already exists'))
            setEmailExists(res.includes('email already exists'))

        }else{
            setEmailExists(false)
            setUsernameExists(false)
            navigate("/")
        }
    }
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                {/* <label for="username">Benutzername:</label> */}
                <input type="text" id="usernameInput" name="username" placeholder="username"></input>
                {usernameExists && <p style={{color:'red'}}>username already exists</p>}
            </div>
            <div>
                {/* <label for="email">E-Mail:</label> */}
                <input type="email" id="emailInput" name="email" placeholder="email"></input>
                {emailExists && <p style={{color:'red'}}>Email already exists</p>}
            </div>
            <div>
                {/* <label for="password">Passwort:</label> */}
                <input type="password" id="passwordInput" name="password" placeholder="password"></input>
            </div>
            <div>
                <button type="submit">Registrieren</button>
            </div>
        </form>
        </>
     );
}
 
export default RegisterForm;