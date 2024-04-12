import { login } from "../functions/fetches";

const LoginForm = () => {
    return ( 
        <>
        <form onSubmit={login}>
            <div>
            {/* <label for="username">Benutzername:</label> */}
            <input type="text" id="usernameInput" name="username" placeholder="username"></input>
            </div>
            <div>
            {/* <label for="password">Passwort:</label> */}
            <input type="password" id="passwordInput" name="password" placeholder="password"></input>
            </div>
            <div>
            <button type="button">Anmelden</button>
            </div>
        </form>
        </>
     );
}
 
export default LoginForm;