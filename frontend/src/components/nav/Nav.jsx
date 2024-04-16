import { useContext ,useEffect} from "react";
import { Link, NavLink } from "react-router-dom"
import "./Nav.css"
import { mainContext } from "../../context/mainProvider";
import { getUser, login, logout, register } from "../../functions/fetches";
import { decryptToken } from "../../functions/decrypt";

const Nav = () => {
    if(localStorage.getItem('token')){
        const {user, setUsername, setUser,token} = useContext(mainContext)
        setUsername(token)
        useEffect(() => {
            const token = decryptToken().payload.username
            getUser(token, setUser)
          }, []);
        return ( 
            <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/images">Images</NavLink>
                {/* <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Register">Register</NavLink> */}
                <NavLink to="/UploadImg">Image Upload</NavLink>
                <div id="usercard">
                    <div id="profilePicture">
                        <img src={user?.pictureUrl} alt="profilpicture" />
                    </div>
                    <div id="nameLogout">
                        <p>{user?.username}</p>
                        <button onClick={logout}>logout</button>
                    </div>
                </div>
            </nav>
            </>
         );}
         else{
            return (
                <>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/images">Images</NavLink>
                    <NavLink to="/UploadImg">Image Upload</NavLink>
                    <div id="usercard">
                        <NavLink to="/Login">Login</NavLink>
                        <NavLink to="/Register">Register</NavLink>
                    </div>
                </nav>
                </>
            )
         }
}
 
export default Nav;

