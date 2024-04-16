import { login } from "../../functions/fetches";
import "./LoginForm.css"

const LoginForm = () => {
    return ( 
        <>
        <form onSubmit={login}>
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
            <button className="loginButton" type="button">Anmelden</button>
            </div>
        </form>
        </>
     );
}
 
export default LoginForm;