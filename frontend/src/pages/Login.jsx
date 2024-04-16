import LoginForm from "../components/loginForm/LoginForm";
import Nav from "../components/nav/Nav";
import { logout } from "../functions/fetches";

const Login = () => {
    console.log('token',localStorage.getItem('token'))
    if(localStorage.getItem('token')){return ( 
        <>
        <Nav />
        <button onClick={logout}>logout</button>
        </>
     );}else{return(
        <>
        <Nav />
        <LoginForm />
        </>
     )}
}
 
export default Login;