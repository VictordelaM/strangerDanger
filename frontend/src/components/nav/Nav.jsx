import { useContext ,useEffect} from "react";
import { NavLink } from "react-router-dom"
import "./Nav.css"
import { mainContext } from "../../context/mainProvider";
import { getUser, logout} from "../../functions/fetches";
import { decryptToken } from "../../functions/decrypt";

const Nav = () => {
    if(localStorage.getItem('token')){
        const {user, setUser} = useContext(mainContext)
        useEffect( () => {
            const userSet = async() =>{
                const userName = decryptToken().payload.username
                const user = await getUser(userName)
                setUser(user)
                console.log(user)
            } 
            userSet()
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
                    <img src={user?.pictureUrl} alt="profilPicture" id="profilPicture"/>
                    <div id="nameLogout">
                        <p id="username">{user?.username}</p>
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

