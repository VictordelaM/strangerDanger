import { register } from "../../functions/fetches";
import "./RegisterForm.css";

const RegisterForm = () => {
    return ( 
        <>
        <form >
            <h2>Register</h2>
            <div>
                {/* <label for="username">Benutzername:</label> */}
                <input type="text" id="usernameInput" name="username" placeholder="username"></input>
            </div>
            <div>
                {/* <label for="email">E-Mail:</label> */}
                <input type="email" id="emailInput" name="email" placeholder="email"></input>
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