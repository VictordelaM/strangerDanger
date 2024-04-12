const LoginForm = () => {
    return ( 
        <>
        <form>
            <div>
            <label for="username">Benutzername:</label>
            <input type="text" id="username" name="username" required></input>
            </div>
            <div>
            <label for="password">Passwort:</label>
            <input type="password" id="password" name="password" required></input>
            </div>
            <div>
            <button type="button">Anmelden</button>
            </div>
        </form>
        </>
     );
}
 
export default LoginForm;