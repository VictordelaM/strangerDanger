import { Link, NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return ( 
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/images">Images</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
            <NavLink to="/UploadImg">Image Upload</NavLink>
        </nav>
        </>
     );
}
 
export default Nav;