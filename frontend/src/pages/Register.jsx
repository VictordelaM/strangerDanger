import Nav from "../components/nav/Nav";
import RegisterForm from "../components/registerForm/RegisterForm";
import { logout } from "../functions/fetches";

const Register = () => {
    
if(localStorage.getItem('token')){return (
    <>
        <Nav />
        <button onClick={logout}>logout</button>
    </>
  );}
  else{
    return(
      <>
      <Nav/>
      <RegisterForm />
      </>
    )
  }
}
 
export default Register;
