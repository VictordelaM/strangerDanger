const RegisterForm = () => {
    return ( 
        <>
        <form>
            <div>
                <label for="username">Benutzername:</label>
                <input type="text" id="username" name="username"></input>
            </div>
            <div>
                <label for="email">E-Mail:</label>
                <input type="email" id="email" name="email"></input>
            </div>
            <div>
                <label for="password">Passwort:</label>
                <input type="password" id="password" name="password"></input>
            </div>
            <div>
                <button type="submit">Registrieren</button>
            </div>
        </form>
        </>
     );
}
 
export default RegisterForm;